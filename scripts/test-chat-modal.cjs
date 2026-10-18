const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('http://localhost:4321/', { waitUntil: 'networkidle' });

  // Click "HABLAR CON IGNACIO (32-BIT)" button
  const chatBtn = await page.$('button:has-text("HABLAR CON IGNACIO"), button:has-text("CHAT WITH IGNACIO")');
  if (chatBtn) {
    console.log('Clicking chat button...');
    await chatBtn.click();
    await page.waitForTimeout(600);

    // Screenshot Modal
    await page.screenshot({ path: 'audit-screenshots/12_chat_modal_open.png' });
    console.log('Saved 12_chat_modal_open.png');

    // Click on "GitHub & Repositorios" FAQ chip
    const faqBtn = await page.$('button:has-text("GitHub"), button:has-text("Repositorios")');
    if (faqBtn) {
      console.log('Clicking GitHub FAQ chip...');
      await faqBtn.click();
      await page.waitForTimeout(1500);
      await page.screenshot({ path: 'audit-screenshots/13_chat_modal_conversation.png' });
      console.log('Saved 13_chat_modal_conversation.png');
    }
  }

  await browser.close();
})();
