import {test,expect} from '@playwright/test'
//verify status of all the elements
test('validate',async({browser})=>{

    let context = await browser.newContext()
    let page=await context.newPage()
    await page.goto('https://demoapps.qspiders.com/ui?scenario=1')
    await expect(page.getByRole('button',{name:'Register'})).toHaveCSS('color','rgb(255, 255, 255)')
    await expect(page.getByRole('button',{name:'Register'})).toHaveCSS('background-color','rgb(249, 115, 22)')
    await expect(page.getByRole('button',{name:'Register'})).toHaveCSS('font-weight','700')
    await expect(page.getByRole('textbox',{name:'Name'})).toHaveCSS('border-color','rgb(209, 213, 219)')
    //await expect(page.getByRole('textbox',{name:'Name'})).toHaveCSS('padding','10px')

    let page2=await context.newPage()
    await page2.goto('https://demoapps.qspiders.com/ui/button?sublist=0')
    await expect(page2.getByRole('button',{name:'No'})).toHaveCSS('background-color','rgb(253, 186, 116)')
    await expect(page2.getByRole('button',{name:'No'})).toHaveCSS('border-color','rgb(234, 88, 12)')
    await page2.getByRole('button',{name:'No'}).click()
    await expect(page2.getByRole('button',{name:'No'})).toHaveCSS('background-color','rgb(134, 239, 172)')
    await expect(page2.getByRole('button',{name:'No'})).toHaveCSS('border-color','rgb(74, 222, 128)')



    
   await page2.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html')
   await expect(page2.locator('//tbody/tr[1]/th[1]')).toHaveCSS('padding','8px')
   await expect(page2.locator('//tbody/tr[1]/th[1]')).toHaveCSS('text-align','left','padding','8px','border-collapse','collapse')
   await expect(page2.locator('//tbody/tr[1]/th[1]')).toHaveCSS('padding','8px')
   await expect(page2.locator('//tbody/tr[1]/th[1]')).toHaveCSS('text-align','left')
   await expect(page2.locator('//tbody/tr[1]/th[1]')).toHaveCSS('font-family','arial, sans-serif')
  // await expect(page2.locator('//div[@class="main-cap-top cap-top"]')).toHaveCSS('padding','0, 0, 0, 0')
    await expect(page2.locator('//strong[@class="chrome-cpu"]')).toHaveCSS('font-size', '16px')
    //await expect(page2.locator('//strong[@class="chrome-cpu"]')).toHaveCSS('font-weight','bolder')

   
   



    



  
    //await page2.goto('https://demoapps.qspiders.com/ui/table?scenario=1')
    //await expect(page2.locator('//tbody/tr[1]/th[1]')).toHaveCSS('padding-bottom','16px')

 


/*
    let page1=await context.newPage()
    await page1.goto('https://www.google.com/search?q=playwright+tutorial&sca_esv=139a96e52bc27d75&sxsrf=AE3TifPWKglEIyMJojJXhWObENdTvK-X0A%3A1758648436986&ei=dNjSaPb_O7zA4-EPmqW8sAQ&oq=playwright+tut&gs_lp=Egxnd3Mtd2l6LXNlcnAiDnBsYXl3cmlnaHQgdHV0KgIIADIREAAYgAQYkQIYsQMYgwEYigUyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDILEAAYgAQYkQIYigUyCxAAGIAEGJECGIoFMgUQABiABDIFEAAYgARI4RhQkQhY1w1wAngBkAEAmAHJAaABrgSqAQUwLjIuMbgBA8gBAPgBAZgCBaAC1wTCAgoQABiwAxjWBBhHwgINEAAYgAQYsAMYQxiKBcICDhAAGIAEGJECGLEDGIoFwgIKEAAYgAQYFBiHApgDAIgGAZAGCpIHBTIuMi4xoAfIEbIHBTAuMi4xuAfJBMIHBTItMy4yyAci&sclient=gws-wiz-serp')
    await page1.pause()
    await page1.locator('//div[@class="b8lM7"]/span[@class="V9tjod"]//h3[contains(.,"Playwright Automation Framework: Tutorial")]').click()
*/



    



})