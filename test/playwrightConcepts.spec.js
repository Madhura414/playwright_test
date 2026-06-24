import {test ,expect}  from '@playwright/test';
  test ('launching browser', async ({page})=>{
    // browser launch  
     const browser = await chromium.launch();
     // 
      //creating browser context
  const context = await browser.newContext();
  // creating page and creating object of page 
  const page1 = await context.newPage();
    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    // request for browser tab 
    await page.waitForLoadState();
     // locator
      await page.getByRole('button', {name  :'login'}).click();
      // auto wait for element to be visible
      await page.click();
      // waits for ::: visible, enabled, stable, attached to the DOM
      // assertions 
       await expect(page.loctator("//h5[normalize-space()='Login']")).toBeVisible();
       // Test Runner  :-> built in gramework  parallel execution 
    test ('test  login ',async ({page})=>{
         await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
         // fixtures 
         test.beforeEach (async ({page})=>{
          await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
         })  
// parallel execution :-> test.describe.parallel
 // playwright comfig.file.js
  // workers process .env.CI ? 2 : Undefined

    })
  })