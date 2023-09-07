const { $ } = require("@wdio/globals");
const Page = require("./page");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ShoppingCartPage extends Page {
  /**
   * define selectors using getter methods
   */

  get numberOfItems() {
    return $$(".cart_item");
  }

  get removeButtons() {
    return $$("button=Remove");
  }

  /**
   * a method to encapsule automation code to interact with the page
   */

  async randomNumber() {
    const newNumber = Math.floor(
      Math.random() * (await this.numberOfItems.length)
    );
    return newNumber;
  }

  async randomItems(amount) {
    const choices = new Set();
    while (choices.size != amount) {
      const newNumber = await this.randomNumber();
      choices.add(newNumber);
    }
    return choices;
  }

  async removedItemIds(choices, itemRemoveButtons) {
    const removedIds = new Set();
    for (const choice of choices) {
      const removedId = await itemRemoveButtons[choice].getProperty("id");
      removedIds.add(removedId);
    }
    return removedIds;
  }

  async removeItems(choices, itemRemoveButtons) {
    for (const choice of choices) {
      (await itemRemoveButtons[choice]).click();
    }
  }

  /**
   * overwrite specific options to adapt it to page object
   */
  open() {
    return super.open("cart.html");
  }
}

module.exports = new ShoppingCartPage();
