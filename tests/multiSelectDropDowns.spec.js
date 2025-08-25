import {test} from "@playwright/test";

test("Handling Multi Select DropDowns",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.evaluate(()=>{
        window.scrollBy(0,innerHeight);
    })
    await page.locator('[id="colors"]').selectOption(["Red", "Blue","Yellow"]);

    await page.pause();

})