import {test} from '@playwright/test'
import { text } from 'stream/consumers';
test('methods',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    //all: returns and array the locators of all the elements inside the given locator
    let locators1=await page.locator('//*[@id="post-body-1307673142697428135"]/div[4]/div').all()
    console.log(locators1);
    
    //returns an array of all the text of the elemets inside the given locator
    let locators2=await page.locator('//*[@id="post-body-1307673142697428135"]/div[4]/div').allInnerTexts()
    console.log(locators2);

    //returns the text value of the locator. If the locator has more than 1 text value,you'll get error
    //    Error: locator.innerText: Error: strict mode violation: 
    // locator('//*[@id="post-body-1307673142697428135"]/div[4]/div') resolved to 7 elements:
    //let locators5=await page.locator('//*[@id="post-body-1307673142697428135"]/div[4]/div').innerText()
    //console.log(locators5);

    let locators3=await page.locator('//*[@id="post-body-1307673142697428135"]/div[4]/div').allTextContents()
    console.log(locators3);

    //innerHTML(): returns HTML tags of inner element. If more then one element: error
    let locators4=await page.locator('(//div[@class="form-check form-check-inline"])[1]').innerHTML()
    console.log(locators4);  
})