const { test, expect } = require("@playwright/test");

test("handleInutBox", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  //input box firstname asertions
  await expect.soft(await page.locator("//input[@id='name']")).toBeVisible();
  await expect(await page.locator("//input[@id='name']")).toBeEmpty();
  await expect(await page.locator("//input[@id='name']")).toBeEditable();
  await expect(await page.locator("//input[@id='name']")).toBeEnabled();

  await page.locator("//input[@id='name']").fill("madhura");
  //await page.fill("//input[@id='name']","madhura");

  //radio button
  await page.locator("//input[@value='female']").check();
  //await page.check("//input[@value='female']")

  await expect(await page.locator("//input[@value='female']")).toBeChecked();
  await expect(await page.locator("//input[@value='female']"))
    .isChecked()
    .toBeTruthy(); //female

  await expect(await page.locator("//input[@value='male']"))
    .isChecked()
    .toBeFalsy(); //male

  await page.waitForTimeout(5000); // to see value in input box
});
