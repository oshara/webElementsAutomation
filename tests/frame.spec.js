import {test} from '@playwright/test';

test("Frame Handling in a Web Page",async({page})=>{

    await page.goto('https://ui.vision/demo/webtest/frames/');
        const allFrames = await page.frames();
    console.log(allFrames.length);


    //Method 1
    const frameName =await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_1.html"});
    await frameName.fill('[name="mytext1"]',"Home");

    await page.waitForTimeout(5000);

    //Method 2
    // await page.frameLocator('//frame[@src="frame_1.html"]').locator('[name="mytext1"]').fill("Helloooo");


    await page.pause();


})