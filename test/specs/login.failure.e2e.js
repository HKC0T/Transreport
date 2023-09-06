const { expect } = require("@wdio/globals");
const LoginPage = require("../pageobjects/login.page");
const SecurePage = require("../pageobjects/secure.page");

describe("Login page", () => {
  it("should deny login with unaccepted usernames", async () => {
    await LoginPage.open();

    await LoginPage.login("test", "secret_sauce");
    await expect(SecurePage.UserAndPasswordNotMatch).toBeExisting();
    await expect(SecurePage.UserAndPasswordNotMatch).toHaveTextContaining(
      "Epic sadface: Username and password do not match any user in this service"
    );
  });
});
