const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

// =========================================================================
// 1. EXTRACT NATIVE SOTERGUARD SHIELD (Negative Space Keyhole & Fabric Shade)
// =========================================================================
function extractShieldGrid(targetW, targetH) {
  const buf = fs.readFileSync('public/images/assets/soterguard_nuevo.png');
  let pos = 8;
  let width, height;
  const idatChunks = [];

  while (pos < buf.length) {
    const len = buf.readUInt32BE(pos);
    const type = buf.slice(pos + 4, pos + 8).toString('ascii');
    if (type === 'IHDR') {
      width = buf.readUInt32BE(pos + 8);
      height = buf.readUInt32BE(pos + 12);
    } else if (type === 'IDAT') {
      idatChunks.push(buf.slice(pos + 8, pos + 8 + len));
    } else if (type === 'IEND') break;
    pos += 12 + len;
  }

  const raw = zlib.inflateSync(Buffer.concat(idatChunks));
  const bpp = 4;
  const stride = width * bpp + 1;
  const grid = Array.from({ length: height }, () => Array(width).fill(null));

  let prevRow = Buffer.alloc(width * bpp);

  for (let y = 0; y < height; y++) {
    const rowOffset = y * stride;
    const filter = raw[rowOffset];
    const currentRow = Buffer.alloc(width * bpp);

    for (let x = 0; x < width * bpp; x++) {
      const val = raw[rowOffset + 1 + x];
      let a = x >= bpp ? currentRow[x - bpp] : 0;
      let b = prevRow[x];
      let c = x >= bpp ? prevRow[x - bpp] : 0;

      let recon = 0;
      if (filter === 0) recon = val;
      else if (filter === 1) recon = (val + a) & 0xff;
      else if (filter === 2) recon = (val + b) & 0xff;
      else if (filter === 3) recon = (val + Math.floor((a + b) / 2)) & 0xff;
      else if (filter === 4) {
        const p = a + b - c;
        const pa = Math.abs(p - a);
        const pb = Math.abs(p - b);
        const pc = Math.abs(p - c);
        let pr = (pa <= pb && pa <= pc) ? a : (pb <= pc ? b : c);
        recon = (val + pr) & 0xff;
      }
      currentRow[x] = recon;
    }
    prevRow = currentRow;

    for (let x = 0; x < width; x++) {
      const idx = x * 4;
      const r = currentRow[idx];
      const g = currentRow[idx + 1];
      const b = currentRow[idx + 2];
      const alpha = currentRow[idx + 3];
      // Detect blue shield pixels; white background & keyhole are negative space
      const isBlue = (b > 160 && b > r * 1.4 && alpha > 50);
      if (isBlue) {
        grid[y][x] = { r, g, b };
      }
    }
  }

  // Find tight bounding box of shield
  let minX = width, maxX = 0, minY = height, maxY = 0;
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (grid[y][x]) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }

  const srcW = maxX - minX + 1;
  const srcH = maxY - minY + 1;
  const result = Array.from({ length: targetH }, () => Array(targetW).fill(null));

  for (let ty = 0; ty < targetH; ty++) {
    for (let tx = 0; tx < targetW; tx++) {
      const startX = Math.floor(minX + (tx * srcW) / targetW);
      const endX = Math.ceil(minX + ((tx + 1) * srcW) / targetW);
      const startY = Math.floor(minY + (ty * srcH) / targetH);
      const endY = Math.ceil(minY + ((ty + 1) * srcH) / targetH);

      let blueCount = 0;
      let total = 0;
      for (let sy = startY; sy < endY && sy < height; sy++) {
        for (let sx = startX; sx < endX && sx < width; sx++) {
          total++;
          if (grid[sy][sx]) blueCount++;
        }
      }

      if (blueCount / total >= 0.35) {
        // Shading based on sprite light source (top-left light)
        const isTopOrLeft = (ty <= 1 || tx <= 1);
        const isBottomOrRight = (ty >= targetH - 2 || tx >= targetW - 2);

        let color = '#0284c7'; // Vibrant corporate brand cyan-blue
        if (isTopOrLeft) {
          color = '#38bdf8'; // Soft light highlight on upper shield bevel
        } else if (isBottomOrRight) {
          color = '#0369a1'; // Subtle fabric shadow on lower shield rim
        }
        result[ty][tx] = color;
      }
    }
  }

  return result;
}

// Convert grid into optimized native SVG vector runs
function buildVectorRuns(grid, originX, originY, pixelSize = 2) {
  const colorRuns = {};
  for (let y = 0; y < grid.length; y++) {
    let x = 0;
    while (x < grid[y].length) {
      const color = grid[y][x];
      if (!color) {
        x++;
        continue;
      }
      let runLen = 1;
      while (x + runLen < grid[y].length && grid[y][x + runLen] === color) {
        runLen++;
      }
      if (!colorRuns[color]) colorRuns[color] = [];
      const px = originX + x * pixelSize;
      const py = originY + y * pixelSize;
      const pw = runLen * pixelSize;
      const ph = pixelSize;
      colorRuns[color].push(`M${px},${py}h${pw}v${ph}h-${pw}Z`);
      x += runLen;
    }
  }

  let paths = '  <!-- Screen-printed Soterguard Shield (Drawn on Shirt Fabric) -->\n  <g id="soterguard-chest-print">\n';
  for (const [color, runs] of Object.entries(colorRuns)) {
    paths += `    <path d="${runs.join(' ')}" fill="${color}" />\n`;
  }
  paths += '  </g>\n';
  return paths;
}

