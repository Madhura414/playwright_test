const {test ,expect} = require ('@playwright/test');
test ("soft assertion",async ({page})=>{

 //open app url
  await page.goto("https://www.demoblaze.com/index.html");

  // Hard Assertion
//   await expect(page).toHaveTitle('STORE123');// this will fail and stop the execution of test
//   await expect(page).toHaveURL("https://www.demoblaze.com/index.html"); 
//   await expect(page.locator(".navbar-brand")).toBeVisible();

  // soft  Assertion
  await expect.soft(page).toHaveTitle('STORE123');// this will fail and stop the execution of test
  await expect.soft(page).toHaveURL("https://www.demoblaze.com/index.html"); 
  await expect.soft(page.locator(".navbar-brand")).toBeVisible();
})