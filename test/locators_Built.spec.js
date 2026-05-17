/*
Page.getByRole() to locate by explicit and implicit accessibility attributes.
Page.getByText() to locate by text content.
Page.getByLabel() to locate a form control by associated label's text.
Page.getByPlaceholder() to locate an input by placeholder.
Page.getByAltText() to locate an element, usually image, by its text alternative.
Page.getByTitle() to locate an element by its title attribute.
Page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).
*/

const {test,expect} = require ('@playwright/test');
test ("built- inLOcators",async ({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    const logo = await page.getByAltText('company-branding');
    await expect(logo).toBeVisible();
    // page.getByPlaceholder to locate input field by placeholder
    await page.getByPlaceholder('Us ername').fill("Admin");
    await page.getByPlaceholder('Password').fill("admin123");

    await page.getByRole('button',{type: 'submit'}).click();

    await expect(page.getByRole('Mary Johnson')).toBeVisible();
    await page.getByRole ('button',{name:'Admin'}).click();


})
