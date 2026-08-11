import { test, expect, chromium } from "@playwright/test";
test("handling window conexxt", async () => {
  // to handle multiple windows we need to create browser context
  // creating browser
  const browser = await chromium.launch();
  //creating browser context
  const context = await browser.newContext();
  // creating page
  const page1 = await context.newPage();
  const page2 = await context.newPage();

  const allpages = context.pages();
  console.log("noof pages created", allpages.length);

  await page1.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  );
  await expect(page1).toHaveTitle("OrangeHRM");

  await page2.goto("https://orangehrm.com/");
  await expect(page2).toHaveTitle(
    "OrangeHRM: All in One HR Software for Businesses | OrangeHRM",
  );
});

test.only("Handle multple Pages/Windows ", async () => {
  // to handle multiple windows we need to create browser context
  // creating browser
  const browser = await chromium.launch();
  //creating browser context
  const context = await browser.newContext();
  // creating page
  const page1 = await context.newPage();

  await page1.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  );
  await expect(page1).toHaveTitle("OrangeHRM");
  const pagePromise = context.waitForEvent("page");
  await page1.locator("//a[normalize-space()='OrangeHRM, Inc']").click();

  const newpage = await pagePromise;
  console.log("??newpage",newpage);
  await expect(newpage).toHaveTitle(
    "OrangeHRM: All in One HR Software for Businesses | OrangeHRM",
  );
  await page1.waitForTimeout(3000);
  await newpage.waitForTimeout(5000);
  await browser.close();
});
