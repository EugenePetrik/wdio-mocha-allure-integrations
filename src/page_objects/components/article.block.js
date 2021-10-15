import { logger } from '../../configs';
import { Element } from '../../helper';
import { articleBlock } from '../../elements//components';

export class ArticleBlock {
  async getArticlesLength() {
    const articlesLength = await Element.getElementsLength(articleBlock.preview);
    logger.debug(`Articles length - ${articlesLength}`);
    return articlesLength;
  }

  async getArticleTitles() {
    const articlesTitles = await Element.getTextFromElements(articleBlock.title);
    logger.debug(`Articles titles - ${articlesTitles.join(', ')}`);
    return articlesTitles;
  }

  async getArticlesEmptyText() {
    const articlesEmptyText = (await Element.getText(articleBlock.emptyText)).trim();
    logger.debug(`Articles empty text is ${articlesEmptyText}`);
    return articlesEmptyText;
  }
}
