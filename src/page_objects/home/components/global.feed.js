import { Element } from '../../../helper';
import { logger } from '../../../configs';
import { home } from '../../../elements/home';
import { ArticleBlock } from '../../../page_objects/components';

export class GlobalFeed {
  articleBlock = new ArticleBlock();

  async clickGlobalFeedTab() {
    logger.debug('Click on the "Global Feed" tab on the Home page');
    await Element.click(home.tabs.globalFeed);
  }
}
