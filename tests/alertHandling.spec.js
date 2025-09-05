import {test,expect} from "@playwright/test";

test("Alert only with OK button",async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    page.on("dialog",async dialog=>{

        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('I am an alert box!');
        await dialog.accept();
        })
        await page.locator('[id="alertBtn"]').click();


})

test("Confirm Diaglog window handling- that are with OK and Cancel buttons",async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    page.on("dialog",async dialog=>{

        expect(dialog.type()).toContain('confirm');
        expect(dialog.message()).toContain('Press a button!');
        await dialog.accept();

    })

    await page.locator('[id="confirmBtn"]').click();
    await expect(page.locator('[id="demo"]')).toContainText("You pressed OK!");
    await page.waitForTimeout(2000);

})

test.only("Handling Promt Dialogs",async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');
    
    page.on('dialog',async dialog=>{
        expect(dialog.type()).toContain('prompt');
        expect(dialog.message()).toContain("Please enter your name:");
        await dialog.accept("Test John");
    })

    await page.locator('[id="promptBtn"]').click();
    await expect(page.locator('[id="demo"]')).toContainText('Hello Test John! How are you today?')

})