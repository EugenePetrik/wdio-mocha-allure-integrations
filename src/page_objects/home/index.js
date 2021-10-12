import { logger } from '../../configs';
import { BasePage } from '../base.page';
import { Banner, GlobalFeed, PopularTags, YourFeed } from './components';
import { home } from '../../elements/home';
import { Waiter } from '../../helper';

export class HomePage extends BasePage {
  banner = new Banner();
  globalFeed = new GlobalFeed();
  yourFeed = new YourFeed();
  popularTags = new PopularTags();

  async open() {
    logger.debug('Open the Home page');
    await super.open('/');
  }

  async waitHomePageLoaded() {
    logger.debug('Wait until Home page is displayed');
    await Waiter.waitForDisplayed(home.root);
    await Waiter.waitForDisplayed(home.tabs.globalFeed);
    await Waiter.waitForDisplayed(home.articlePreview);
  }
}
