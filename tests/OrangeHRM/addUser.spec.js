import {test,expect} from '@playwright/test'
import {Login} from 'C:/Users/vijay/OneDrive/Desktop/PlaywrightProject/POM_Pages/OrangeHRM_POM/login.page.js'
import {Dashboard} from '../../POM_Pages/OrangeHRM_POM/dashboard.page.js'
import orangeHRM from '../../testdata/orangeHRM.json'
import {Admin} from '../../POM_Pages/OrangeHRM_POM/admin.page.js'
import {AddUser} from '../../POM_Pages/OrangeHRM_POM/addUser.page.js'

test('addUser',async({page})=>{

await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
let login_obj=new Login(page)
let dashboard_obj=new Dashboard(page)
let admin_obj=new Admin(page)
let addUser_obj=new AddUser(page)
await login_obj.login(orangeHRM.username,orangeHRM.password)
await dashboard_obj.navigateToAdmin()
await admin_obj.addUserFunc()
await addUser_obj.addUser('ESS','Enabled','myuser1','qw12345')
expect(await page.locator("//div/div//p[text()='Successfully Saved']").textContent()).toBe('Successfully Saved')
})