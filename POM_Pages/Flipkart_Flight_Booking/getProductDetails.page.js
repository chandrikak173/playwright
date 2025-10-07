import { expect } from '@playwright/test'
import excel, { Workbook } from 'exceljs'
export class GetProductDetails
{
    constructor(page)
    {
        this.page=page
        this.slider=page.locator('//div[@class="-suZGK"]/div[@class="Oyj7AF"]')
        this.productName=page.locator('//div[@class="KzDlHZ"]')
        this.productPrice=page.locator('//div[@class="Nx9bqj _4b5DiR"]') 
    }

    async getProductDetails()
    {
                let path='C:/Users/vijay/OneDrive/Desktop/PlaywrightProject/testdata/testdata.xlsx'
                //await expect(this.productName.last()).toBeVisible()
                let names=await this.productName.allTextContents()
                let prices=await this.productPrice.allTextContents()
                let length=names.length
                console.log(length);
        
                const book= new excel.Workbook()
                await book.xlsx.readFile(path)    
                const sheet =book.getWorksheet("flipkart_products"); //to add a new worksheet
                sheet.getRow(1).getCell(1).value="Products"
                sheet.getRow(1).getCell(2).value="Prices"
                for(let i=0;i<length;i++)
                {
                    sheet.getRow(i+2).getCell(1).value=names[i]
                    sheet.getRow(i+2).getCell(2).value=prices[i]
                    await book.xlsx.writeFile(path)
                }
    }
}