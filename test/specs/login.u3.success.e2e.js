const { expect } = require("@wdio/globals");
const LoginPage = require("../pageobjects/login.page");

describe("Login page", () => {
  it("should login with accepted username 'problem_user' and redirect to inventory page with problematic item images", async () => {
    await LoginPage.open();

    await LoginPage.login("problem_user", "secret_sauce");

    const pugs = await $$("img[class='inventory_item_img']");
    await expect(pugs).toBeExisting();
    for await (const pug of pugs) {
      await expect(pug).toHaveAttribute(
        "src",
        "/static/media/sl-404.168b1cce.jpg"
      );
    }
  });
});
