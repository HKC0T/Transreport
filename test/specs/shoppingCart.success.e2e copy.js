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

  it("should select 3 items randomly", async () => {
    const choices = new Set();
    for (let i = 0; i < 3; i++) {
      const threeItems = await InventoryPage.randomNumber();
      choices.add(threeItems);
    }
    for (const choice of choices) {
      (await InventoryPage.addToCart[choice]).click();
    }
    await $("#shopping_cart_container").click();
    const header = await $("span[class='title']");
    await expect(header).toHaveText("Your Cart");

    // console.log(`hiiiii ${(await InventoryPage.addToCart).length}`);
  });
});
