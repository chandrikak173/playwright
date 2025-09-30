import {test,expect, chromium} from '@playwright/test'
test('pageMethods',async({page})=>{

    await page.goto("https://www.google.com")

    //returns the size of the browser context
    console.log(await page.viewportSize());

    //to change the size of the browser context
    await page.setViewportSize({width:1000,height:1000})
    console.log(await page.viewportSize());

    // returns the title of the current page
    console.log(await page.title())
    // returns the url of the current page
    console.log(await page.url());
    let date=new Date().getTime()
    console.log(date);
    await page.screenshot({path:`.\screenshots\screenshot${date}.png`})
        
})

test('browserC',async({browser})=>{
  // let chrome =await chromium.launch();
   let br=await browser.newContext()
   let page1=await br.newPage()
   await page1.goto("https://www.geeksforgeeks.org/javascript/closure-in-javascript/");
   let page2=await br.newPage()
   await page2.goto("https://www.geeksforgeeks.org")
})


// test('testPageMethods',async({page})=>{

//     await page.goto("https://www.google.com")
//     page.getByRole('link',{name:'Gmail'}).click()
//     page.goBack()
//     page.pause()
//     await page.waitForTimeout(2000)
// })


