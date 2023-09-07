const { expect } = require("@wdio/globals");
const LoginPage = require("../pageobjects/login.page");

//test different successful login with accepted usernames

describe("Login page", () => {
  it("should login with accepted username 'standard_user' and redirect to inventory page", async () => {
    await LoginPage.open();

    await LoginPage.login("standard_user", "secret_sauce");
    //shopping cart only exists if a user is logged in
    const shoppingCart = await $("#shopping_cart_container");
    await expect(shoppingCart).toBeExisting();
  });

  it("should login with accepted username 'problem_user' and redirect to inventory page with problematic item images", async () => {
    await LoginPage.open();

    await LoginPage.login("problem_user", "secret_sauce");

    const pugs = await $$("img[class='inventory_item_img']");
    await expect(pugs).toBeExisting();

    //all item images are replaced by image of pug for this account
    for await (const pug of pugs) {
      await expect(pug).toHaveAttribute(
        "src",
        "/static/media/sl-404.168b1cce.jpg"
      );
    }
  });

  it("should login with accepted username 'performance_glitch_user' and redirect to inventory page slower than other accounts", async () => {
    await LoginPage.open();

    await LoginPage.login("performance_glitch_user", "secret_sauce");

    const shoppingCart = await $("#shopping_cart_container");
    await expect(shoppingCart).toBeExisting();
  });
});
