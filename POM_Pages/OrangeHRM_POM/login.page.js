import {expect} from '@playwright/test'
export class Login
{
/**
     * 
     * @param {import ('playwright').Page} page
*/

    constructor(page)
    {
        this.page=page
        this.username=page.getByPlaceholder('Username')
        this.password=page.getByPlaceholder('Password')
        this.loginButton=page.getByRole('button',{name:'Login'})
    }

     async login(un,pwd)
     {    
        await this.username.fill(un)
        await this.password.fill(pwd)
        await this.loginButton.click()
        await expect(this.page.locator('//h6[.="Dashboard"]')).toHaveText('Dashboard')
     }
}
