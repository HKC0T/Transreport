const { expect } = require("@wdio/globals");
const LoginPage = require("../pageobjects/login.page");
const SecurePage = require("../pageobjects/secure.page");

describe("Login page", () => {
  it("should deny login with empty username", async () => {
    await LoginPage.open();

    await LoginPage.login("", "secret_sauce");
    await expect(SecurePage.EmptyField).toBeExisting();
    await expect(SecurePage.EmptyField).toHaveTextContaining(
      "Epic sadface: Username is required"
    );
  });
});
