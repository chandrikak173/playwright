export class RegisterPage
{
    /**
     * 
     * @param {import ('playwright').Page} page
     */
    constructor(page)
    {
        this.page=page;
        this.nameTextbox= page.getByPlaceholder('Enter your name')
        this.emailTextbox= page.getByPlaceholder('Enter your Email')
        this.passwordTextbox=  page.getByPlaceholder('Enter your password')
        this.registerButton= page.getByRole('button',{name:'Register'})
    }

    async register(username,email,password) 
    {
        await this.nameTextbox.fill(username)
                await this.page.waitForTimeout(1000)

        await this.emailTextbox.fill(email)
                await this.page.waitForTimeout(1000)

        await this.passwordTextbox.fill(password)
                await this.page.waitForTimeout(1000)

        await this.registerButton.click()

    }
}