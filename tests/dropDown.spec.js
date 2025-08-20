import {test} from "@playwright/test";

test("Handling 'Select' Dropdowns",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.evaluate(()=>{
        window.scrollBy(0,innerHeight);
    })

    //await page.locator('[id="country"]').selectOption("Japan");
    

    // Using only the SelectOption function, calling the select locator and the value on same function, not using the locator
    //await page.selectOption('[id="country"]',"China");

    // Passing the "value" to the selectOption method
    //await page.locator('[id="country"]').selectOption({value:"canada"});

    //Passing the "label" to the selectOption method
    await page.locator('[id="country"]').selectOption({label:"Brazil"});
    await page.pause();
})
