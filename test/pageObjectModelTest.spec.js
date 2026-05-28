import { test, expect } from "@playwright/test";
import { LoginPage } from "./pages/loginPage";
import { HomePage } from "./pages/homePage";
import { CartPage } from "./pages/cartPage";
test("test login to add cart", async ({ page }) => {
  // login
  const login = new LoginPage(page);
  await login.gotoLoginPage();
  await login.login("pavanol", "test@123");
  await page.waitForTimeout(5000);
  // home page
  const home = new HomePage(page);
  await home.addProductToCart("Samsung galaxy s6");
  await page.waitForTimeout(5000);
  await home.goToCart();

  //cart page
  const cart = new CartPage(page);
  await page.waitForTimeout(5000);
  const status = await cart.CheckProductInCart("Samsung galaxy s6");
  expect(await status).toBe(true);
});
