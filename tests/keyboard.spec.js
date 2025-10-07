import {test} from '@playwright/test'
test('keyboard',async({page})=>{

await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
await page.getByPlaceholder('Username').click()
await page.keyboard.insertText('Admin')
await page.getByPlaceholder('Password').click()
await page.keyboard.type('admin123')
page.getByRole('button',{name:'Login'})
await page.keyboard.press('Enter')
await page.goto('https://testautomationpractice.blogspot.com/')
await page.locator('//body').click()

//await page.mouse.down()
// await page.mouse.up()
for(let i=0;i<3;i++)
{
    await page.keyboard.down('ArrowDown')
    await page.waitForTimeout(500)
    
}

/*
//mouse actions

await page.goto('https://demoapps.qspiders.com/ui/clickHold?sublist=0')
//click()
await page.locator('#circle').click()
//rightclick
await page.locator('#circle').click({button:'right'})
//dbl click
await page.locator('#circle').dblclick()
await page.waitForTimeout(2000)
//click and hold
await page.locator('#circle').hover()
await page.mouse.down() //default left click
await page.waitForTimeout(3000)
await page.mouse.up()


//drag and drop


await page.goto('https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2')
await page.getByText('Laptop Charger').dragTo(page.getByText('Laptop Accessories'))

//drag and drop manually
await page.getByText('Mobile Charger').hover()
await page.mouse.down()
await page.getByText('Mobile Accessories').hover()
await page.mouse.up()



//drag and drop using boundingbox()
let target=await page.getByText('Laptop Accessories').boundingBox()
await page.getByText('Laptop Cover').hover()
await page.mouse.down()
await page.mouse.move(target.x,target.y)
await page.mouse.up()git revert 
await page.waitForTimeout(3000)


await page.goto('https://testautomationpractice.blogspot.com/')
let target1= await page.locator('#droppable').boundingBox()
await page.locator('#draggable').scrollIntoViewIfNeeded()
await page.locator('#draggable').hover()
await page.mouse.down()
await page.waitForTimeout(3000)

await page.mouse.move(target1.width/2,target1.height/2)
await page.mouse.up()
await page.waitForTimeout(3000)

//scroll


await page.goto('https://demoapps.qspiders.com/ui/scroll/newTabVertical')
await page.waitForTimeout(1000)
await page.mouse.wheel(0,500)
await page.goto('https://demoapps.qspiders.com/ui/scroll/newTabHorizontal')
await page.waitForTimeout(1000)
await page.mouse.wheel(500,0)
*/
})