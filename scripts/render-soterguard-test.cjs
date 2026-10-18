const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

async function testSoterguardSprites() {
  const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Soterguard Sprites Comparison</title>
  <style>
    body { background: #0a0f0d; color: #fff; font-family: sans-serif; padding: 20px; }
    .row { display: flex; gap: 20px; margin-bottom: 30px; align-items: flex-start; }
    .col { background: #141e18; padding: 15px; border-radius: 8px; border: 1px solid #23382b; text-align: center; }
    h3 { margin: 0 0 10px 0; font-size: 14px; color: #10b981; }
    img { width: 180px; height: 260px; object-fit: contain; image-rendering: pixelated; background: #050a07; }
    .zoom { width: 280px; height: 380px; }
  </style>
</head>
<body>
  <h2>Soterguard Chest Integration Audit</h2>
  
  <div class="row">
    <div class="col">
      <h3>ignacio_confident.svg (Original)</h3>
      <img src="/images/sprites/ignacio_confident.svg" class="zoom" />
    </div>
    <div class="col">
      <h3>ignacio_soterguard_confident.svg (Current Soterguard)</h3>
      <img src="/images/sprites/ignacio_soterguard_confident.svg" class="zoom" />
    </div>
  </div>

  <div class="row">
    <div class="col">
      <h3>ignacio_wave.svg (Original)</h3>
      <img src="/images/sprites/ignacio_wave.svg" />
    </div>
    <div class="col">
      <h3>ignacio_soterguard_wave.svg</h3>
      <img src="/images/sprites/ignacio_soterguard_wave.svg" />
    </div>
    <div class="col">
      <h3>ignacio_talk_mid.svg (Original)</h3>
      <img src="/images/sprites/ignacio_talk_mid.svg" />
    </div>
    <div class="col">
      <h3>ignacio_soterguard_talk_mid.svg</h3>
      <img src="/images/sprites/ignacio_soterguard_talk_mid.svg" />
    </div>
  </div>
</body>
</html>`;

  fs.writeFileSync('public/soterguard-test.html', html, 'utf8');
  console.log('Wrote public/soterguard-test.html');

  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const page = await browser.newPage({ viewport: { width: 1200, height: 1000 } });
  await page.goto('http://localhost:4321/soterguard-test.html', { waitUntil: 'networkidle' });
  await page.screenshot({ path: 'audit-screenshots/soterguard_zoom_comparison.png', fullPage: true });
  await browser.close();
  console.log('Saved audit-screenshots/soterguard_zoom_comparison.png');
}

testSoterguardSprites().catch(console.error);
