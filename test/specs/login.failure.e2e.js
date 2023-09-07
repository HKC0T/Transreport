const { expect } = require("@wdio/globals");
const LoginPage = require("../pageobjects/login.page");
const SecurePage = require("../pageobjects/secure.page");

//test scenarios when user fails to login

describe("Login page", () => {
  it("should deny login with unaccepted usernames", async () => {
    await LoginPage.open();

    await LoginPage.login("test", "secret_sauce");
    await expect(SecurePage.UserAndPasswordNotMatch).toBeExisting();
    await expect(SecurePage.UserAndPasswordNotMatch).toHaveTextContaining(
      "Epic sadface: Username and password do not match any user in this service"
    );
  });

  it("should deny login with accepted username 'locked_out_user' and password", async () => {
    await LoginPage.open();

    await LoginPage.login("locked_out_user", "secret_sauce");

    await expect(SecurePage.LockedOutUser).toBeExisting();
    await expect(SecurePage.LockedOutUser).toHaveTextContaining(
      "Epic sadface: Sorry, this user has been locked out."
    );
  });

  it("should deny login with empty username", async () => {
    await LoginPage.open();

    await LoginPage.login("", "secret_sauce");
    await expect(SecurePage.EmptyField).toBeExisting();
    await expect(SecurePage.EmptyField).toHaveTextContaining(
      "Epic sadface: Username is required"
    );
  });

  it("should deny login with empty password", async () => {
    await LoginPage.open();

    await LoginPage.login("standard_user", "");
    await expect(SecurePage.EmptyField).toBeExisting();
    await expect(SecurePage.EmptyField).toHaveTextContaining(
      "Epic sadface: Password is required"
    );
  });
});
