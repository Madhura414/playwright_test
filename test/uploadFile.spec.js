const { test, expect } = require ('@playwright/test');
test ("uploadFile",async ({page})=>{

     await page.goto("https://testautomationpractice.blogspot.com/");
     // scroll down page opens 
       await page.evaluate(() => window.scrollBy(0, 500));
     // upload single file
       await page.locator("#singleFileInput").click();
       await page.waitForTimeout(5000);

       await page.locator("#singleFileInput").setInputFiles("D:\\Playwright_Learning\\tests\\testfile1.pdf");
})
       // mutiple files upload 
       test.only("Upload Multiple files",async ({page})=>{
         
         await page.goto("https://testautomationpractice.blogspot.com/");

           await page.evaluate(() => window.scrollBy(0, 500));
           await page.waitForTimeout(5000);
     // multiple files upload
       await page.locator("//input[@id='multipleFilesInput']").click();

       await page.locator("//input[@id='multipleFilesInput']").setInputFiles(["D:\\Playwright_Learning\\tests\\testfile1.pdf",
        "D:\\Playwright_Learning\\tests\\testfile2.pdf"
       ]);
        // remove the file from list uploaded files
        await page.locator("//input[@id='multipleFilesInput']").setInputFiles([]);
       await page.waitForTimeout(5000);

       })
      
        


