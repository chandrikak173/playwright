// import {test,expect} from '@playwright/test'
// test('flipkart',async({page})=>{
//     await page.goto('https://testautomationpractice.blogspot.com/')
//     let gender= page.locator('//input[@class="form-check-input" and @id="male"]')
//     await page.waitForSelector(gender);
//     await gender.click({force:true})
//     await expect(gender).toBeChecked();
// })


import { test, expect } from '@playwright/test';

test('flipkart demo', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  // Create locator for gender radio button
  const gender = page.locator('//input[@class="form-check-input" and @id="male"]');
  await gender.scrollIntoViewIfNeeded();

  // Click it (auto-waits for visibility)
  await gender.click();

  // Assert it is checked
  await expect(gender).toBeChecked();
  await page.waitForTimeout(3000); 
});