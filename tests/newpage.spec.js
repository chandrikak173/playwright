import {expect, test} from '@playwright/test'
test('',async({browser})=>{

let context =await browser.newContext()
let page=await context.newPage()
await page.goto('https://www.flipkart.com/mobile-phones-store?param=4111&fm=neo%2Fmerchandising&iid=M_207a1945-0901-4bc3-9c60-835eea7273c2_1_VMDN1VE1AUK9_MC.BYIXDBQAWBHQ&otracker=hp_rich_navigation_2_1.navigationCard.RICH_NAVIGATION_Mobiles%2B%26%2BTablets_BYIXDBQAWBHQ&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_2_L0_view-all&cid=BYIXDBQAWBHQ')
await page.getByTitle('Search for products, brands and more').fill('mobiles')
await page.keyboard.press('Enter')
await page.locator('//div/div[3]/div[1]/div[2]/div[3]/div/div/div/a/div[1]/div[1]/div[1]/div').click()
let newpage=await context.waitForEvent('page')
expect(newpage.url()).not.toBe('https://www.flipkart.com/mobile-phones-store?param=4111&fm=neo%2Fmerchandising&iid=M_207a1945-0901-4bc3-9c60-835eea7273c2_1_VMDN1VE1AUK9_MC.BYIXDBQAWBHQ&otracker=hp_rich_navigation_2_1.navigationCard.RICH_NAVIGATION_Mobiles%2B%26%2BTablets_BYIXDBQAWBHQ&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_2_L0_view-all&cid=BYIXDBQAWBHQ')
console.log(await page.url());
console.log(await newpage.url());
})


