import { test } from '@playwright/test';

test('Date Picker ->  (mm/dd/yyyy)', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    //Simply typing the date in the date picker section
    // await page.locator('[id="datepicker"]').fill('07/06/2025');
    // await page.waitForTimeout(4000);

    // saving the year,month and date and trying to find the exact year,month,date according to the user input
    const year = "2026";
    const month = "April";
    const date = "14";

    await page.locator('[id="datepicker"]').click();

    while (true) {
        const currentYear = await page.locator('[class="ui-datepicker-year"]').textContent();
        console.log(currentYear)
        const currentMonth = await page.locator('[class="ui-datepicker-month"]').textContent();
        console.log(currentMonth)

        if (currentYear == year && currentMonth == month) {
            console.log("Selected Year and Month is " + year + month)
            break;
        }

        await page.locator('//span[@class="ui-icon ui-icon-circle-triangle-e"]').click();
    }

    await page.waitForSelector('//a[@class="ui-state-default"]')
    const currentDates = await page.$$('//a[@class="ui-state-default"]');

    for (let dates of currentDates) {
        if (await dates.textContent() == date) {
            await dates.click();
        }
    }

    await page.pause();


})

test("Date Picker -> (dd/mm/yyyy)", async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    const year = "2027";
    const month = "Mar"
    const dates = "20"

    await page.locator('[id="txtDate"]').click()
    await page.locator('//select[@class="ui-datepicker-year"]').selectOption(`${year}`);
    await page.locator('//select[@class="ui-datepicker-month"]').selectOption(`${month}`);

    await page.evaluate(() => {
        window.scrollBy(0, window.innerHeight); // Scroll down one viewport height
    });


    await page.locator('[id="ui-datepicker-div"]').click();

    const dateSelections = await page.$$('//a[@class="ui-state-default"]');

    for (const date of dateSelections) {
        if (await date.textContent() == dates) {
            await date.click();
        }
    }
   


})