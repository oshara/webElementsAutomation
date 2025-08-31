import {chromium, test,expect} from '@playwright/test';

test("Handling Multiple Pages in a Web site",async()=>{


    const browser =await chromium.launch();
    const context = await browser.newContext();
    const page1 = await context.newPage();

    await page1.goto('https://www.leafground.com/window.xhtml');
    

    

    const pagePromisse= context.waitForEvent('page');
        await page1.locator('(//span[@class="ui-button-text ui-c"])[1]').click();


    const page2 = await pagePromisse;

    await expect(page2).toHaveURL('https://www.leafground.com/dashboard.xhtml');


})