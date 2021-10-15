import { logger, Timeouts } from '../../../configs';
import { profile } from '../../../elements/profile';
import { Browser, Element } from '../../../helpers';
import { ArticleBlock } from '../../../page_objects/components';

export class FavoritedArticles {
  articleBlock = new ArticleBlock();

  async clickFavoritedArticlesTab() {
    logger.debug('Click on the "Favorited Articles" tab on the Profile page');
    await Element.click(profile.tabs.favoritedArticles);
    await Browser.pause(Timeouts.element);
  }
}
