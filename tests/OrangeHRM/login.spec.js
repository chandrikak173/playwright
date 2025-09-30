import {test,expect} from '@playwright/test'
import {Login} from 'C:/Users/vijay/OneDrive/Desktop/PlaywrightProject/POM_Pages/OrangeHRM_POM/login.page.js'
import {Dashboard} from '../../POM_Pages/OrangeHRM_POM/dashboard.page.js'
import orangeHRM from '../../testdata/orangeHRM.json'
import {Admin} from '../../POM_Pages/OrangeHRM_POM/admin.page.js'


test('login',async({page})=>{
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
let login_obj=new Login(page)
let dashboard_obj=new Dashboard(page)
let admin_obj=new Admin(page)

await login_obj.login(orangeHRM.username,orangeHRM.password)
await dashboard_obj.navigateToAdmin()

await admin_obj.searchUser(orangeHRM.searchuser,orangeHRM.userrole,orangeHRM.status)
let msg=await page.locator(`//div[@data-v-6c07a142 and text()='${orangeHRM.searchuser}']`).textContent()
expect(msg).toBe(orangeHRM.searchuser)

/*
console.log(msg);
console.log(orangeHRM.searchuser);

if(msg==orangeHRM.searchuser)
{
    console.log("user exists");   
}
else
{   
   admin_obj.userNotFound() 
*/

})