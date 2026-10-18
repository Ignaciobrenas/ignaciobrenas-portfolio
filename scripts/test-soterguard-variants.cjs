const fs = require('fs');
const zlib = require('zlib');
const path = require('path');
const { chromium } = require('playwright');

// 1. Precise Soterguard Shield Grid Extraction with negative space keyhole
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
      
      // Blue shield detection: Blue must be prominent and distinctly higher than Red
      // Background and keyhole are white (r > 200, g > 200, b > 200)
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

  // Downsample to targetW x targetH
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
          if (grid[sy][sx]) {
            blueCount++;
          }
        }
      }

      // If at least 35% of the sampled area is shield blue, mark it
      if (blueCount / total >= 0.35) {
        // Pixel shading based on position (light from top-left)
        // Outer top-left edge gets highlight, bottom-right gets shadow
        const isTopOrLeft = (ty <= 1 || tx <= 1);
        const isBottomOrRight = (ty >= targetH - 2 || tx >= targetW - 2);

        let color = '#0284c7'; // Soterguard vibrant brand cyan-blue
        if (isTopOrLeft) {
          color = '#38bdf8'; // Highlight cyan
        } else if (isBottomOrRight) {
          color = '#0369a1'; // Shadow blue
        }
        result[ty][tx] = color;
      }
    }
  }

  return result;
}

// Convert grid to compact vector runs
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

  let paths = '  <!-- Screen-printed Soterguard Shield (Fabric Integrated) -->\n  <g id="soterguard-chest-print">\n';
  for (const [color, runs] of Object.entries(colorRuns)) {
    paths += `    <path d="${runs.join(' ')}" fill="${color}" />\n`;
  }
  paths += '  </g>\n';
  return paths;
}

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

function makeVariant(inputSvgName, outName, gridW, gridH, originX, originY, pixelSize = 2) {
  let svg = fs.readFileSync('public/images/sprites/' + inputSvgName, 'utf8');
  svg = svg.replace(/fill="(#[0-9a-fA-F]{6})"/g, (match, hex) => `fill="${greenToBlackTshirt(hex)}"`);
  const grid = extractShieldGrid(gridW, gridH);
  const printPaths = buildVectorRuns(grid, originX, originY, pixelSize);

  // Insert printPaths right after the second green/shirt path so it's deeply inside the shirt layer!
  // Find where shirt torso starts
  let count = 0;
  let inserted = false;
  const newSvg = svg.replace(/(<path\s+[^>]*\/>)/g, (match) => {
    count++;
    // In confident, path 3 is shirt torso. Let's insert right after path 3 or 4
    if (count === 3 && !inserted) {
      inserted = true;
      return `${match}\n${printPaths}`;
    }
    return match;
  });

  fs.writeFileSync('public/images/sprites/' + outName, inserted ? newSvg : svg.replace(/<\/svg>/, `${printPaths}\n</svg>`), 'utf8');
}

// Generate test variants
// 1. Confident: Centered chest (12x14, pixelSize 2 -> 24x28px at x=106, y=202)
makeVariant('ignacio_confident.svg', 'test_v1_center_small.svg', 12, 14, 106, 202, 2);

// 2. Confident: Wearer left chest / pectoral (10x12, pixelSize 2 -> 20x24px at x=130, y=202)
makeVariant('ignacio_confident.svg', 'test_v2_left_chest.svg', 10, 12, 130, 202, 2);

// 3. Confident: Centered chest slightly lower (14x16, pixelSize 1.8 -> 25x29px at x=105, y=204)
makeVariant('ignacio_confident.svg', 'test_v3_center_medium.svg', 13, 15, 105, 203, 2);

// 4. Wave: Centered chest (12x14, at x=135, y=226)
makeVariant('ignacio_wave.svg', 'test_v4_wave_center.svg', 12, 14, 135, 226, 2);

// 5. Wave: Wearer left chest (10x12, at x=160, y=226)
makeVariant('ignacio_wave.svg', 'test_v5_wave_left.svg', 10, 12, 160, 226, 2);

console.log('Generated test variants.');

async function captureVariants() {
  const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Soterguard Print Variants Audit</title>
  <style>
    body { background: #060b08; color: #fff; font-family: sans-serif; padding: 24px; }
    .grid { display: flex; flex-wrap: wrap; gap: 24px; }
    .card { background: #121c15; border: 1px solid #1f3526; border-radius: 8px; padding: 16px; text-align: center; }
    h3 { margin: 0 0 10px 0; font-size: 13px; color: #38bdf8; font-family: monospace; }
    p { margin: 0 0 10px 0; font-size: 11px; color: #94a3b8; }
    img { width: 220px; height: 320px; object-fit: contain; image-rendering: pixelated; background: #020503; border-radius: 4px; }
  </style>
</head>
<body>
  <h2>Soterguard Chest Integration: Screen-Print & Negative Space Test</h2>
  <div class="grid">
    <div class="card">
      <h3>V1: Confident Center Small (12x14)</h3>
      <p>Centered on chest, clear of collar & arms</p>
      <img src="/images/sprites/test_v1_center_small.svg" />
    </div>
    <div class="card">
      <h3>V2: Confident Wearer Left Chest (10x12)</h3>
      <p>Pectoral / pocket placement</p>
      <img src="/images/sprites/test_v2_left_chest.svg" />
    </div>
    <div class="card">
      <h3>V3: Confident Center Medium (13x15)</h3>
      <p>Medium centered print</p>
      <img src="/images/sprites/test_v3_center_medium.svg" />
    </div>
    <div class="card">
      <h3>V4: Wave Center (12x14)</h3>
      <p>Centered below collar</p>
      <img src="/images/sprites/test_v4_wave_center.svg" />
    </div>
    <div class="card">
      <h3>V5: Wave Wearer Left Chest (10x12)</h3>
      <p>Pectoral / pocket placement</p>
      <img src="/images/sprites/test_v5_wave_left.svg" />
    </div>
  </div>
</body>
</html>`;

  fs.writeFileSync('public/soterguard-variants.html', html, 'utf8');

  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const page = await browser.newPage({ viewport: { width: 1400, height: 900 } });
  await page.goto('http://localhost:4321/soterguard-variants.html', { waitUntil: 'networkidle' });
  await page.screenshot({ path: 'audit-screenshots/soterguard_variants_comparison.png', fullPage: true });
  await browser.close();
  console.log('Saved audit-screenshots/soterguard_variants_comparison.png');
}

module.exports = { extractShieldGrid, buildVectorRuns, greenToBlackTshirt };

if (require.main === module) {
  captureVariants().catch(console.error);
}
