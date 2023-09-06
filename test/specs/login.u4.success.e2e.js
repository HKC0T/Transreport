const { expect } = require("@wdio/globals");
const LoginPage = require("../pageobjects/login.page");

describe("Login page", () => {
  it("should login with accepted usernames and redirect to inventory page", async () => {
    await LoginPage.open();

    await LoginPage.login("performance_glitch_user", "secret_sauce");

    const shoppingCart = await $("#shopping_cart_container");
    await expect(shoppingCart).toBeExisting();
  });
});
