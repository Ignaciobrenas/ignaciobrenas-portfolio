const fs = require('fs');
const zlib = require('zlib');

function getLogoGrid(targetW, targetH) {
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
      if (alpha > 40) {
        grid[y][x] = { r, g, b, alpha };
      }
    }
  }

  // Bounding box:
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

      let sumR = 0, sumG = 0, sumB = 0, count = 0;
      for (let sy = startY; sy < endY && sy < height; sy++) {
        for (let sx = startX; sx < endX && sx < width; sx++) {
          if (grid[sy][sx]) {
            sumR += grid[sy][sx].r;
            sumG += grid[sy][sx].g;
            sumB += grid[sy][sx].b;
            count++;
          }
        }
      }

      if (count > 0 && count >= (endX - startX) * (endY - startY) * 0.25) {
        const avgR = Math.round(sumR / count);
        const avgG = Math.round(sumG / count);
        const avgB = Math.round(sumB / count);
        // Clean palette to 32-bit pixel art shades
        let hex = '#4fa0e2';
        if (avgR > 210 && avgG > 210 && avgB > 210) hex = '#FFFFFF';
        else if (avgB > 180 && avgR < 80) hex = '#2B82D9';
        else if (avgB > 210) hex = '#68B4F5';
        else if (avgB < 140) hex = '#1D5A9C';
        else hex = '#4298E1';

        result[ty][tx] = hex;
      }
    }
  }

  return result;
}

// Generate native SVG path string for a chest origin
function generateNativePaths(grid, originX, originY, pixelSize = 2) {
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

  let paths = '  <!-- Native Integrated Soterguard Shield Vector Paths -->\n  <g id="soterguard-chest-emblem">\n';
  // Subtle emblem base shadow for realistic fabric integration
  for (const [color, runList] of Object.entries(colorRuns)) {
    paths += `    <path d="${runList.join(' ')}" fill="${color}" />\n`;
  }
  paths += '  </g>\n';
  return paths;
}

module.exports = { getLogoGrid, generateNativePaths };

if (require.main === module) {
  const grid = getLogoGrid(20, 24);
  const paths = generateNativePaths(grid, 100, 180, 2);
  console.log('Sample native paths generated, length:', paths.length);
  console.log(paths.slice(0, 400));
}
