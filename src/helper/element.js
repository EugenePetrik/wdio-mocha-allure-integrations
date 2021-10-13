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

  static async getValue(locator) {
    await Waiter.waitForExist(locator);
    return await $(locator).getValue();
  }

  static async getAttribute(locator, attributeName) {
    await Waiter.waitForExist(locator);
    return await $(locator).getAttribute(attributeName);
  }

  static async getElementsLength(locator) {
    await Waiter.waitForElements(locator);
    return await $$(locator).length;
  }

  static async getTextFromElements(locator) {
    await Waiter.waitForElements(locator);
    return Promise.all(await $$(locator).map(async (link) => {
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
