const fs = require('fs');
const { chromium } = require('playwright');
const { extractShieldGrid, buildVectorRuns } = require('./test-soterguard-variants.cjs');

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

// Let's test confident with:
// Option A: Left pectoral (viewer's right: x: 134, y: 202, 10x12)
// Option B: Left pectoral slightly larger (x: 132, y: 200, 11x13)
// Option C: Centered chest (x: 104, y: 204, 11x13)
// Option D: Centered chest (x: 104, y: 202, 12x14)
// Option E: Right pectoral (viewer's left: x: 80, y: 202, 10x12)

function makeTest(inputName, outName, gridW, gridH, ox, oy, pxSize = 2) {
  let svg = fs.readFileSync('public/images/sprites/' + inputName, 'utf8');
  svg = svg.replace(/fill="(#[0-9a-fA-F]{6})"/g, (match, hex) => `fill="${greenToBlackTshirt(hex)}"`);
  const grid = extractShieldGrid(gridW, gridH);
  const printPaths = buildVectorRuns(grid, ox, oy, pxSize);
  
  // Append right before </svg>
  const finalSvg = svg.replace(/<\/svg>/, `${printPaths}\n</svg>`);
  fs.writeFileSync('public/images/sprites/' + outName, finalSvg, 'utf8');
}

makeTest('ignacio_confident.svg', 'test_conf_left_10x12.svg', 10, 12, 134, 202, 2);
makeTest('ignacio_confident.svg', 'test_conf_left_11x13.svg', 11, 13, 132, 200, 2);
makeTest('ignacio_confident.svg', 'test_conf_center_11x13.svg', 11, 13, 104, 204, 2);
makeTest('ignacio_confident.svg', 'test_conf_center_12x14.svg', 12, 14, 104, 202, 2);
makeTest('ignacio_confident.svg', 'test_conf_right_10x12.svg', 10, 12, 80, 202, 2);

// Wave variants
makeTest('ignacio_wave.svg', 'test_wave_left_10x12.svg', 10, 12, 160, 226, 2);
makeTest('ignacio_wave.svg', 'test_wave_center_12x14.svg', 12, 14, 135, 226, 2);

// Talk mid
makeTest('ignacio_talk_mid.svg', 'test_talk_left_10x12.svg', 10, 12, 142, 208, 2);
makeTest('ignacio_talk_mid.svg', 'test_talk_center_12x14.svg', 12, 14, 118, 208, 2);

// Coding
makeTest('ignacio_coding.svg', 'test_coding_left_8x10.svg', 8, 10, 115, 150, 1.8);
makeTest('ignacio_coding.svg', 'test_coding_center_9x11.svg', 9, 11, 98, 148, 1.8);

console.log('Generated pectoral test sprites.');

async function runTest() {
  const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Pectoral Placement Audit</title>
  <style>
    body { background: #050806; color: #fff; font-family: sans-serif; padding: 20px; }
    h2 { color: #10b981; font-family: monospace; }
    .section { margin-bottom: 30px; }
    .grid { display: flex; flex-wrap: wrap; gap: 20px; }
    .card { background: #0f1712; border: 1px solid #1c2b21; border-radius: 8px; padding: 12px; text-align: center; }
    h4 { margin: 0 0 6px 0; font-size: 12px; color: #38bdf8; font-family: monospace; }
    img { width: 180px; height: 260px; object-fit: contain; image-rendering: pixelated; background: #020403; }
  </style>
</head>
<body>
  <h2>Ignacio Confident Placement Options</h2>
  <div class="grid">
    <div class="card">
      <h4>Option A: Left Pectoral (10x12)</h4>
      <img src="/images/sprites/test_conf_left_10x12.svg" />
    </div>
    <div class="card">
      <h4>Option B: Left Pectoral (11x13)</h4>
      <img src="/images/sprites/test_conf_left_11x13.svg" />
    </div>
    <div class="card">
      <h4>Option C: Center Chest (11x13)</h4>
      <img src="/images/sprites/test_conf_center_11x13.svg" />
    </div>
    <div class="card">
      <h4>Option D: Center Chest (12x14)</h4>
      <img src="/images/sprites/test_conf_center_12x14.svg" />
    </div>
    <div class="card">
      <h4>Option E: Right Pectoral (10x12)</h4>
      <img src="/images/sprites/test_conf_right_10x12.svg" />
    </div>
  </div>

  <h2>Wave, Talk & Coding Placements</h2>
  <div class="grid">
    <div class="card">
      <h4>Wave Left Pectoral (10x12)</h4>
      <img src="/images/sprites/test_wave_left_10x12.svg" />
    </div>
    <div class="card">
      <h4>Wave Center (12x14)</h4>
      <img src="/images/sprites/test_wave_center_12x14.svg" />
    </div>
    <div class="card">
      <h4>Talk Left Pectoral (10x12)</h4>
      <img src="/images/sprites/test_talk_left_10x12.svg" />
    </div>
    <div class="card">
      <h4>Talk Center (12x14)</h4>
      <img src="/images/sprites/test_talk_center_12x14.svg" />
    </div>
    <div class="card">
      <h4>Coding Left (8x10)</h4>
      <img src="/images/sprites/test_coding_left_8x10.svg" />
    </div>
    <div class="card">
      <h4>Coding Center (9x11)</h4>
      <img src="/images/sprites/test_coding_center_9x11.svg" />
    </div>
  </div>
</body>
</html>`;

  fs.writeFileSync('public/pectoral-audit.html', html, 'utf8');

  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const page = await browser.newPage({ viewport: { width: 1400, height: 950 } });
  await page.goto('http://localhost:4321/pectoral-audit.html', { waitUntil: 'networkidle' });
  await page.screenshot({ path: 'audit-screenshots/pectoral_placement_audit.png', fullPage: true });
  await browser.close();
  console.log('Saved audit-screenshots/pectoral_placement_audit.png');
}

runTest().catch(console.error);
