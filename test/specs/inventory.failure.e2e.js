const { expect } = require("@wdio/globals");
const InventoryPage = require("../pageobjects/inventory.page");
const SecurePage = require("../pageobjects/secure.page");

describe("access inventory.html without login", () => {
  it("should deny user from accessing inventory and display error message", async () => {
    //test login
    await InventoryPage.open();

    await expect(SecurePage.AccessInventoryWithoutLogin).toBeExisting(
      "Epic sadface: You can only access '/inventory.html' when you are logged in."
    );
  });
});
