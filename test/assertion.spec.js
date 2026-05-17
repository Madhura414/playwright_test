const { test, expect } = require("@playwright/test");

test("assertion demo", async ({ page }) => {
  //open app url
  await page.goto("https://demo.nopcommerce.com/register");
  // 1) expect page of URL
  await expect(page).toHaveURL("https://demo.nopcommerce.com/register");
  //2) expect page title
  await expect(page).toHaveTitle("nopCommerce demo store. Register");
  // expect element to be visibale
  const logoElement = await page.locator(".header-logo");
  await expect(logoElement).toBeVisible();

  // expect  element is enabled
  const searchBoxawait = await page.locator("#small-searchterms");
  await expect(searchBoxawait).toBeEnabled();


//expect radio button to be checked 
const radiButton = await page.locator("#gender-male");
await radiButton.click();
await expect(radiButton).toBeChecked();

// expect check box
const checkBox= await page.locator("#NewsLetter")
await expect(checkBox).toBeChecked();

// 5 expect the locator to have attribute  Element has Attriute 
 const attributeButton = await page.locator("#register-button");
 await expect(attributeButton).toHaveAttribute("type", "submit");


 // toHaveText   Element Matches the Text
 await expect (await page.locator ('.page-title h1')).toHaveText('Register'); //full text match


 //toHaveContainText   Element Contains Text
 await expect (await page.locator ('.page-title h1')).toHaveContainText('Reg');// partial Text Match
 
 // 9 expect locator toHaveValue input has value
 const emailInput = await page.locator("Email");
 await emailInput.fill("test@example.com");
 await expect (emailInput).toHaveValue('test@example.com');
 

  // toHaveCount  List of Elements has given Length
   const  options = await page.locator("select [name='DateOfBirthMonth'] option");
   await expect(options).toHaveCount(12);
 });