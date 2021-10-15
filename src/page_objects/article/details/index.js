import { logger } from '../../../configs';
import { BasePage } from '../../base.page';
import { articles } from '../../../elements/articles';
import { Waiter } from '../../../helpers';
import { AddCommentForm, Banner, Content, Comment } from './components';

export class ArticleDetailsPage extends BasePage {
  addCommentForm = new AddCommentForm();
  banner = new Banner();
  content = new Content();
  comment = new Comment();

  async open(articleSlug) {
    logger.debug(`Open the Article Details page for article - ${articleSlug}`);
    await super.open(`/articles/${articleSlug}`);
  }

  async waitArticleDetailsPageLoaded() {
    logger.debug('Wait until Article Details is displayed');
    await Waiter.waitForDisplayed(articles.details.root);
  }
}
