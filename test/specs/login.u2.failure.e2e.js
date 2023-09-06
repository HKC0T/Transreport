const { expect } = require("@wdio/globals");
const LoginPage = require("../pageobjects/login.page");
const SecurePage = require("../pageobjects/secure.page");

describe("Login page", () => {
  it("should deny login with accepted username 'locked_out_user' and password", async () => {
    await LoginPage.open();

    await LoginPage.login("locked_out_user", "secret_sauce");

    await expect(SecurePage.LockedOutUser).toBeExisting();
    await expect(SecurePage.LockedOutUser).toHaveTextContaining(
      "Epic sadface: Sorry, this user has been locked out."
    );
  });
});
