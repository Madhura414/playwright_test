const { test, expect } = require ('@playwright/test');
test ("handle table",async ({page})=>
{
 await page.goto("https://testautomationpractice.blogspot.com/");
 const rows = await page.locator('productTable');
 // total number of rows and cloums etract 

 const colums = await page.locator('thead tr');
 console.log("??number of coumns", await colums.count());
  expect ( await colums.count()).toBe(2);
  const rowsCount = await page.locator('tbody tr');
  console.log("number of rows", await rowsCount.count());
 
  expect ( await rowsCount.count()).toBe(66);


  // select multiple product by re-usable function
  await selectProduct(rowsCount,page,'product 1');
  await selectProduct(rowsCount,page,'product 2');
  await selectProduct(rowsCount,page,'product 3');  

})
 async function selectProduct(rowsCount, page,name)
 {

    const matchedRows = rowsCount.filter({
        has: page.locator('td'),
        hasText: name
    })
    await   matchedRows.locator('input').check();
 }

