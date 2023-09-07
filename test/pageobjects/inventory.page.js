const { $ } = require("@wdio/globals");
const Page = require("./page");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class InventoryPage extends Page {
  /**
   * define selectors using getter methods
   */
  get selectSort() {
    return $("select[data-test='product_sort_container']");
  }

  get lowhigh() {
    return $("option[value='lohi']");
  }

  get addToCart() {
    return $$("button=Add to cart");
  }

  get numberOfItems() {
    return $$(".inventory_item").length;
  }

  get itemPrices() {
    return $$("div[class='inventory_item_price']");
  }

  /**
   * a method to encapsule automation code to interact with the page
   */
  async sortLoHi() {
    await this.selectSort.click();
    await this.lowhigh.click();
  }

  async randomNumber() {
    const newNumber = Math.floor(Math.random() * (await this.numberOfItems));
    return newNumber;
  }

  async randomItems(amount) {
    const choices = new Set();
    while (choices.size != amount) {
      const newNumber = await this.randomNumber();
      choices.add(newNumber);
      // console.log(`size${choices.size}`);
      // console.log(`nnnnnnnnnnnn${newNumber}`);
    }
    return choices;
  }

  async selectItems(choices, itemAddButtons) {
    for (const choice of choices) {
      (await itemAddButtons[choice]).click();
    }
  }

  /**
   * overwrite specific options to adapt it to page object
   */
  open() {
    return super.open("inventory.html");
  }
}

module.exports = new InventoryPage();
