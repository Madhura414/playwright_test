const { test,expect } = require('@playwright/test');

test ('Keyboard Actions', async({page})=>{
    await page.goto("https://gotranscript.com/text-compare");
// input from box1
//await page.locator("//textarea[@name='text1']").fill("this is keyboard action example");

 await page.type("//textarea[@name='text1']", "this is keyboard action example");

 // ctrl+A  select the text

 await page.keyboard.press('Control+A');// windows

 // ctrl+c 

 await page.keyboard.press('Control+C');// windows

 // tab  move to next area
  await page.keyboard.down('Tab');
    await page.keyboard.up('Tab');

    /// ctrl +v paste the text in text are2 
      await page.keyboard.press('Control+V');// windows
      await page.waitForTimeout(5000);
})