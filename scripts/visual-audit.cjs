const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

async function runVisualAudit() {
  console.log('--- STARTING PLAYWRIGHT VISUAL AUDIT ---');

  // 1. Generate Sprites Gallery HTML
  const spritesDir = 'public/images/sprites';
  const spriteFiles = fs.readdirSync(spritesDir).filter(f => f.endsWith('.svg'));
  
  const galleryHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Ignacio Sprites Visual Audit</title>
  <style>
    body {
      background: #030805;
      color: #e2e8f0;
      font-family: system-ui, -apple-system, sans-serif;
      margin: 0;
      padding: 30px;
    }
    h1 {
      color: #10b981;
      font-family: monospace;
      font-size: 24px;
      margin-bottom: 8px;
    }
    p {
      color: #94a3b8;
      font-size: 14px;
      margin-bottom: 24px;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
      gap: 20px;
    }
    .card {
      background: rgba(10, 31, 18, 0.45);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 12px;
      padding: 16px;
      display: flex;
      flex-direction: column;
      align-items: center;
      transition: all 0.2s;
    }
    .card:hover {
      border-color: #10b981;
      transform: translateY(-2px);
    }
    .sprite-box {
      width: 140px;
      height: 160px;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      background: radial-gradient(circle, rgba(16, 185, 129, 0.08) 0%, transparent 70%);
      margin-bottom: 12px;
      border-bottom: 1px dashed rgba(255,255,255,0.08);
      padding-bottom: 4px;
    }
    .sprite-box img {
      max-width: 130px;
      max-height: 150px;
      object-fit: contain;
      image-rendering: pixelated;
    }
    .title {
      font-family: monospace;
      font-size: 11px;
      color: #38bdf8;
      text-align: center;
      word-break: break-all;
      margin-bottom: 4px;
    }
    .badge {
      font-size: 9px;
      padding: 2px 6px;
      border-radius: 4px;
      background: rgba(16, 185, 129, 0.15);
      color: #10b981;
      border: 1px solid rgba(16, 185, 129, 0.3);
    }
    .badge-soterguard {
      background: rgba(56, 189, 248, 0.15);
      color: #38bdf8;
      border-color: rgba(56, 189, 248, 0.3);
    }
  </style>
</head>
<body>
  <h1>IGNACIO BREÑAS — 32-BIT SPRITE MATRIX AUDIT</h1>
  <p>Reviewing all ${spriteFiles.length} native SVG vector sprites for visual hierarchy, facial proportions, posture, and badge alignment.</p>
  <div class="grid">
    ${spriteFiles.map(file => {
      const isSoterguard = file.includes('soterguard');
      const isPlatform = file.includes('github') || file.includes('linkedin') || file.includes('credly');
      return `
      <div class="card">
        <div class="sprite-box">
          <img src="/images/sprites/${file}" alt="${file}" />
        </div>
        <div class="title">${file.replace('ignacio_', '').replace('.svg', '')}</div>
        <span class="badge ${isSoterguard ? 'badge-soterguard' : ''}">${isSoterguard ? 'SOTERGUARD' : (isPlatform ? 'PLATFORM' : 'CORE')}</span>
      </div>
      `;
    }).join('\n')}
  </div>
</body>
</html>`;

  fs.writeFileSync('public/sprites-gallery.html', galleryHtml, 'utf8');
  console.log('Generated public/sprites-gallery.html');

  // Ensure output screenshots folder exists
  const outDir = 'audit-screenshots';
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const browser = await chromium.launch({ channel: 'msedge', headless: true });

  const consoleLogs = [];
  const errors = [];

  // Desktop Page
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();

  page.on('console', msg => {
    if (msg.type() === 'error') errors.push(msg.text());
    else consoleLogs.push(`[${msg.type()}] ${msg.text()}`);
  });

  page.on('pageerror', err => {
    errors.push(err.message);
  });

  console.log('Navigating to sprites gallery...');
  await page.goto('http://localhost:4321/sprites-gallery.html', { waitUntil: 'networkidle' });
  await page.screenshot({ path: path.join(outDir, '00_sprites_gallery.png'), fullPage: true });
  console.log('Saved 00_sprites_gallery.png');

  console.log('Navigating to home page (Desktop 1440x900)...');
  await page.goto('http://localhost:4321/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);

  // Screenshot Hero & Stage
  await page.screenshot({ path: path.join(outDir, '01_desktop_hero.png') });
  console.log('Saved 01_desktop_hero.png');

  // Scroll to Spotlight
  const spotlightEl = await page.$('#spotlight');
  if (spotlightEl) {
    await spotlightEl.scrollIntoViewIfNeeded();
    await page.waitForTimeout(600);
    await spotlightEl.screenshot({ path: path.join(outDir, '02_desktop_spotlight.png') });
    console.log('Saved 02_desktop_spotlight.png');
  }

  // Scroll to Projects / Work
  const workEl = await page.$('#work');
  if (workEl) {
    await workEl.scrollIntoViewIfNeeded();
    await page.waitForTimeout(600);
    await page.screenshot({ path: path.join(outDir, '03_desktop_work.png') });
    console.log('Saved 03_desktop_work.png');
  }

  // Scroll to Experience
  const expEl = await page.$('#experience');
  if (expEl) {
    await expEl.scrollIntoViewIfNeeded();
    await page.waitForTimeout(600);
    await page.screenshot({ path: path.join(outDir, '04_desktop_experience.png') });
    console.log('Saved 04_desktop_experience.png');
  }

  // Scroll to Stack
  const stackEl = await page.$('#stack');
  if (stackEl) {
    await stackEl.scrollIntoViewIfNeeded();
    await page.waitForTimeout(600);
    await page.screenshot({ path: path.join(outDir, '05_desktop_stack.png') });
    console.log('Saved 05_desktop_stack.png');
  }

  // Scroll to Certifications
  const certEl = await page.$('#certifications');
  if (certEl) {
    await certEl.scrollIntoViewIfNeeded();
    await page.waitForTimeout(600);
    await page.screenshot({ path: path.join(outDir, '06_desktop_certifications.png') });
    console.log('Saved 06_desktop_certifications.png');
  }

  // Mobile Viewport (iPhone 13/14/15 size: 375x812)
  console.log('\n--- TESTING MOBILE VIEWPORT (375x812) ---');
  const mobileContext = await browser.newContext({ viewport: { width: 375, height: 812 }, isMobile: true });
  const mobilePage = await mobileContext.newPage();
  await mobilePage.goto('http://localhost:4321/', { waitUntil: 'networkidle' });
  await mobilePage.waitForTimeout(1000);

  await mobilePage.screenshot({ path: path.join(outDir, '07_mobile_hero.png') });
  console.log('Saved 07_mobile_hero.png');

  const mobileSpotlight = await mobilePage.$('#spotlight');
  if (mobileSpotlight) {
    await mobileSpotlight.scrollIntoViewIfNeeded();
    await mobilePage.waitForTimeout(600);
    await mobilePage.screenshot({ path: path.join(outDir, '08_mobile_spotlight.png') });
    console.log('Saved 08_mobile_spotlight.png');
  }

  const mobileExp = await mobilePage.$('#experience');
  if (mobileExp) {
    await mobileExp.scrollIntoViewIfNeeded();
    await mobilePage.waitForTimeout(600);
    await mobilePage.screenshot({ path: path.join(outDir, '09_mobile_experience.png') });
    console.log('Saved 09_mobile_experience.png');
  }

  await browser.close();

  console.log('\n--- AUDIT SUMMARY ---');
  console.log('Total console errors caught:', errors.length);
  if (errors.length > 0) {
    console.error('Errors:', errors);
  } else {
    console.log('Zero runtime or asset loading errors detected!');
  }
}

runVisualAudit().catch(err => {
  console.error('Audit failed:', err);
  process.exit(1);
});
