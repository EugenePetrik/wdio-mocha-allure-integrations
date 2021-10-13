import { expect } from 'chai';
import { env } from '../configs';
import { user } from '../models';
import { HomePage } from '../page_objects/home';
import { SignUpPage } from '../page_objects/sign.up.page';

describe('Sign up', () => {
  let homePage;
  let signUpPage;

  beforeEach(async () => {
    homePage = new HomePage();
    signUpPage = new SignUpPage();

    await signUpPage.open();
    await signUpPage.waitSignUpPageLoaded();
  });

  it('should open the page', async () => {
    const pageTitle = await signUpPage.getPageTitle();
    expect(pageTitle).to.eq('Conduit');

    const pageHeader = await signUpPage.getPageHeader();
    expect(pageHeader).to.eq('Sign up');

    const accountLinkText = await signUpPage.getHaveAnAccountLinkText();
    expect(accountLinkText).to.eq('Have an account?');

    const accountLinkHreAttr = await signUpPage.getHaveAnAccountLinkHrefAttr();
    expect(accountLinkHreAttr).to.eq('/login');
  });

  it('should sign up successfully', async () => {
    await signUpPage.signUpAs(user);
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
