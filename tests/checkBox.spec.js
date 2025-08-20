import {test,expect} from "@playwright/test";

test("Select Single Checkbox",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.evaluate(()=>{
        window.scrollBy(0,window.innerHeight);
    })
    await page.locator('[id="sunday"]').check();
    expect(await page.locator('[id="sunday"]').isChecked()).toBeTruthy();

    await page.pause();
})

test("Select Multiple Checkboxes",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.evaluate(()=>{window.scrollBy(0,window.innerHeight);})

    const checkboxes =[
        '[id="sunday"]','[id="monday"]','[id="friday"]' 
       ]

       for(let locators of checkboxes){
            await page.locator(locators).check();
        }
        
        await page.pause();
    })