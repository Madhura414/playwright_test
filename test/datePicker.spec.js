const { test, expect } = require('@playwright/test');

test('date picker', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    const year = '2026';
    const month = 'December';
    const date = '20';

    // Open calendar popup
    await page.click('#datepicker');
    await page.locator('.ui-datepicker-calendar').waitFor();

    while (true) {

        const currentMonth =
            await page.locator('.ui-datepicker-month').textContent();

        const currentYear =
            await page.locator('.ui-datepicker-year').textContent();

        console.log("Current Month:", currentMonth);
        console.log("Current Year:", currentYear);

        // Stop when expected month and year match
        if (currentMonth === month && currentYear === year) {
            break;
        }

        // Move to next month
        await page.locator('[title="Next"]').click();
    }

    // select date  using loop 
    const dates = await page.$$("//a[@class='ui-state-default']")
    for (const dateElement of dates)
    {
        if(await dateElement.textContent() == date)
        {
            await dateElement.click();
            break;
        }
    }
   

    await page.waitForTimeout(5000);
});