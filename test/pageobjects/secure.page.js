const { $ } = require("@wdio/globals");
const Page = require("./page");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
  /**
   * define selectors using getter methods
   */
  get UserAndPasswordNotMatch() {
    return $('h3[data-test="error"]');
  }
  get LockedOutUser() {
    return $('div[class="error-message-container error"]');
  }
  get EmptyField() {
    return $('div[class="error-message-container error"]');
  }
}

module.exports = new SecurePage();
