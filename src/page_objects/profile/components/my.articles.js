import { logger } from '../../../configs';
import { profile } from '../../../elements/profile';
import { Element } from '../../../helper';
import { ArticleBlock } from '../../../page_objects/components';

export class MyArticles {
  articleBlock = new ArticleBlock();

  async clickFavoritedArticlesTab() {
    logger.debug('Click on the "My Articles" tab on the Profile page');
    await Element.click(profile.tabs.myArticles);
  }
}
