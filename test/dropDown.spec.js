const { test,expect}=require  ('@playwright/test');
test ('Check Boxes', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    //  mulipe ways select options from drpdown
    await page.locator("#country").selectOption({label:"India"});
    await page.waitForTimeout(5000);
})

//Assertions
// chek the number of options in dropdown approcach 1
//  const options= await page.locator("#country option")
//  await expect(options).toHaveCount(10);

//  //2  chek the number of options in dropdown - approach 2
//  const options1= await page.$$("#country option")
//  console.log("number of options ",options1.length);
//   await expect(options1).toBe(10);

  //check the presencse 