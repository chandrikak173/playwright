import {test,expect} from '@playwright/test'
test('assertions',async({page})=>{

    
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.getByText("Monday").check()
    await expect(page.getByText("Monday")).toBeChecked()

    await page.getByRole('textbox',{name:'Name'}).fill('Test Name')
    expect(page.getByRole('textbox',{name:'Name'})).toHaveValue('Test Name')

    //await page.getByRole('combobox',{name:'Colors'}).scrollIntoViewIfNeeded()
    //await page.locator('#colors').selectOption(['Red','Green','White'])
    let mylist=await page.getByRole('listbox',{name:'Colors'}).selectOption(['Red','Green','White'])
    console.log(mylist);
    
    // await page.getByRole('combobox',{name:'Country'}).selectOption('Japan')
    // //await expect(page.getByRole('combobox',{name:'Country'}))
    
    await page.locator('//select[@id="country"]').selectOption({index:2})
    await page.waitForTimeout(2000)
})