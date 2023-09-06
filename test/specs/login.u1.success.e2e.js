const { expect } = require("@wdio/globals");
const LoginPage = require("../pageobjects/login.page");

describe("Login page", () => {
  it("should login with accepted username 'standard_user' and redirect to inventory page", async () => {
    await LoginPage.open();

    await LoginPage.login("standard_user", "secret_sauce");

    const shoppingCart = await $("#shopping_cart_container");
    await expect(shoppingCart).toBeExisting();
  });
});
