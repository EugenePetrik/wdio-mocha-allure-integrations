import { BasePage } from './base.page';
import { signUp } from '../elements/sign.up';
import { Element, Waiter } from '../helper';
import { logger } from '../configs';

export class SignUpPage extends BasePage {
  async open() {
    logger.debug('Open the Sign Up page');
    await super.open('/register');
  }

  async waitSignUpPageLoaded() {
    logger.debug('Wait until Sign Up page is displayed');
    await Waiter.waitForDisplayed(signUp.root);
  }

  async getPageHeader() {
    const header = await Element.getText(signUp.header);
    logger.debug(`Page header text is ${header} on the Sign Up page`);
    return header;
  }

  async getHaveAnAccountLinkText() {
    const linkText = (await Element.getText(signUp.haveAnAccountLink)).trim();
    logger.debug(`"Have an account?" link text is ${linkText} on the Sign Up page`);
    return linkText;
  }

  async getHaveAnAccountLinkHrefAttr() {
    const linkHrefAttr = (await Element.getAttribute(signUp.haveAnAccountLink, 'href'));
    logger.debug(`"Have an account?" link "href" attribute is ${linkHrefAttr} on the Sign Up page`);
    return linkHrefAttr;
  }

  async signUpAs(user) {
    const { username, email, password } = user;

    logger.debug(`Sign up into the application with - ${username}, ${email}, ${password}`);

    await Element.setValue(signUp.usernameInput, username);
    await Element.setValue(signUp.emailInput, email);
    await Element.setValue(signUp.passwordInput, password);
    await Element.click(signUp.signUpButton);
  }
}
