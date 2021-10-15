import { logger } from '../configs';
import { BasePage } from './base.page';
import { Element, Waiter } from '../helpers';
import { signIn } from '../elements/sign.in';

export class SignInPage extends BasePage {
  async open() {
    logger.debug('Open the Sign In page');
    await super.open('/login');
  }

  async waitSignInPageLoaded() {
    await Waiter.waitForDisplayed(signIn.root);
  }

  async getPageHeader() {
    const header = await Element.getText(signIn.header);
    logger.debug(`Page header text is ${header} on the Sign In page`);
    return header;
  }

  async getNeedAnAccountLinkText() {
    const linkText = (await Element.getText(signIn.needAnAccountLink)).trim();
    logger.debug(`"Need an account?" link text is ${linkText} on the Sign In page`);
    return linkText;
  }

  async getNeedAnAccountLinkHrefAttr() {
    const linkHrefAttr = await Element.getAttribute(signIn.needAnAccountLink, 'href');
    logger.debug(`"Need an account?" link "href" attribute is ${linkHrefAttr} on the Sign In page`);
    return linkHrefAttr;
  }

  async signInAs(user) {
    const { email, password } = user;

    logger.debug(`Sign in into the application with - ${email}, ${password}`);

    await Element.setValue(signIn.emailInput, email);
    await Element.setValue(signIn.passwordInput, password);
    await Element.click(signIn.signInButton);
  }
}
