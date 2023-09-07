const { expect } = require("@wdio/globals");
const LoginPage = require("../pageobjects/login.page");
const InventoryPage = require("../pageobjects/inventory.page");
const ShoppingCartPage = require("../pageobjects/shoppingCart.page");

describe("Login then add 3 random items to the cart and remove 1 item", () => {
  const selectedItems = 3;
  const removedItems = 1;

  it("should login with accepted username 'standard_user' and redirect to inventory page", async () => {
    //test login
    await LoginPage.open();

    await LoginPage.login("standard_user", "secret_sauce");

    await expect(InventoryPage.selectSort).toBeExisting();
  });

  it("should add 3 random items from the inventory to the cart", async () => {
    await InventoryPage.open();

    const choices = await InventoryPage.randomItems(selectedItems);
    const itemAddButtons = await InventoryPage.addToCart;

    await InventoryPage.selectItems(choices, itemAddButtons);
    await $("#shopping_cart_container").click();

    const header = await $("span[class='title']");
    await expect(header).toHaveText("Your Cart");

    await expect(ShoppingCartPage.numberOfItems).toBeElementsArrayOfSize(
      selectedItems
    );
  });

  it("should remove 1 random item in the cart", async () => {
    await ShoppingCartPage.open();

    const itemRemoveButtons = await ShoppingCartPage.removeButtons;
    const choices = await ShoppingCartPage.randomItems(removedItems);

    await ShoppingCartPage.removeItems(choices, itemRemoveButtons);
    await expect(ShoppingCartPage.numberOfItems).toBeElementsArrayOfSize(
      selectedItems - removedItems
    );
  });
});
