const fs = require('fs');
const { chromium } = require('playwright');
const { extractShieldGrid, buildVectorRuns, greenToBlackTshirt } = require('./test-soterguard-variants.cjs');

// Shield grids
const gridLeftPectoral = extractShieldGrid(10, 12);
const gridCenterChest = extractShieldGrid(12, 14);
const gridCoding = extractShieldGrid(8, 10);

function createTestSprite(baseFile, outFile, grid, x, y, pxSize = 2) {
  let svg = fs.readFileSync('public/images/sprites/' + baseFile, 'utf8');
  svg = svg.replace(/fill="(#[0-9a-fA-F]{6})"/g, (match, hex) => `fill="${greenToBlackTshirt(hex)}"`);
  const vectorPaths = buildVectorRuns(grid, x, y, pxSize);
  const finalSvg = svg.replace(/<\/svg>/, `${vectorPaths}\n</svg>`);
  fs.writeFileSync('public/images/sprites/' + outFile, finalSvg, 'utf8');
}

// SET 1: LEFT PECTORAL (Corporate Swag Pocket Placement)
createTestSprite('ignacio_confident.svg', 'set1_confident.svg', gridLeftPectoral, 134, 202, 2);
createTestSprite('ignacio_wave.svg', 'set1_wave.svg', gridLeftPectoral, 162, 228, 2);
createTestSprite('ignacio_talk_mid.svg', 'set1_talk_mid.svg', gridLeftPectoral, 132, 210, 2);
createTestSprite('ignacio_talk_open.svg', 'set1_talk_open.svg', gridLeftPectoral, 132, 210, 2);
createTestSprite('ignacio_talk_gesture.svg', 'set1_talk_gesture.svg', gridLeftPectoral, 132, 210, 2);
createTestSprite('ignacio_coding.svg', 'set1_coding.svg', gridCoding, 146, 136, 1.8);

// SET 2: CENTER CHEST (Branded Logo Graphic Tee Placement)
createTestSprite('ignacio_confident.svg', 'set2_confident.svg', gridCenterChest, 104, 204, 2);
createTestSprite('ignacio_wave.svg', 'set2_wave.svg', gridCenterChest, 136, 226, 2);
createTestSprite('ignacio_talk_mid.svg', 'set2_talk_mid.svg', gridCenterChest, 116, 208, 2);
createTestSprite('ignacio_talk_open.svg', 'set2_talk_open.svg', gridCenterChest, 116, 208, 2);
createTestSprite('ignacio_talk_gesture.svg', 'set2_talk_gesture.svg', gridCenterChest, 116, 208, 2);
createTestSprite('ignacio_coding.svg', 'set2_coding.svg', gridCoding, 144, 136, 1.8);

async function compareSets() {
  const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Set 1 (Left Pectoral) vs Set 2 (Center Chest)</title>
  <style>
    body { background: #060a08; color: #fff; font-family: monospace; padding: 24px; }
    h2 { color: #10b981; font-size: 16px; margin: 24px 0 12px 0; border-bottom: 1px solid #1f3327; padding-bottom: 6px; }
    .grid { display: flex; gap: 16px; overflow-x: auto; margin-bottom: 24px; }
    .card { background: #0e1711; border: 1px solid #1b2d20; border-radius: 6px; padding: 12px; text-align: center; flex: 0 0 160px; }
    h4 { margin: 0 0 8px 0; font-size: 11px; color: #38bdf8; }
    img { width: 140px; height: 200px; object-fit: contain; image-rendering: pixelated; background: #020403; }
  </style>
</head>
<body>
  <h2>SET 1: LEFT PECTORAL PRINT (Corporate Polo / Tee Pocket Area)</h2>
  <div class="grid">
    <div class="card"><h4>Confident</h4><img src="/images/sprites/set1_confident.svg" /></div>
    <div class="card"><h4>Wave</h4><img src="/images/sprites/set1_wave.svg" /></div>
    <div class="card"><h4>Talk Mid</h4><img src="/images/sprites/set1_talk_mid.svg" /></div>
    <div class="card"><h4>Talk Open</h4><img src="/images/sprites/set1_talk_open.svg" /></div>
    <div class="card"><h4>Talk Gesture</h4><img src="/images/sprites/set1_talk_gesture.svg" /></div>
    <div class="card"><h4>Coding</h4><img src="/images/sprites/set1_coding.svg" /></div>
  </div>

  <h2>SET 2: CENTER CHEST PRINT (Branded Tech Tee)</h2>
  <div class="grid">
    <div class="card"><h4>Confident</h4><img src="/images/sprites/set2_confident.svg" /></div>
    <div class="card"><h4>Wave</h4><img src="/images/sprites/set2_wave.svg" /></div>
    <div class="card"><h4>Talk Mid</h4><img src="/images/sprites/set2_talk_mid.svg" /></div>
    <div class="card"><h4>Talk Open</h4><img src="/images/sprites/set2_talk_open.svg" /></div>
    <div class="card"><h4>Talk Gesture</h4><img src="/images/sprites/set2_talk_gesture.svg" /></div>
    <div class="card"><h4>Coding</h4><img src="/images/sprites/set2_coding.svg" /></div>
  </div>
</body>
</html>`;

  fs.writeFileSync('public/compare-sets.html', html, 'utf8');

  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const page = await browser.newPage({ viewport: { width: 1300, height: 900 } });
  await page.goto('http://localhost:4321/compare-sets.html', { waitUntil: 'networkidle' });
  await page.screenshot({ path: 'audit-screenshots/compare_sets.png', fullPage: true });
  await browser.close();
  console.log('Saved audit-screenshots/compare_sets.png');
}

compareSets().catch(console.error);
