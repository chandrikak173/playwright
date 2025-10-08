import {test} from '@playwright/test'
test('',async({page})=>{

    await page.goto('https://www.flipkart.com/')
    await page.getByTitle("Search for Products, Brands and More").nth(1).fill("books")
    await page.keyboard.press('Enter')
    // await page.pause()
    let slider=page.locator('//div[@class="-suZGK"]/div[@class="Oyj7AF"]/div[@class="iToJ4v Kaqq1s"]/div[@class="PYKUdo"]')
    //find the co-ordinates of the locator slider
    let box=await slider.boundingBox()
    await page.mouse.move(box.x+box.width/2,box.y+box.height/2)
    await page.mouse.down()
    await page.mouse.move(box.x+100,box.y+box.height/2,{steps:10})
    await page.mouse.up()
    let val=await page.locator('//div[@class="suthUA"]').textContent()
    console.log(val);
})