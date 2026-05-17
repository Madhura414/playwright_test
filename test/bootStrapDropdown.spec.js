const { test, expect } = require("@playwright/test");

test("bootstrapdemo", async ({ page }) => {
await page.goto ("https://www.jquery-az.com/boots/demo.php?ex=63.0_2'")


 // Wait for the dropdown to be visible before clicking
  await page.locator('.multiselect').waitFor({ state: 'visible' });
  await page.locator('.multiselect').click();

     // 1. Verify dropdown has 11 options
//   const options = page.locator('ul>li label input');
//   await expect(options).toHaveCount(11);

  const  optins = page .locator ('ul>li label input');
  await expect (optins.length).toBe(11);

   await page.waitForTimeout(5000);
// select multiple options from dropdown 
const options= await  page.$$('ul>li label');
for(let option of options)
{
    value = await option.textContent();
    console.log("option vaue is ", option);
    if(value.trim() === "Angular" || value.trim() === "React")
    {
        await option.click();
    }
}
   })