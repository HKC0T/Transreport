const { expect } = require("@wdio/globals");
const LoginPage = require("../pageobjects/login.page");
const InventoryPage = require("../pageobjects/inventory.page");
describe("Login page", () => {
  it("should login with accepted username 'standard_user' and redirect to inventory page", async () => {
    await LoginPage.open();

    await LoginPage.login("standard_user", "secret_sauce");

    await expect(InventoryPage.filter).toBeExisting();
    InventoryPage.selectFilter();

    const item_prices = await $$("div[class='inventory_item_price']");
  });
  it("should login with accepted username 'standard_user' and redirect to inventory page", async () => {
    await LoginPage.open();

    await LoginPage.login("standard_user", "secret_sauce");

    await expect(InventoryPage.filter).toBeExisting();
    InventoryPage.selectFilter();

    const item_prices = await $$("div[class='inventory_item_price']");
  });
});

// select sort items by price (low to high), items get sorrted correctly
