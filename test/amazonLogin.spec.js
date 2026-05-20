const {test, expect} = require('@playwright/test');
test ('Amazon login to account', async({page})=>{

//     async function getWhatsAppOTP() {

//     // Example API response
//     // Replace with real endpoint

//     return '123456';
// }

     
    await page.goto("https://www.amazon.in/");
    await page.locator("#nav-link-accountList-nav-line-1").click();
    await page.locator("#ap_email_login").fill("7661820639");
    await page.locator("#continue").click();
     await page.waitForTimeout(5000);
     

    // const otp = await getWhatsAppOTP()
   

    await page.locator("#auth-pv-enetr-code").fill(otp);
    await page.locator("auth-signin-button").click();

    
     await page.locator('#ap_password').fill('your-password');
    await page.locator('#signInSubmit').click();

    // Search product
    await page.locator('#twotabsearchtextbox').fill('mobile');

    // Wait for auto suggestions
    await page.waitForSelector('.s-suggestion');

    // Select third auto suggestion
    const suggestions = page.locator('.s-suggestion');
    await suggestions.nth(2).click(); // nth(2) = third element

    // Assert element on new page
    await expect(page.locator('span.a-color-state')).toBeVisible();

    // Sign out
    await page.locator('#nav-link-accountList').hover();

    await page.locator('span:has-text("Sign Out")').click();



})