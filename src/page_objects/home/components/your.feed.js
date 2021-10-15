import { Element } from '../../../helper';
import { logger } from '../../../configs';
import { home } from '../../../elements/home';
import { ArticleBlock } from '../../../page_objects/components';

export class YourFeed {
  articleBlock = new ArticleBlock();

  async clickYourFeedTab() {
    logger.debug('Click on the "Global Feed" tab on the Home page');
    await Element.click(home.tabs.yourFeed);
  }

  async isYourFeedTabDisplayed() {
    const isYourFeedTabDisplayed = await Element.isDisplayed(home.tabs.yourFeed);
    logger.debug(`Your Feed tab is ${isYourFeedTabDisplayed ? 'visible' : 'not visible'} on the Home page`);
    return isYourFeedTabDisplayed;
  }
}
