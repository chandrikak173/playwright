//LOCATORS
import {test} from '@playwright/test'
test('assignment',async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/")
    //using any object property
    await page.click('id=name') // await page.click('#name') --->works the same # indicates id in CSS
    await page.locator('id=name').fill("gggfdjfvj")
    await page.locator('[id="name"]').fill("Jack")

    //using CSS selector
    await page.locator("#email").fill("jack@gmail.com")
    await page.locator("#email").type('abcd')

    //using XPath
    //await page.locator('xpath=//input[@id="phone"]').fill('12345')
    await page.locator('xpath=//input[@id="phone"]').type('1111')  //deprecated - not to use
    
    //await page.pause()

    //using text
    //await page.locator("text=START").click()
    
    //await page.locator(':has-text("START")').click()     
    //Error: locator.click: Error: strict mode violation: locator(':has-text("START")') resolved to 18 elements:(be more specific)

     await page.locator('button:has-text("START")').click()  //error fixed: by specifying where to find the text
    
    //await page.locator(':has-text(Alert)').click()
    //Error: locator.click: Error: "has-text" engine expects a single string

    
    await page.locator('button:has-text("Simple Alert")').scrollIntoViewIfNeeded()
    await page.locator('button:has-text("Simple Alert")').click()

    
    // await page.goto('https://www.google.com')
    // await page.goBack()
    // await page.goForward()
    // await page.reload()
     await page.pause()
    await page.locator('id=country').selectOption('Germany')
    await page.locator('id=colors').selectOption('Green')
    await page.selectOption('id=colors','Red')
    //#ui-datepicker-div > table > tbody > tr:nth-child(3) > td.ui-datepicker-days-cell-over.ui-datepicker-today > a
     await page.pause()
    //await page.waitForSelector(selector)    
    //   //*[@id="HTML14"]/div[1]/div/svg[1]/circle
    await page.locator('(//*[@id="HTML14"]/div[1]/div//*[local-name()="svg"])[1]').scrollIntoViewIfNeeded()
    await page.locator('(//*[@id="HTML14"]/div[1]/div//*[local-name()="svg"])[1]')

    await page.locator('#HTML14 > div.widget-content > div > svg:nth-child(3) > polygon').click()
});