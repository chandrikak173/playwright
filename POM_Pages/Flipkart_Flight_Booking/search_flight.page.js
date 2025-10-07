export class SearchFlight
{
    /**
     * @param {import('playwright').Page} page
     */

    constructor(page)
    {
        this.page=page
        this.searchBox=page.locator()

    }
}