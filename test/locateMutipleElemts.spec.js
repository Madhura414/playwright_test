const {test , expect} = require ('@playwright/test');
test ('locate Mutiple elements',async ({page})=>{
    await page.goto("https://www.demoblaze.com/index.html");
    // locate all the product and print the name of the product
    const allprodutcs = await page.$$(".card-title a");
    for (const produtc of allprodutcs){
        const productName = await produtc.textContent();
        console.log("products",productName);
    }
})