const { test, expect } = require("@playwright/test");

test("Home page", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");

  const pageTitle = await page.title();
  console.log("Page title is: " + pageTitle);
  await expect(page).toHaveTitle("STORE");

  const pageURL = page.url();
  console.log("page URL IS :" + pageURL);
  await expect(pageURL).toBe("https://www.demoblaze.com/index.html");

  await page.close();
});

/*****
 * @see https://playwright.dev/docs/test-configuration
 * @see https://playwright.dev/docs/test-assertions
 * @see https://playwright.dev/docs/trace-viewer
 * @see https://playwright.dev/docs/test-reporters
 */
