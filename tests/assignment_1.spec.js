import {test,expect} from '@playwright/test'
//verify status of all the elements
test('validate',async({page})=>{

    //textbox
    await page.goto('https://demoapps.qspiders.com/ui?scenario=1')
    await expect(page.getByRole('textbox',{name:'Name'})).toBeEditable()
    await expect(page.getByRole('textbox',{name:'Name'})).toBeEmpty()
    await page.getByRole('textbox',{name:'Name'}).fill("Test data")
    await expect.soft(page.getByRole('textbox',{name:'Name'})).toBeEmpty()
    await expect(page.getByRole('textbox',{name:'Name'})).toHaveValue('Test data')  //text written in the textbox
    expect(page.url()).toEqual('https://demoapps.qspiders.com/ui?scenario=1')
    expect(await page.url()).toBe('https://demoapps.qspiders.com/ui?scenario=1')
    expect(await page.title()).toBe('DemoApps | Qspiders | Text Box')
    

    await page.getByRole('button',{name:'Register'}).click()
    await expect(page.getByRole('button',{name:'Register'})).toHaveText('Register')  //text of the element. matches exact string
    await expect(page.getByRole('button',{name:'Register'})).toContainText('Regi') //text of the element. matches substring
        await expect(page.getByRole('button',{name:'Register'})).toHaveCSS('color','rgb(255, 255, 255)')

        await expect(page.getByRole('button',{name:'Register'})).toHaveCSS('background-color','rgb(249, 115, 22)')
        

        
        await expect(page.getByRole('button',{name:'Register'})).toHaveCSS('font-weight','700')
        await expect(page.getByRole('textbox',{name:'Name'})).toHaveCSS('border-color','rgb(209, 213, 219)')

        //button
    await page.goto('https://demoapps.qspiders.com/ui/button?sublist=0')
    await expect(page.getByRole('button',{name:'No'})).toBeEnabled()


    //radio
    await page.goto('https://demoapps.qspiders.com/ui/radio/disabled?sublist=2')
    await expect(page.locator('#attended_ab')).toBeDisabled()
    await expect(page.locator('//div//input[@id="willing_ab"]')).toBeDisabled()
    //checkbox
    await page.goto('https://demoapps.qspiders.com/ui/checkbox?sublist=0')
        

    await expect(page.locator('#domain_a')).not.toBeChecked()
    await page.locator('#domain_a').check()
    await expect(page.locator('#domain_a')).toBeChecked()
    //await expect(page.locator('#domain_a')).toHaveCSS('line-height','inherit')
    await page.goto('https://demoapps.qspiders.com/ui/checkbox/disabled?sublist=2')
    await expect(page.locator('#domain_a')).toBeDisabled() 
    
})