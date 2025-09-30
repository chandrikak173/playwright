import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  await page.getByRole('textbox', { name: 'Enter Name' }).click();
  await page.getByRole('textbox', { name: 'Enter Name' }).fill('test');
  await page.getByRole('textbox', { name: 'Enter EMail' }).click();
  await page.getByRole('textbox', { name: 'Enter EMail' }).fill('test@gmail.com');
  await page.getByRole('radio', { name: 'Male', exact: true }).check();
  await page.getByRole('checkbox', { name: 'Monday' }).check();
  await page.getByRole('checkbox', { name: 'Tuesday' }).check();
  await page.getByRole('checkbox', { name: 'Thursday' }).check();
  await page.getByLabel('Country:').selectOption('australia');
  await page.getByLabel('Colors:').selectOption('green');
  await page.getByLabel('Sorted List:').selectOption('deer');
  await page.locator('#singleFileInput').click();
  await page.locator('#singleFileInput').setInputFiles('JavaScript On Programs.docx');
  await page.locator('#post-body-1307673142697428135').getByRole('button', { name: 'Submit' }).click();
});