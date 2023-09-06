const { $ } = require("@wdio/globals");
const Page = require("./page");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class MainPage extends Page {
  /**
   * define selectors using getter methods
   */

  /**
   * a method to encapsule automation code to interact with the page

  }

  /**
   * overwrite specific options to adapt it to page object
   */
  open() {
    return super.open("inventory.html");
  }
}

module.exports = new MainPage();
