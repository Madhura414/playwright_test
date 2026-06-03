// mouse hover actiobn : its is used to hover the mouse on the element and perform somea ctionon that element
const  { test , expect } = require ('@playwright/test');

test ('Mouse Hover', async ({page})=>{
    test.setTimeout(120000);
     await page.goto("https://demo.opencart.com/");
      const desktops = await page.locator("//a[normalize-space()='Desktops']")

       const mackbook=await page.locator("a[normalize-space()='Mac (1)']")

       await desktops.hover();
       await mackbook.hover();-
       await page.waitForTimeout(5000);
    



      //await page.locator('a').filter({ hasText: 'Desktops' }).hover();

})