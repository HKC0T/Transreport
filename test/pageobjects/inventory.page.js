const { $ } = require("@wdio/globals");
const Page = require("./page");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class InventoryPage extends Page {
  /**
   * define selectors using getter methods
   */
  get filter() {
    return $("select[data-test='product_sort_container']");
  }

  get lowhigh() {
    return $("option[value='lohi']");
  }

  /**
   * a method to encapsule automation code to interact with the page
   */
  async selectFilter() {
    await this.filter.click();
    await this.lowhigh.click();
  }

  /**
   * overwrite specific options to adapt it to page object
   */
  open() {
    return super.open("inventory.html");
  }
}

module.exports = new InventoryPage();
