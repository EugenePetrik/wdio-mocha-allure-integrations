import { waitForClickable, waitForExist } from './waiter';

export class Element {
  static async click(locator) {
    await waitForClickable(locator);
    await (await $(locator)).click();
  }

  static async getText(locator) {
    await waitForExist(locator);
    return await (await $(locator)).getText();
  }

  static async getTextArray(locator) {
    await waitForExist(locator);
    const elNumber = (await $$(locator)).length;
    const textArr = [];
    for (let i = 0; i < elNumber; i++) {
      textArr.push(await (await $$(locator))[i].getText());
    }
    return textArr;
  }

  static async isSelected(locator) {
    await waitForExist(locator);
    return await (await $(locator)).isSelected();
  }

  static async isDisplayed(locator) {
    await waitForExist(locator);
    return await (await $(locator)).isDisplayed();
  }

  static async isExisted(locator) {
    await waitForExist(locator);
    return await (await $(locator)).isExisting();
  }

  static async setValue(locator, value) {
    await waitForExist(locator);
    await await (await $(locator)).setValue(value);
  }
}
