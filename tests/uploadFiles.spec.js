import {test,expect} from "@playwright/test";

test("Uploading files",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.evaluate(()=>{
        window.scrollBy(0,innerHeight);
    })

    // Uploading a single file

    await page.locator('[id="singleFileInput"]').setInputFiles('./assets/pdf1.pdf');
    await page.locator('(//button[@type="submit"])[1]').click();

    await expect(page.locator('[id="singleFileStatus"]')).toContainText('Single file selected: pdf1.pdf, Size: 49672 bytes, Type: application/pdf');
    await page.pause();
})

test("Uploading multiple files",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.evaluate(()=>{
        window.scrollBy(0,innerHeight);
    
    })

    // Uploading multiple files

    await page.locator('[id="multipleFilesInput"]').setInputFiles([
        './assets/pdf1.pdf',
        './assets/pdf2.pdf'
    ]);

    await page.locator('(//button[@type="submit"])[2]').click();


    await expect(page.locator('[id="multipleFilesStatus"]')).toContainText('Multiple files selected: pdf1.pdf, Size: 49672 bytes, Type: application/pdf pdf2.pdf, Size: 49672 bytes, Type: application/pdf');
    await page.pause();

})