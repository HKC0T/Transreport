const { expect } = require("@wdio/globals");
const LoginPage = require("../pageobjects/login.page");
const InventoryPage = require("../pageobjects/inventory.page");

describe("Login and sort items", () => {
  it("should login with accepted username 'standard_user' and redirect to inventory page", async () => {
    //test login
    await LoginPage.open();

    await LoginPage.login("standard_user", "secret_sauce");

    await expect(InventoryPage.selectSort).toBeExisting();
  });

  it("should sort items by price (low to high)", async () => {
    await InventoryPage.open();

    await expect(InventoryPage.selectSort).toBeExisting();
    //select low to high
    await InventoryPage.sortLoHi();

    const sortedPriceList = await InventoryPage.loHiPriceList();

    const min = sortedPriceList[0].toString();
    const max = sortedPriceList[sortedPriceList.length - 1].toString();

    //test if items are sorted correctly
    await expect(InventoryPage.itemPrices[0]).toHaveTextContaining(min);
    await expect(
      InventoryPage.itemPrices[(await InventoryPage.numberOfItems) - 1]
    ).toHaveTextContaining(max);
  });
});
