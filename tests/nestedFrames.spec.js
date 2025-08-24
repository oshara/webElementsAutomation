import { test } from '@playwright/test';

test("Nested Frame Handling", async ({ page }) => {

    await page.goto("https://ui.vision/demo/webtest/frames/");

    // Using frame()

    // const frame3 = await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_3.html"});

    // await frame3.locator('//input[@name="mytext3"]').fill("Frame 3 typing");

    // const childFrameCount = await frame3.childFrames();

    // await childFrameCount[0].locator('(//div[@class="AB7Lab Id5V1"])[2]').click();

    // await page.pause();

    // Using frameLocator()

    const frameNew = await page.frameLocator('//frame[@src="frame_3.html"]')
    await frameNew.locator('//input[@name="mytext3"]').fill('New Frame');

    const childFrame = await frameNew.frameLocator('//iframe');
    await childFrame.locator('(//div[@class="AB7Lab Id5V1"])[2]').click();


    await page.pause();
})