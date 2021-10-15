import { logger } from '../../configs';
import { BasePage } from '../base.page';
import { FavoritedArticles, MyArticles } from './components';
import { Element, Waiter } from '../../helpers';
import { profile } from '../../elements/profile';

export class ProfilePage extends BasePage {
  favoritedArticles = new FavoritedArticles();
  myArticles = new MyArticles();

  async open(username) {
    logger.debug('Open the Profile page');
    await super.open(`/@${username}`);
  }

  async waitProfilePageLoaded() {
    logger.debug('Wait until Profile page is displayed');
    await Waiter.waitForDisplayed(profile.root);
    await Waiter.waitForDisplayed(profile.userImage);
    await Waiter.waitForDisplayed(profile.username);
    await Waiter.waitForDisplayed(profile.articlePreview);
  }

  async isUserImageVisible() {
    const isUserImageVisible = await Element.isDisplayed(profile.userImage);
    logger.debug(`User image is ${isUserImageVisible ? 'visible' : 'not visible'} on the Profile page`);
    return isUserImageVisible;
  }

  async getUsernameText() {
    const usernameText = (await Element.getText(profile.username)).trim();
    logger.debug(`Username is ${usernameText} on the Profile page`);
    return usernameText;
  }

  async isEditProfileButtonVisible() {
    const isEditProfileButtonVisible = await Element.isDisplayed(profile.editProfileSettingsButton);
    logger.debug(`Edit Profile button is ${
      isEditProfileButtonVisible ? 'visible' : 'not visible'
    } on the Profile page`);
    return isEditProfileButtonVisible;
  }
}
