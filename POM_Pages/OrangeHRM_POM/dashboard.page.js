import {expect} from '@playwright/test'
export class Dashboard
{
    /**
     * 
     * @param {import ('playwright').Page} page
*/
    constructor(page)
    {
        this.page=page   
        this.adminButton=page.locator('//ul[@class="oxd-main-menu"]//span[text()="Admin"]')
    }
   async navigateToAdmin()
   {
        await this.adminButton.click()
        //await expect(this.page.url()).toBe('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers')
        await expect(this.page.locator('//h6[.="Admin"]')).toHaveText('Admin')
   }

   
}