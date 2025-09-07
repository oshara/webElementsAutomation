import {test,expect} from "@playwright/test";

test("Drag and Drop handling",async({page})=>{

    await page.goto("https://demo.automationtesting.in/Static.html");
  //  const logo1=  page.locator('[id="angular"]');
     const logo1=  page.locator('[src="logo.png"]');
   const logo2 = page.locator('[id="mongo"]');
   const logo3 = page.locator('#node');

   const dropArea = page.locator('[id="droparea"]');

   //Aproach 1

  // First Logo drag and drop
  //  await logo1.hover();
  //  await page.mouse.down();
   
  //  await dropArea.hover();
  //  await page.mouse.up();

  // Second Logo drag and drop
  // await logo2.hover();
  // await page.mouse.down();

  // await dropArea.hover();
  // await page.mouse.up();

  // // Third Logo drag and drop

  // await logo3.hover();
  // await page.mouse.down();

  // await dropArea.hover();
  // await page.mouse.up();

  // Approach 2
  await logo1.dragTo(dropArea);
  await logo2.dragTo(dropArea);
  await logo3.dragTo(dropArea);
    
})

