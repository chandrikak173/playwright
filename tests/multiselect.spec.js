import {test,expect} from '@playwright/test'

test('dropdown',async({page})=>{

    await page.goto('https://www.amazon.in/')
    await page.locator('//input[@id="twotabsearchtextbox"]').fill('shoes')
    //await page.locator('//div[@role="row"]').last().waitFor({state:'visible'})
    await page.waitForSelector('//div[@role="row"]')
    let suggestion=await page.locator('//div[@role="row"]').all()
    for(let val of suggestion)
    { 
        if(await val.textContent()==='shoes for woman')
        {
            //console.log(await val.textContent())
            await val.click()
            //console.log(await page.url());
            await page.waitForURL(page.url())
            break
        }
    }
    expect(page.url()).not.toEqual('https://www.amazon.in/')
})

test.only('myntra',async({page})=>{

await page.goto('https://www.myntra.com/')

await page.locator('//input[@class="desktop-searchBar"]').type('shoes')
// await page.getByPlaceholder('Search for products, brands and more').fill('shoes')  not working
await page.locator('//li[@class="desktop-suggestion null"]')
await page.waitForSelector('//li[@class="desktop-suggestion null"]')
await page.locator('//li[@class="desktop-suggestion null"]').nth(3).click()
})
// //li[@class="desktop-suggestion null"]

