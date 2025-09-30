import {test} from '@playwright/test'
import { pathToFileURL } from 'url';
test('getBy',async({page,browser})=>{
await page.goto("https://testautomationpractice.blogspot.com/")
await page.getByRole('textbox',{name:'Email',exact:false}).fill("abc@gmail.com")
await page.getByRole('textbox',{name:'Address'}).fill('#12/1,6th main, Bull Temple "A" cross,Blr-18')

await page.getByRole('combobox', { name: 'Country' }).selectOption('India');

await page.getByText('Colors').selectOption('White')
await page.locator('//*[@id="datepicker"]').click()
await page.locator('//*[@id="ui-datepicker-div"]/table/tbody/tr[5]/td[2]/a').click()
await page.pause()


await page.getByRole('listbox',{name:'animals'}).selectOption('Cat') 
//await page.waitForTimeout(2000)
//await page.locator("#colors").selectOption('Red')
});