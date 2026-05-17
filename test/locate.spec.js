//const {test,expect} = require ('@playwright/test');
import {test , expect} from '@playwright/test';

test ("locate the elemnent", async ({page})=>{
    await page.goto("https://www.demoblaze.com/index.html");
    //click on login buttton propety
    //await page.locator("id=login2").click();
     await page.click("id=login2");
    // proving username  - css
     //await page.locator("#loginusername").fill("testinguser");
     await page.fill("#loginusername","testinguser");
    // await page.type("#loginusername","testinguser");
     // proving password  - css
     await page.fill("//input[@id='loginpassword']","testingpassword");
     // click on login button
     await page.click("//button[normalize-space()='Log in']");

     // verify logout link refrence 
      const logOutLink = await page.locator("//a[normalize-space()='Log out']")

      await expect (logOutLink).toBeVisible();

      await page.close();

    
});