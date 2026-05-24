const { test, expect } = require("@playwright/test");
test("Check Boxes", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  //single check box
  await page.locator("//input[@id='sunday' and @type='checkbox']").check();
  //await page.check("//input[@id='sunday' and @type='checkbox']");

  await expect(
    await page.locator("//input[@id='sunday' and @type='checkbox']"),
  ).toBeChecked();
  //await expect(await page.locator("//input[@id='sunday' and @type='checkbox']")).isChecked().toBeTruthy();
  await page.waitForTimeout(5000);
  // multipe check boxes
  const checkBoxesLocators = [
    "//input[@id='sunday' and @type='checkbox']",
    "//input[@id='monday' and @type='checkbox']",
    "//input[@id='tuesday' and @type='checkbox']",
    "//input[@id='wednesday' and @type='checkbox']",
    "//input[@id='thursday' and @type='checkbox']",
    "//input[@id='friday' and @type='checkbox']",
  ];
  for (const locators of checkBoxesLocators) {
    // select mutiple checkboxes
    await page.locator(locators).check();
  }

  for (const locators of checkBoxesLocators) { // unslect all checkoxes
    if (await page.locator(locators).isChecked());
    {
      await page.locator(locators).uncheck();
    }
  }
});
