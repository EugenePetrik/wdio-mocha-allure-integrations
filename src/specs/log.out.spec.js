import { expect } from 'chai';
import { env } from '../configs';
import { user } from '../models';
import { HomePage } from '../page_objects/home';
import { SettingsPage } from '../page_objects/settings.page';
import { createUserAndSignIn } from '../utils/api';

describe('Log out', () => {
  let settingsPage;
  let homePage;

  before(async () => {
    await createUserAndSignIn(user);
  });

  beforeEach(async () => {
    settingsPage = new SettingsPage();
    homePage = new HomePage();

    await settingsPage.open();
    await settingsPage.waitSettingsPageLoaded();
  });

  it('should log out', async () => {
    const isLogOutButtonDisplayed = await settingsPage.isLogOutButtonDisplayed();
    expect(isLogOutButtonDisplayed).to.be.true;

    await settingsPage.clickOnLogOutButton();

    const pageUrl = await homePage.getPageUrl();
    expect(pageUrl).to.eq(`${env.APP_URL}/`);

    const pageTitle = await homePage.getPageTitle();
    expect(pageTitle).to.eq('Conduit');

    const navbarLinksText = await homePage.navBar.getNavLinksText();
    expect(navbarLinksText).to.eql(['Home', 'Sign in', 'Sign up']);
  });
});
