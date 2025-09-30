export class AddUser
{
    /**
     * 
     * @param {import('playwright').Page} page 
     */
    constructor(page)
    {
        this.page=page
        this.userRole=page.locator('(//div[@class="oxd-select-text-input"])[1]')
        this.userRoleDropdown=page.locator('//div[@class="oxd-select-option"]/span')
        this.status=page.locator('(//div[@class="oxd-select-text-input"])[2]')
        this.statusDropdown=page.locator('//div[@class="oxd-select-option"]/span')
        this.employeeName=page.getByPlaceholder('Type for hints...')
        this.employeeNameSelection=page.locator('(//div[@class="oxd-autocomplete-wrapper"]//span)[1]')
        this.username=page.locator('(//div/input[@class="oxd-input oxd-input--active"])[2]')
        this.password=page.locator('//div/div/form/div[2]/div/div[1]/div/div[2]/input')
        this.confirmPassword=page.locator('//div/div/form/div[2]/div/div[2]/div/div[2]/input')
        this.save=page.locator('//div/button[@class="oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space"]')
    }
    async addUser(role,status,username,password)
    {
           await this.userRole.click()
        for(let ele of await this.userRoleDropdown.all())
        {
            if(await ele.textContent()==role)
            {
                await ele.click()
                break
            }

        }
        await this.status.click()        
        for(let ele of await this.statusDropdown.all())
        {
            if(await ele.textContent()==status)
            {
                await ele.click()
                break
            }

        }     
        await this.employeeName.fill('user')
        await this.employeeNameSelection.click()
        await this.username.fill(username)
        await this.confirmPassword.fill(password)
        await this.password.fill(password)
        await this.save.click()
    }
}