const { test, expect } = require("@playwright/test");
test("Double click", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  // Scroll down after page opens
  await page.evaluate(() => window.scrollBy(0, 500));

  // double click on element
  const doubleclickButton = await page.locator(
    "//button[normalize-space()='Copy Text']",
  );
  // double click on button
  await doubleclickButton.dblclick();

  //get the text from text field after double click
  const textf2 = await page.locator("#field2");

  await expect(textf2).toHaveValue("Hello World!");

  await page.waitForTimeout(5000);
});
