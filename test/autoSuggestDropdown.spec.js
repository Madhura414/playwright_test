const { test, expect } = require ( '@playwright/test');
test ('Auto Suggest DropDown', async({page})=>
{
    page.goto("https.www.redbus.in/");
     await page.locator("#src").fill("Bagalore");
      await page.waitForSelector("li[class='C120_suggest_box'] div[class='C120_suggest_box_inner'] ul li");

const  optionsPage= await page.$$("li[class='C120_suggest_box'] div[class='C120_suggest_box_inner'] ul li");

for (const  option of optionPage)
{
    const optionText = await option.textContent();


s
if(value.includes("Bangalore"))
{
    await optionsPage.click()
      break;
}
}
await page.waitForTimeout(5000);
})  