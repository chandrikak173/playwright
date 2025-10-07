
export class SearchProduct

{
    /**
     * @param {import('playwright').Page} page
     */

    constructor(page)
    {
        this.page=page
        this.searchBox=page.getByTitle('Search for Products, Brands and More').nth(1)
        this.slider=page.locator('//div[@class="-suZGK"]/div[@class="Oyj7AF"]')    
    }
    async moveSlider()
    {
        await this.searchBox.fill("iphone 17")
        await this.page.pause()
        await this.page.keyboard.press('Enter')
        //const slider = this.slider; // locator for slider handle
        const box = await this.slider.boundingBox();

        if (box) {
        // Move mouse to center of the slider handle
        await this.page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
        // Click and hold
        await this.page.mouse.down();
        // Move horizontally (e.g., +100 pixels to the right)
        await this.page.mouse.move(box.x + box.width / 2 + 100, box.y + box.height / 2, { steps: 10 });
        // Pause to see the drag in action (for debugging)
        await this.page.pause();
        // Release mouse
        await this.page.mouse.up();
        }
     }
     async searchProduct(product)
     {
        let path='C:/Users/vijay/OneDrive/Desktop/PlaywrightProject/testdata/testdata.xlsx'
        await this.searchBox.fill(product)
        await this.page.keyboard.press('Enter')
        
    }
}