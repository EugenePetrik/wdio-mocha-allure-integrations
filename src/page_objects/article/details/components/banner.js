import { logger } from '../../../../configs';
import { articles } from '../../../../elements/articles';
import { Element } from '../../../../helpers';

export class Banner {
  async getArticleTitle() {
    const articleTitle = await Element.getText(articles.details.banner.title);
    logger.debug(`Article title is ${articleTitle} on the Article Details page`);
    return articleTitle;
  }

  async isEditArticleButtonDisplayed() {
    const isEditArticleButtonDisplayed = await Element.isDisplayed(articles.details.banner.editArticleButton);
    logger.debug(`Edit Article button is ${
      isEditArticleButtonDisplayed ? 'visible' : 'not visible'
    } on the Article Details page`);
    return isEditArticleButtonDisplayed;
  }

  async isDeleteArticleButtonDisplayed() {
    const isDeleteArticleButtonDisplayed = await Element.isDisplayed(articles.details.banner.editArticleButton);
    logger.debug(`Delete Article button is ${
      isDeleteArticleButtonDisplayed ? 'visible' : 'not visible'
    } on the Article Details page`);
    return isDeleteArticleButtonDisplayed;
  }

  async isAuthorAvatarDisplayed() {
    const isAuthorAvatarDisplayed = await Element.isDisplayed(articles.details.banner.authorAvatar);
    logger.debug(`Author avatar is ${
      isAuthorAvatarDisplayed ? 'visible' : 'not visible'
    } on the Article Details page`);
    return isAuthorAvatarDisplayed;
  }

  async getAuthorName() {
    const authorName = await Element.getText(articles.details.banner.authorName);
    logger.debug(`Author name is ${authorName} on the Article Details page`);
    return authorName;
  }

  async getArticleDate() {
    const articleDate = await Element.getText(articles.details.banner.articleDate);
    logger.debug(`Article date is ${articleDate} on the Article Details page`);
    return articleDate;
  }

  async clickDeleteArticleButton() {
    logger.debug('Click on the Delete Article button on the Article Details page');
    await Element.click(articles.details.banner.deleteArticleButton);
  }
}
