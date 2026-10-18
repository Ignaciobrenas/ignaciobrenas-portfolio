const { chromium } = require('playwright');

async function testAboutSection() {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1100 } });
  
  await page.goto('http://localhost:4321/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);
  
  await page.evaluate(() => {
    const el = document.getElementById('about');
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: y, behavior: 'instant' });
    }
  });
  
  await page.waitForTimeout(600);
  await page.screenshot({ path: 'audit-screenshots/about_paragraphs_verified.png' });
  console.log('Saved audit-screenshots/about_paragraphs_verified.png');
  
  await browser.close();
}

testAboutSection().catch(console.error);
