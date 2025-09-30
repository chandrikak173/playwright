import {expect, test} from '@playwright/test'
test('frames',async({page})=>{

    await page.goto('https://ui.vision/demo/webtest/frames/')
    console.log(await page.frames());
    console.log(await page.frames().length);

    //--------------Using page.frame()
    let frame1=page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})
    await frame1.locator('//input').fill('this is frame1')

    //---------------Using frameLocator
    let frame2=await page.frameLocator('//frame[@src="frame_2.html"]')
    await frame2.locator('//input').fill('This is Frame2')
  
   //let frame3=page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'})
   // let innerFrame=frame3.frameLocator('body > center > iframe')
   // let innerFrame=frame3.frameLocator('//iframe[@src="https://docs.google.com/forms/d/1yfUq-GO9BEssafd6TvHhf0D6QLDVG3q5InwNE2FFFFQ/viewform?embedded=true"]')
  
   //using contentFrame()
    let frame3=await page.locator('//frame[@src="frame_3.html"]').contentFrame()
    await frame3.locator('//input').fill('Frame3')
    let innerFrame=await frame3.locator('//iframe[@src="https://docs.google.com/forms/d/1yfUq-GO9BEssafd6TvHhf0D6QLDVG3q5InwNE2FFFFQ/viewform?embedded=true"]').contentFrame()
    await innerFrame.locator('(//div[@class="AB7Lab Id5V1"])[1]').click()

    })

    //

    test('frames_qspiders',async({page})=>{
        /*await page.goto('https://demoapps.qspiders.com/ui/frames')
        let login_frame=page.locator('//iframe[@class="w-full h-96"]').contentFrame()
        await login_frame.locator('//input[@id="username"]').fill('username')
        await login_frame.locator('//input[@id="password"]').fill('password')
        await login_frame.locator('//button[@id="submitButton"]').click()
        await page.waitForTimeout(2000)
        */

        await page.goto('https://demoapps.qspiders.com/ui/frames/nested?sublist=1')
        let outermost=page.frameLocator('//iframe[@class="w-full h-96"]')
        let login_frame1=await page.frameLocator('//section[@class="main_form_container"]//iframe')        
        await login_frame1.locator('//input[@id="email"]').fill('username@gmail.com')
        //await login_frame1.locator('#password').fill('pwd')       
    })
    
    