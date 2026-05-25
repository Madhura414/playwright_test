import { test, expect } from "@playwright/test";
test("take screenshot", async ({ page }) => {
  await page.goto("https://demo.opencart.com");
  await page.screenshot({
    path: "test/screenshots/" + Date.now() + "Homepage.png",
  });
});
test("full page screenshot", async ({ page }) => {
  await page.waitForTimeout(5000);
  await page.goto("https://demo.opencart.com");
  await page.screenshot({
    path: "test/screenshots/" + Date.now() + "fullpage.png",
    fullPage: true,
  });
});

test.only("Element  screenshot", async ({ page }) => {
  await page.goto("https://demo.opencart.com/");
  // Wait until page loads
  // Wait for verification to complete and page to load
  await page.waitForLoadState("networkidle");

  await page
    .locator("//*[@id='content']/div[2]/div[1]")
    .screenshot({ path: "test/screenshots/" + Date.now() + "macbook.png" });
});
//*[@id='content']/div[2]/div[1]