// Color transformation: convert green shirt shades into high-depth charcoal-black t-shirt shades
function isShirtGreen(hex) {
  if (!hex || hex.length < 7) return false;
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return (g > r * 1.12 && g > b * 1.12 && g > 25) || (g > 50 && g > r && g > b);
}

function greenToBlackTshirt(hex) {
  if (!isShirtGreen(hex)) return hex;
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  const base = 10 + lum * 42;
  const redVal = Math.round(Math.min(255, base * 0.95));
  const greenVal = Math.round(Math.min(255, base * 0.96));
  const blueVal = Math.round(Math.min(255, base * 1.12));
  return `#${redVal.toString(16).padStart(2, '0')}${greenVal.toString(16).padStart(2, '0')}${blueVal.toString(16).padStart(2, '0')}`;
}

// Generate Soterguard sprite with genuine screen-printed fabric placement
const gridStandard = extractShieldGrid(10, 12); // 10x12 -> 20x24px footprint, authentic pocket proportion
const gridCoding = extractShieldGrid(8, 10);    // 8x10 -> 14.4x18px footprint for compact coding sprite

function generateSoterguardSprite(inputFilename, outputFilename, chestOrigin, isCoding = false) {
  const inputPath = path.resolve('public/images/sprites', inputFilename);
  let svg = fs.readFileSync(inputPath, 'utf8');

  // 1. Recolor shirt paths to charcoal black
  svg = svg.replace(/fill="(#[0-9a-fA-F]{6})"/g, (match, hex) => {
    return `fill="${greenToBlackTshirt(hex)}"`;
  });

  // 2. Generate pure native SVG vector paths directly on the shirt fabric
  const grid = isCoding ? gridCoding : gridStandard;
  const pxSize = isCoding ? 1.8 : 2;
  const nativePaths = buildVectorRuns(grid, chestOrigin.x, chestOrigin.y, pxSize);

  svg = svg.replace(/<\/svg>/, `${nativePaths}\n</svg>`);

  const outputPath = path.resolve('public/images/sprites', outputFilename);
  fs.writeFileSync(outputPath, svg, 'utf8');
  console.log(`Generated native integrated SVG ${outputFilename} (${svg.length} bytes)`);
}

// =========================================================================
// 2. GENERATE ALL 7 SOTERGUARD SPRITES (Left Pectoral Pocket Placement)
// =========================================================================
generateSoterguardSprite('ignacio_confident.svg', 'ignacio_soterguard_confident.svg', { x: 134, y: 202 });
generateSoterguardSprite('ignacio_wave.svg', 'ignacio_soterguard_wave.svg', { x: 162, y: 228 });
generateSoterguardSprite('ignacio_talk_mid.svg', 'ignacio_soterguard_talk_mid.svg', { x: 132, y: 210 });
generateSoterguardSprite('ignacio_talk_open.svg', 'ignacio_soterguard_talk_open.svg', { x: 132, y: 210 });
generateSoterguardSprite('ignacio_talk_gesture.svg', 'ignacio_soterguard_talk_gesture.svg', { x: 132, y: 210 });
generateSoterguardSprite('ignacio_coding.svg', 'ignacio_soterguard_coding.svg', { x: 146, y: 136 }, true);

// Clone confident to hardware to eradicate any leftover Apple repair assets
fs.copyFileSync(
  path.resolve('public/images/sprites/ignacio_soterguard_confident.svg'),
  path.resolve('public/images/sprites/ignacio_soterguard_hardware.svg')
);
console.log('Synchronized ignacio_soterguard_hardware.svg');

