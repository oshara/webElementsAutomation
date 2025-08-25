import {test} from '@playwright/test';

test("Handling Hidden Drop Downs",async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator('(//input[@data-v-1f99f73c])[1]').fill("Admin");
    await page.locator('(//input[@data-v-1f99f73c])[2]').fill("admin123");

    await page.locator('[type="submit"]').click();

    await page.locator('(//a[@data-v-6475d26d])[5]').click();
   
  
    await page.locator('(//div[@data-v-13cf171c])[4]').click();
      await page.waitForTimeout(6000);


    const options = await page.$$('//div[@class="oxd-select-option"]/span');

    for(let option of options){
        const jobName = await option.textContent();
        console.log(jobName);
        if(jobName.includes("Software Engineer")){
            await option.click();
        }
    }

    await page.pause();
})