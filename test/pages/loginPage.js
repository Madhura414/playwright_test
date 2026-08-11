export class LoginPage {
  constructor(page) {
    this.page = page;
    this.loginLink = "#login2";
    this.userNameInput = "#loginusername";
    this.passwordInput = "#loginpassword";
    this.loginButton = "//button[normalize-space()='Log in']";
  }

  async gotoLoginPage() {
    await this.page.goto("https://www.demoblaze.com/index.html");
  }

  async login(userName, password) {
    await this.page.locator(this.loginLink).click();
    await this.page.locator(this.userNameInput).fill(userName);
    await this.page.locator(this.passwordInput).fill(password);
    await this.page.locator(this.loginButton).click();
  }
}
