const {test,expect} = require ('@playwright/test');
test ("Hidden Dropdown",async ({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
     await page.locator("//input[@name='username']").fill("Admin");
     await page.locator("//input[@name='password']").fill("admin123");
     await page.locator("//button[@type='submit']").click();

      await page.locator("//span[normalize-space()='PIM']").click();
// click on dropdown
      await page.locator("/html[1]/body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/form[1]/div[1]/div[1]/div[6]/div[1]/div[2]/div[1]/div[1]/div[2]/i[1]");

       // wait for time
       await page.waitForTimeout(5000);
       const opetions= await page.$$("//div[@role='listbox']//span");

        for(let option of opetions)
        {
            const opetionText = await option.textContent();
            
        // console.log("option text is ",opetionText);

        }
})





