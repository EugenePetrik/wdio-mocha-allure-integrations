import { Waiter } from './waiter';

export class Element {
  static async click(locator) {
    await Waiter.waitForClickable(locator);
    await (await $(locator)).click();
  }

  static async setValue(locator, value) {
    await Waiter.waitForExist(locator);
    await await (await $(locator)).setValue(value);
  }

  static async getText(locator) {
    await Waiter.waitForExist(locator);
    return await (await $(locator)).getText();
  }

  static async getAttribute(element, attributeName) {
    await Waiter.waitForExist(element);
    return await $(element).getAttribute(attributeName);
  }

  static async getElementsLength(elements) {
    await Waiter.waitForElements(elements);
    return await $$(elements).length;
  }

  static async getTextFromElements(elements) {
    await Waiter.waitForElements(elements);
    return Promise.all(await $$(elements).map(async (link) => {
      return (await link.getText()).trim();
    })).then((links) => {
      return links;
    });
  }

  static async getTextArray(locator) {
    await Waiter.waitForExist(locator);
    const elNumber = (await $$(locator)).length;
    const textArr = [];
    for (let i = 0; i < elNumber; i++) {
      textArr.push(await (await $$(locator))[i].getText());
    }
    return textArr;
  }

  static async isSelected(locator) {
    await Waiter.waitForExist(locator);
    return await (await $(locator)).isSelected();
  }

  static async isDisplayed(locator) {
    await Waiter.waitForExist(locator);
    return await (await $(locator)).isDisplayed();
  }

  static async isExisted(locator) {
    await Waiter.waitForExist(locator);
    return await (await $(locator)).isExisting();
  }
}