// =========================================================================
// 3. GENERATE PLATFORM BADGE SPRITES (GitHub, LinkedIn, Credly)
// =========================================================================
function generateGitHubSprite() {
  const baseSvg = fs.readFileSync('public/images/sprites/ignacio_confident.svg', 'utf8');
  const githubOverlay = `
  <!-- Floating Interactive GitHub Octocat Hologram HUD -->
  <g id="github-hologram" transform="translate(156, 32)">
    <circle cx="28" cy="28" r="26" fill="#030805" stroke="#10b981" stroke-width="2.5" opacity="0.95" />
    <circle cx="28" cy="28" r="30" fill="none" stroke="#10b981" stroke-dasharray="4,3" stroke-width="1.2" opacity="0.75" />
    <path d="M28 8C17 8 8 17 8 28c0 8.8 5.7 16.3 13.7 19 1 .2 1.4-.4 1.4-1v-3.5c-5.6 1.2-6.8-2.7-6.8-2.7-.9-2.3-2.2-2.9-2.2-2.9-1.8-1.2.1-1.2.1-1.2 2 .1 3.1 2.1 3.1 2.1 1.8 3.1 4.7 2.2 5.9 1.7.2-1.3.7-2.2 1.3-2.7-4.5-.5-9.2-2.2-9.2-9.9 0-2.2.8-4 2.1-5.4-.2-.5-.9-2.5.2-5.3 0 0 1.7-.5 5.5 2.1 1.6-.4 3.3-.7 5-.7s3.4.2 5 .7c3.8-2.6 5.5-2.1 5.5-2.1 1.1 2.8.4 4.8.2 5.3 1.3 1.4 2.1 3.2 2.1 5.4 0 7.7-4.7 9.4-9.2 9.9.7.6 1.4 1.8 1.4 3.7v5.5c0 .6.4 1.2 1.4 1C42.3 44.3 48 36.8 48 28c0-11-9-20-20-20z" fill="#ffffff" />
    <rect x="-8" y="60" width="72" height="18" rx="9" fill="#020804" stroke="#10b981" stroke-width="1.5" />
    <text x="28" y="73" fill="#10b981" font-family="monospace" font-size="9.5" font-weight="bold" text-anchor="middle">GITHUB</text>
  </g>
</svg>`;
  const finalSvg = baseSvg.replace(/<\/svg>/, githubOverlay);
  fs.writeFileSync('public/images/sprites/ignacio_github.svg', finalSvg, 'utf8');
  console.log('Created ignacio_github.svg successfully');
}

function generateLinkedInSprite() {
  const baseSvg = fs.readFileSync('public/images/sprites/ignacio_talk_gesture.svg', 'utf8');
  const linkedinOverlay = `
  <!-- Floating Interactive LinkedIn Platform HUD -->
  <g id="linkedin-hologram" transform="translate(170, 36)">
    <rect x="0" y="0" width="56" height="56" rx="14" fill="#0077b5" stroke="#ffffff" stroke-width="2" style="filter: drop-shadow(0 6px 16px rgba(0,119,181,0.6));" />
    <path d="M16 22h6v18h-6z M19 14a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7z M26 22h5.7v2.5h.1c.8-1.5 2.7-3.1 5.6-3.1 6 0 7.1 3.9 7.1 9V40h-6v-8.7c0-2.1 0-4.8-2.9-4.8-2.9 0-3.4 2.3-3.4 4.6V40h-6z" fill="#ffffff" />
    <rect x="-6" y="62" width="68" height="18" rx="9" fill="#030805" stroke="#38bdf8" stroke-width="1.5" />
    <text x="28" y="75" fill="#38bdf8" font-family="monospace" font-size="9.5" font-weight="bold" text-anchor="middle">LINKEDIN</text>
  </g>
</svg>`;
  const finalSvg = baseSvg.replace(/<\/svg>/, linkedinOverlay);
  fs.writeFileSync('public/images/sprites/ignacio_linkedin.svg', finalSvg, 'utf8');
  console.log('Created ignacio_linkedin.svg successfully');
}

function generateCredlySprite() {
  const baseSvg = fs.readFileSync('public/images/sprites/ignacio_wave.svg', 'utf8');
  const credlyOverlay = `
  <!-- Floating Interactive Credly Verified Credentials Shield HUD -->
  <g id="credly-hologram" transform="translate(196, 34)">
    <circle cx="28" cy="28" r="26" fill="#020804" stroke="#f59e0b" stroke-width="2.5" opacity="0.95" />
    <circle cx="28" cy="28" r="30" fill="none" stroke="#f59e0b" stroke-dasharray="4,3" stroke-width="1.2" opacity="0.8" />
    <path d="M28 11l13 5.5v11c0 8.2-5.6 15.9-13 17.5-7.4-1.6-13-9.3-13-17.5v-11L28 11z" fill="#f59e0b" opacity="0.25" />
    <path d="M28 12l11 4.7v9.4c0 7-4.7 13.6-11 15-6.3-1.4-11-8-11-15v-9.4L28 12z" stroke="#f59e0b" stroke-width="2" fill="none" />
    <path d="M24 28l3 3 7-7" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none" />
    <rect x="-8" y="60" width="72" height="18" rx="9" fill="#020804" stroke="#f59e0b" stroke-width="1.5" />
    <text x="28" y="73" fill="#f59e0b" font-family="monospace" font-size="9.5" font-weight="bold" text-anchor="middle">CREDLY</text>
  </g>
</svg>`;
  const finalSvg = baseSvg.replace(/<\/svg>/, credlyOverlay);
  fs.writeFileSync('public/images/sprites/ignacio_credly.svg', finalSvg, 'utf8');
  console.log('Created ignacio_credly.svg successfully');
}

generateGitHubSprite();
generateLinkedInSprite();
generateCredlySprite();
console.log('--- ALL SPRITES GENERATED SUCCESSFULLY ---');
