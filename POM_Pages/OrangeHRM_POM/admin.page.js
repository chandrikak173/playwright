import { clearScreenDown } from "readline";
import {expect} from '@playwright/test'
export class Admin
{
    /**
     * 
     * @param{import('playwright').Page} page
     */

    constructor(page)
    {
        this.page=page
        this.addButton=page.locator('//div[@class="orangehrm-header-container"]/button')
        this.username=page.locator('(//div/input[@class="oxd-input oxd-input--active"])[2]')
        this.userroleDropdown=page.locator('(//div[@class="oxd-select-text-input"])[1]')
        this.userroleDropdownValues=page.locator('//div[@role="option"]')
        this.statusDropdown=page.locator('(//div[@class="oxd-select-text-input"])[2]')
        this.statusDropdownValues=page.locator('//div[@role="option"]')
        this.searchButton=page.locator('//button[@type="submit"]')
        this.resetButton=page.locator('//button[@class="oxd-button oxd-button--medium oxd-button--ghost"]')  
        this.deleteButton=page.locator('//i[@class="oxd-icon bi-trash"]') 
        this.deleteConfirmationButton=page.locator('//i[@class="oxd-icon bi-trash oxd-button-icon"]') 
        this.addUser=page.locator('//button[@class="oxd-button oxd-button--medium oxd-button--secondary"]') 
        this.editUser=page.locator('//div[@class="oxd-table-cell-actions"]/button/i[@class="oxd-icon bi-pencil-fill"]')
       // this.notFound=page.locator('//p[@class="oxd-text oxd-text--p oxd-text--toast-message oxd-toast-content-text"]').textContent()
    }

    async searchUser(username,userRole,status)
    {
        await this.username.fill(username)
        await this.userroleDropdown.click()        
        await expect(this.userroleDropdownValues.last()).toBeVisible({visible:true})
        
        for(let ele of await this.userroleDropdownValues.all())
        {
            if(await ele.textContent()==userRole)
            {
                await ele.click()
                break;
            }
        }
        await this.statusDropdown.click()
        await expect(this.statusDropdownValues.last()).toBeVisible({visible:true})
        
        for(let ele of await this.statusDropdownValues.all())
        {
            if(await ele.textContent()==status)
            {
                await ele.click()
                break;

            }        
            
        }
        await this.searchButton.click()    
    }
    async deleteUser()
    {
        await this.page.pause()
        await this.deleteButton.click()
        await this.deleteConfirmationButton.click()
    }

    async addUserFunc()
    {
        await this.addUser.click()
    }
    async userNotFound()
    {
        expect(this.notFound).toContain('No Records Found')
    }
    async editUserFunc()
    {
        this.editUser.click();
    }

}