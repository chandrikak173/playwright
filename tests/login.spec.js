import {test,expect} from '@playwright/test'
test('login',async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/')
    let un=page.getByPlaceholder('Username')
    await un.fill('Admin')
    let password=page.getByPlaceholder('Password')
    await password.fill('admin123')
    await page.getByRole('button',{name:'Login'}).click()
    // await page.pause()
    await expect(page.url()).toBe('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
})
