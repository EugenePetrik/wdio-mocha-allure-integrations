/* eslint-disable function-paren-newline */

export class JsExecutor {
  static async click(locator) {
    await browser.execute(`document.querySelector('${locator}').click()`);
  }

  static async clickByIndex(locator, index) {
    await browser.execute(`document.querySelectorAll('${locator}')[${index}].click()`);
  }

  static async executeScript(script) {
    await browser.execute(script);
  }

  static async getText(locator) {
    return await browser.execute(`return document.querySelector('${locator}').textContent`);
  }

  static async getBackgroundColor(locator) {
    return await browser.execute(
      `return window.getComputedStyle(document.querySelector('${locator}')).getPropertyValue("background-color")`,
    );
  }

  static async getColor(locator) {
    return await browser.execute(
      `return window.getComputedStyle(document.querySelector('${locator}')).getPropertyValue("color")`,
    );
  }

  static async getAttributeValue(locator, attribute) {
    return await browser.execute(`return document.querySelector('${locator}').getAttribute('${attribute}')`);
  }

  static async getCookie() {
    return await browser.execute('return document.cookie');
  }

  static async getURL() {
    return await browser.execute('return document.URL');
  }
}
