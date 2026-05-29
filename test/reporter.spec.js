import { test , expect} from '@playwright/test';
test ('Reporter test1', async({page})=>{
 await page.goto("https://www.demoblaze.com/index.html");
 await expect(page).toHaveTitle('STORE');

})
test ('Reporter test2', async({page})=>{
 await page.goto("https://demo.opencart.com/");
 await expect(page).toHaveTitle('Just a moment...');

})

test ('Reporter test3', async({page})=>{
 await page.goto("https:demo.nopcommerce.com/");
 await expect(page).toHaveTitle('nopCommerce demo store. Home page title');

})



