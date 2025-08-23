import {test} from '@playwright/test';

test("Handling Bootstrap Dropdonws",async({page})=>{

    await page.goto('https://leafground.com/select.xhtml;jsessionid=node01gbl68kl7mrak9mk32ank4eqf4042210.node0');
    
    await page.locator('[id="j_idt87:country"]').click();

    const countryCount = await page.$$('//ul[@id="j_idt87:country_items"]/li');


    for(let country of countryCount){
        const countryName = await country.textContent();
        if(countryName.includes("India")){
            
            await country.click();
        }

        
    }

    await page.pause();












})