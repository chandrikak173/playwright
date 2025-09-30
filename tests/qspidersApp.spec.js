import {test,expect, _bidiFirefox} from '@playwright/test'
import path from 'path'
import fs from 'fs';
import { permission } from 'process'
test('qspiders_Login @smoke and @Adhoc',async({page})=>{

    await page.goto('https://demoapps.qspiders.com/ui?scenario=1')
    //await page.getByRole('textbox',{name:'Name'}).fill('testname')
   // await page.getByRole('button',{name:'Register'}).scrollIntoViewIfNeeded()
   await page.getByRole('link',{name:'Login Now'}).click()
   await page.getByRole('textbox',{name:'Email Id'}).fill('test@gmail.com')
    await page.getByRole('textbox',{name:'Password'}).fill('password')
    await page.pause()
    await page.locator('//span[@class="absolute text-slate-600 text-[18px]"]/*[local-name()="svg"]').click()
    await page.getByRole('button',{name:'Login'}).click()
   // await page.getByRole('button',{name:'Register'}).click()
    //await page.getByText('Login Now').click()
    

})

test('disabled @sanity',async({page})=>{

    await page.goto('https://demoapps.qspiders.com/ui?scenario=1')
    await page.pause()
    await page.locator('//div/ul/li[text()="Disabled"]').click()
    await expect(page.getByRole('textbox',{name:'Name'})).toBeDisabled({timeout:2000})

})

test('multiple-pages',async({browser})=>{
const context= await browser.newContext()
const mainPage=await context.newPage()
await mainPage.goto('https://demoapps.qspiders.com/ui/browser')
//const pagePromise = context.waitForEvent('page');

await mainPage.getByText('view more').nth(0).click()
const childPage=await context.waitForEvent('page');
// await childPage.pause()
await childPage.getByRole('button',{name:'Add to Cart'}).click()
let pg=context.pages()
console.log(pg.length);
let p1=pg[0]
let p2=pg[1]
console.log(await p1.title());
console.log(await p2.title());
console.log(p1.url());
console.log(p2.url());
})
//-------------------------DIALOGS-------------------------------------

test('confirm_dialog',async({page})=>{

   await page.goto('https://demoapps.qspiders.com/ui/alert?sublist=0')
   await page.locator('//tbody/tr[2]/td/input').check()
    page.on('dialog',async dialog=>{
            console.log(dialog.type())
            console.log(dialog.message())
           await dialog.accept() //ok
            //await dialog.dismiss() //cancel
        })
    await page.getByRole('button',{name:'Delete'}).click()
    //await page.pause()
})

test('prompt_dialog',async({page})=>{

   await page.goto('https://demoapps.qspiders.com/ui/alert/prompt?sublist=1')
   let myMessage="Yes,I want to delete"
   page.on('dialog',async dialog=>{
            console.log(dialog.type())
            console.log(dialog.message())
            await page.waitForTimeout(1000)
            await dialog.accept("Yes,I want to delete") //ok
            //await dialog.dismiss() //cancel

        })
   await page.locator('//tbody/tr[2]/td/input').check()
   
    await page.getByRole('button',{name:'Delete'}).click()
    //await page.pause()
});

test('hidden_division',async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/hidden")
    await page.getByRole('button',{name:'Add Customer'}).click()
    await page.getByRole('textbox',{name:'Name'}).fill('testname')
    await page.getByRole('textbox',{name:'Email'}).fill('testname@gmail.com')
    await page.getByRole('combobox',{name:'Product'}).selectOption('Mobile')
    await page.getByRole('textbox',{name:'Message'}).fill('Nice mobile...thank you')
    await page.waitForTimeout(2000)
    await page.getByRole('button',{name:'Submit'})
});

test('file_upload',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
    await page.locator('#singleFileInput').scrollIntoViewIfNeeded()
    //console.log(await path.join(__dirname,'tests\screenshot1758213762282.png'));
    //await page.locator('#singleFileInput').setInputFiles("C:/Users/vijay/OneDrive/Desktop/ch 8.txt")
    await page.locator("#singleFileInput").setInputFiles(path.join(__dirname,'../screenshot1758213762282.png'))
    await page.pause()
    await page.getByRole('button',{name:'Upload Single File'}).click()
    console.log(path.join(__dirname,'../screenshot1758213762282.png'));
    await expect(page.locator('#singleFileStatus')).toContainText('Single file selected:')
});

test('multiple_file_upload',async({page})=>{
    let filesToUpload=[path.join(__dirname,'../screenshot1758213762282.png'),"C:/Users/vijay/OneDrive/Desktop/ch 8.txt"]
    //let fileNames=['screenshot1758213762282.png','ch 8.txt']
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
    await page.locator('#multipleFilesInput').scrollIntoViewIfNeeded()
    await page.locator("#multipleFilesInput").setInputFiles(filesToUpload)
    await page.getByRole('button',{name:'Upload Multiple File'}).click()
    console.log(path.join(__dirname,'../screenshot1758213762282.png'));
    console.log(await page.locator('#multipleFilesStatus').textContent())
    await expect(await page.locator('#multipleFilesStatus')).toContainText('screenshot1758213762282.png','ch 8.txt')
    /*for(let file of fileNames)
    {
        console.log(file);
        await expect(page.locator('#multipleFilesStatus')).toContainText(file)
    }*/ 
 });

 test('login_popup',async({browser})=>{

    let context=await browser.newContext(
        {
            httpCredentials:
        {
            username:'admim',
            password:'admin'
        }        }
        
    )
    let page=await context.newPage()
    await page.goto('https://demoapps.qspiders.com/ui/auth?sublist=0')
    let [homepage]=await Promise.all(
        [  
            context.waitForEvent('page'),
            page.locator('#AuthLink').click()  
        ]
    )
    expect(homepage.url()).toBe('https://basic-auth-git-main-shashis-projects-4fa03ca5.vercel.app/')  
});

test('notofication_popup',async({browser})=>{

    
    let context=await browser.newContext(
        {
            permissions:['notifications']
        }
    )
    let page=await context.newPage()
    page.goto('https://demoapps.qspiders.com/ui/browserNot?sublist=0')
    await page.getByRole('button',{name:'Notification'}).click()
    let res=await page.evaluate(()=>{return Notification.permission})
    console.log(res);
    expect(res).toBe('granted')
})

test('fileDownload',async({page})=>{
    
    let fileName='sample1.txt'
    let folderPath='E:/Chandrika'
    let fullPath=path.join(folderPath,fileName)
    await page.goto('https://demoapps.qspiders.com/ui/download?sublist=0')
    await page.getByPlaceholder('Enter text here').fill('My test file')
   let [file]= await Promise.all([
        page.waitForEvent('download'),
        page.getByRole('button',{name:'Download'}).click()
    ])
    console.log(await file.path()); //temporary path of the file downloaded
    
    await file.saveAs(fullPath)
    fs.existsSync(fullPath)?console.log("Path exists"):console.log("Path does not exist");
    //expect(await file.suggestedFilename()).toBe(fullPath) this does not work 
     expect(fs.existsSync(fullPath)).toBeTruthy()
})