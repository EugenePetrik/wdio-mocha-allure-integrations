import { expect } from 'chai';
import { SettingsPage } from '../page_objects/settings.page';
import { ApiHelper } from '../utils/api.helper';
import { user } from '../models';

describe('Settings', () => {
  let settingsPage;

  before(async () => {
    const token = await ApiHelper.createUser(user);
    await ApiHelper.loginToApp(token);
  });

  beforeEach(async () => {
    settingsPage = new SettingsPage();

    await settingsPage.open();
    await settingsPage.waitSettingsPageLoaded();
  });

  it('should open the page', async () => {
    const pageTitle = await settingsPage.getPageTitle();
    expect(pageTitle).to.eq('Conduit');

    const pageHeader = await settingsPage.getPageHeader();
    expect(pageHeader).to.eq('Your Settings');

    const getUsername = await settingsPage.getUsernameText();
    expect(getUsername).to.eq(user.username);

    const getEmail = await settingsPage.getEmailText();
    expect(getEmail).to.eq(user.email);

    const isUpdateSettingButtonDisplayed = await settingsPage.isUpdateSettingButtonDisplayed();
    expect(isUpdateSettingButtonDisplayed).to.be.true;

    const isLogOutButtonDisplayed = await settingsPage.isLogOutButtonDisplayed();
    expect(isLogOutButtonDisplayed).to.be.true;
  });
});
