import {test} from '@playwright/test';

test("Handling Auto- Suggest Drop Downs",async({page})=>{

    await page.goto("https://demo.automationtesting.in/AutoComplete.html");

    await page.locator('[id="searchbox"]').click();
    // await page.locator.highlight()

    await page.locator('[id="searchbox"]').fill("J");
    
    await page.waitForSelector('[class="ui-menu-item"]');

    const countryCount = await page.$$('[class="ui-menu-item"]');
    //console.log(countryCount)


    for(let country of countryCount){
        const countryName = await country.textContent();
        if(countryName.includes("Bolivia")){
            await  country.click();
            console.log(countryName)
        }else{
            console.log("Country Not Found");
        }
        
    }

    await page.pause();

})