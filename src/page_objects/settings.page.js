import { logger } from '../configs';
import { BasePage } from './base.page';
import { settings } from '../elements/settings';
import { Waiter, Element } from '../helpers';

export class SettingsPage extends BasePage {
  async open() {
    logger.debug('Open the Settings page');
    await super.open('/settings');
  }

  async waitSettingsPageLoaded() {
    logger.debug('Wait until Settings page is displayed');
    await Waiter.waitForDisplayed(settings.root);
  }

  async getPageHeader() {
    const header = await Element.getText(settings.header);
    logger.debug(`Page header text is ${header} on the Settings page`);
    return header;
  }

  async getUsernameText() {
    const username = await Element.getValue(settings.usernameInput);
    logger.debug(`Username equals ${username} on the Settings page`);
    return username;
  }

  async getEmailText() {
    const email = await Element.getValue(settings.emailInput);
    logger.debug(`Email equals ${email} on the Settings page`);
    return email;
  }

  async isUpdateSettingButtonDisplayed() {
    const isButtonDisplayed = await Element.isDisplayed(settings.updateSettingButton);
    logger.debug(`Update Settings button is ${isButtonDisplayed ? 'visible' : 'not visible'} on the Settings page`);
    return isButtonDisplayed;
  }

  async isLogOutButtonDisplayed() {
    const isButtonDisplayed = await Element.isDisplayed(settings.logOutButton);
    logger.debug(`Log Out button is ${isButtonDisplayed ? 'visible' : 'not visible'} on the Settings page`);
    return isButtonDisplayed;
  }

  async clickOnLogOutButton() {
    logger.debug('Click on the Log Out button on the Settings page');
    await Element.click(settings.logOutButton);
  }
}
