const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('http://localhost:4321/', { waitUntil: 'networkidle' });

  // Click Language Toggle in Navbar
  const langBtn = await page.$('button[title*="idioma"], button[title*="language"], header button:has-text("EN"), header button:has-text("ES")');
  if (langBtn) {
    console.log('Clicking language toggle button...');
    await langBtn.click();
    await page.waitForTimeout(600);
  }

  // Screenshot English Hero & Cover
  await page.screenshot({ path: 'audit-screenshots/10_desktop_hero_en.png' });
  console.log('Saved 10_desktop_hero_en.png');

  // Screenshot English Spotlight
  const spotlightEl = await page.$('#spotlight');
  if (spotlightEl) {
    await spotlightEl.scrollIntoViewIfNeeded();
    await page.waitForTimeout(600);
    await spotlightEl.screenshot({ path: 'audit-screenshots/11_desktop_spotlight_en.png' });
    console.log('Saved 11_desktop_spotlight_en.png');
  }

  // Verify handGreeting text
  const greetingText = await page.evaluate(() => {
    const el = document.querySelector('.hand');
    return el ? el.textContent.trim() : 'not found';
  });
  console.log('Detected greeting text in EN:', greetingText);

  await browser.close();
})();
