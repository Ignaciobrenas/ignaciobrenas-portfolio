const { chromium } = require('playwright');

async function testCvModal() {
  console.log('--- TESTING CV PREVIEW MODAL ---');
  const browser = await chromium.launch({ channel: 'msedge', headless: true });

  // 1. Desktop Test
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();

  await page.goto('http://localhost:4321/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);

  // Scroll to bottom contact section
  await page.evaluate(() => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'instant' });
  });
  await page.waitForTimeout(600);

  // Screenshot bottom CV buttons
  await page.screenshot({ path: 'audit-screenshots/cv_buttons_contact_desktop.png' });
  console.log('Saved audit-screenshots/cv_buttons_contact_desktop.png');

  // Click 'Vista previa CV'
  const previewBtn = await page.getByRole('button', { name: /Vista previa CV|Preview CV/i });
  if (previewBtn) {
    await previewBtn.click();
    await page.waitForTimeout(800);
    await page.screenshot({ path: 'audit-screenshots/cv_modal_open_desktop.png' });
    console.log('Saved audit-screenshots/cv_modal_open_desktop.png');

    // Close modal via Close button
    const closeBtn = await page.getByRole('button', { name: /Cerrar|Close/i }).first();
    if (closeBtn) {
      await closeBtn.click();
      await page.waitForTimeout(500);
      console.log('Successfully closed modal via close button');
    }
  } else {
    console.error('Preview CV button not found on desktop');
  }

  // 2. Mobile Test (375x812)
  const mobileContext = await browser.newContext({ viewport: { width: 375, height: 812 }, isMobile: true });
  const mobilePage = await mobileContext.newPage();

  await mobilePage.goto('http://localhost:4321/', { waitUntil: 'networkidle' });
  await mobilePage.waitForTimeout(1000);

  // Scroll to contact
  await mobilePage.evaluate(() => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'instant' });
  });
  await mobilePage.waitForTimeout(600);

  await mobilePage.screenshot({ path: 'audit-screenshots/cv_buttons_contact_mobile.png' });
  console.log('Saved audit-screenshots/cv_buttons_contact_mobile.png');

  const mobilePreviewBtn = await mobilePage.getByRole('button', { name: /Vista previa CV|Preview CV/i });
  if (mobilePreviewBtn) {
    await mobilePreviewBtn.click();
    await mobilePage.waitForTimeout(800);
    await mobilePage.screenshot({ path: 'audit-screenshots/cv_modal_open_mobile.png' });
    console.log('Saved audit-screenshots/cv_modal_open_mobile.png');
  } else {
    console.error('Preview CV button not found on mobile');
  }

  await browser.close();
  console.log('--- CV MODAL TEST COMPLETE ---');
}

testCvModal().catch(console.error);
