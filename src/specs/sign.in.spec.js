import { expect } from 'chai';
import { env } from '../configs';
import { user } from '../models';
import { HomePage } from '../page_objects/home';
import { SignInPage } from '../page_objects/sign.in.page';
import { ApiHelper } from '../utils/api.helper';

describe('Sign in', () => {
  let homePage;
  let signInPage;

  before(async () => {
    const token = await ApiHelper.createUser(user);
    await ApiHelper.loginToApp(token);
  });

  beforeEach(async () => {
    homePage = new HomePage();
    signInPage = new SignInPage();

    await signInPage.open();
    await signInPage.waitSignInPageLoaded();
  });

  it('C2327 should open the page', async () => {
    const pageTitle = await signInPage.getPageTitle();
    expect(pageTitle).to.eq('Conduit');

    const pageHeader = await signInPage.getPageHeader();
    expect(pageHeader).to.eq('Sign in');

    const accountLinkText = await signInPage.getNeedAnAccountLinkText();
    expect(accountLinkText).to.eq('Need an account?');

    const accountLinkHreAttr = await signInPage.getNeedAnAccountLinkHrefAttr();
    expect(accountLinkHreAttr).to.eq('/register');
  });

  it('C2328 should log in successfully', async () => {
    await signInPage.signInAs(user);
    await homePage.navBar.waitNavBarLoaded();
    await homePage.waitHomePageLoaded();

    const pageUrl = await homePage.getPageUrl();
    expect(pageUrl).to.eq(`${env.APP_URL}/`);

    const pageTitle = await homePage.getPageTitle();
    expect(pageTitle).to.eq('Conduit');

    const navbarLinksLength = await homePage.navBar.getNavLinksLength();
    expect(navbarLinksLength).to.eq(4);

    const navbarLinksText = await homePage.navBar.getNavLinksText();
    expect(navbarLinksText).to.eql(['Home', 'New Article', 'Settings', user.username]);
  });
});
