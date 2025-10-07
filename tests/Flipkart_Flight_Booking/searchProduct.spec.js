import {test} from '@playwright/test'
import {SearchProduct} from '../../POM_Pages/Flipkart_Flight_Booking/searchProduct.page.js'
import {GetProductDetails} from '../../POM_Pages/Flipkart_Flight_Booking/getProductDetails.page.js'
test('search',async({page})=>{

    await page.goto('https://www.flipkart.com/')
    let search_obj=new SearchProduct(page)
    let getProducts_obj=new GetProductDetails(page)
    await search_obj.searchProduct("samsung galaxy a55")  
    await getProducts_obj.getProductDetails()
})