import { test, chromium, expect } from '@playwright/test';

test('open browser and page manually', async () => {
  // Launch browser
  const browser = await chromium.launch({ headless: false });

  // Create a new context + page
  const context = await browser.newContext();
  const page = await context.newPage();
  

  // Use the page
  await page.goto('https://testautomationpractice.blogspot.com/');
  await expect(page).toHaveTitle(/Automation Testing Practice/);
  await page.getByRole('textbox',{name:'Name'}).fill('Testname')

  const page1 = await context.newPage();
  await page1.goto('https://www.google.com/')
  await expect(page).toHaveTitle(/google/);
  // Cleanup
  await browser.close();
});