const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('http://localhost:4321/', { waitUntil: 'networkidle' });

  const data = await page.evaluate(() => {
    const spotlight = document.querySelector('#spotlight');
    const container = spotlight.querySelector('.mt-6');
    const cards = Array.from(container.children);
    return {
      spotlightWidth: spotlight.offsetWidth,
      containerDisplay: getComputedStyle(container).display,
      containerGridCols: getComputedStyle(container).gridTemplateColumns,
      cards: cards.map(c => ({
        tag: c.tagName,
        width: c.offsetWidth,
        left: c.offsetLeft,
        computedDisplay: getComputedStyle(c).display,
        minWidth: getComputedStyle(c).minWidth,
        position: getComputedStyle(c).position
      }))
    };
  });
  console.log('Layout Data:', JSON.stringify(data, null, 2));

  const el = await page.$('#spotlight');
  if (el) {
    await el.screenshot({ path: 'audit-screenshots/02_desktop_spotlight_fixed.png' });
    console.log('Saved audit-screenshots/02_desktop_spotlight_fixed.png');
  }
  await browser.close();
})();
