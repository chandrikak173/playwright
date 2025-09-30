import {test} from '@playwright/test'
import data from 'C:/Users/vijay/OneDrive/Desktop/PlaywrightProject/testdata/data.json' 
import { RegisterPage } from '../POM_Pages/registerPage'
test('register',async({page})=>{

    await page.goto('https://demoapps.qspiders.com/ui?scenario=1')
    let regObject=new RegisterPage(page)
    //await regObject.register('test','test@gmail.com','test123')
    await regObject.register(data.username,data.emailadd,data.password) //readind data from json file
})