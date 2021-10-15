export class Actions {
  static async rightClick(locator) {
    await (await $(locator)).click({ button: 'right' });
  }

  static async moveToElement(locator) {
    await (await $(locator)).moveTo();
  }

  static async moveToElementByIndex(locator, index) {
    await (await $$(locator))[index].moveTo();
  }

  static async arrowDown() {
    await browser.keys('ArrowDown');
  }

  static async arrowUp() {
    await browser.keys('ArrowUp');
  }

  static async enter() {
    await browser.keys('Enter');
  }

  static async tab() {
    await browser.keys('Tab');
  }

  static async esc() {
    await browser.keys('Escape');
  }
}
