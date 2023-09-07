const { expect } = require("@wdio/globals");
const SecurePage = require("../pageobjects/secure.page");
const ShoppingCartPage = require("../pageobjects/shoppingCart.page");

describe("access inventory.html without login", () => {
  it("should deny user from accessing inventory and display error message", async () => {
    //test login
    await ShoppingCartPage.open();

    await expect(SecurePage.AccessInventoryWithoutLogin).toBeExisting(
      "Epic sadface: You can only access '/cart.html' when you are logged in."
    );
  });
});
