const { test, expect } = require('@playwright/test');

test("Simple Alert handling", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com");

    // Handle simple alert
    page.on("dialog", async (dialog) => {
        expect(dialog.type()).toBe("alert");
        expect(dialog.message()).toContain("I am an alert box!");
        await dialog.accept(); // OK button
    });

    await page.click("//button[normalize-space()='Simple Alert']");
    await page.waitForTimeout(3000);
});


test("Confirmation Alert - OK button", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com");

    page.on("dialog", async (dialog) => {
        expect(dialog.type()).toBe("confirm");
        await dialog.accept(); // Click OK
    });

    await page.click("//button[normalize-space()='Confirmation Alert']");
    await expect(page.locator("#demo")).toHaveText("You pressed OK!");
});


test("Confirmation Alert - Cancel button", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com");

    page.on("dialog", async (dialog) => {
        expect(dialog.type()).toBe("confirm");
        await dialog.dismiss(); // Click Cancel
    });

    await page.click("//button[normalize-space()='Confirmation Alert']");
    await expect(page.locator("#demo")).toHaveText("You pressed Cancel!");
});
