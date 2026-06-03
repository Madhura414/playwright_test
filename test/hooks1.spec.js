import { test, expect } from "@playwright/test";
// hooks are performed before and after the test cases execution
// beforeAll -> it will execute once before all the test cases
// afterAll -> it will execute once after all the test cases
// beforeEach -> it will execute before each test case
// afterEach -> it will execute after each test case

let page;

test.beforeEach(async ({ browser }) => {
  page = await browser.newPage();

  await page.goto("https://www.demoblaze.com/index.html");

  // Login
  await page.locator("#login2").click();
  await page.locator("#loginusername").fill("pavanol");
  await page.locator("#loginpassword").fill("test@123");
  await page.locator("//button[text()='Log in']").click();
});

test.afterEach(async () => {
  // Logout
  await page.locator("#logout2").click();
  await page.close();
});

test("home page test", async () => {
  // Home page products
  const products = await page.$$(".hrefch");

  expect(products).toHaveLength(9);
});

test("add product to cart test", async () => {
  // Handle alert before action
  page.on("dialog", async (dialog) => {
    expect(dialog.message()).toBe("Product added.");
    await dialog.accept();
  });

  // Add product to cart
  await page.locator("//a[text()='Samsung galaxy s6']").click();
  await page.locator("//a[text()='Add to cart']").click();
});