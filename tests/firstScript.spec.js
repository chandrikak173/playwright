const {test,except, expect}=require('@playwright/test')
//import { test, expect } from '@playwright/test';

test('has correct title', async ({ page }) => {
let name='Testname'
  await page.goto('https://testautomationpractice.blogspot.com/');
  await page.goto('https://www.google.com/');
  
  // Expect the page title to contain a substring
  await expect(page).toHaveTitle(/Automation Testing Practice/);

   // Locate a text box and fill it with text
  await page.getByRole('textbox', { name: 'Name' }).fill('TestName');

  // Optionally assert that the value is filled
  await expect(page.getByRole('textbox', { name: 'Name' })).toHaveValue('TestName');

  await page.getByRole('checkbox',{name:'Sunday'}).check()
  await expect(page.getByRole('checkbox',{name:'Sunday'})).toBeChecked()

//   await page.getByRole('radio',{name:'Female'}).click()
//   await page.locator()

//   for (const li of await page.getByRole('Colors').all())
//   await li.click();
});

