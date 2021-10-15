import { logger } from '../../../../configs';
import { articles } from '../../../../elements/articles';
import { Element } from '../../../../helpers';

export class Content {
  async getArticleBody() {
    const articleBody = await Element.getText(articles.details.content.body);
    logger.debug(`Article body is ${articleBody} on the Article Details page`);
    return articleBody;
  }

  async getArticleTags() {
    const articleTags = await Element.getTextFromElements(articles.details.content.tags);
    logger.debug(`Article tags are ${articleTags.join(', ')} on the Article Details page`);
    return articleTags;
  }

  async isEditArticleButtonDisplayed() {
    const isEditArticleButtonDisplayed = await Element.isDisplayed(articles.details.content.editArticleButton);
    logger.debug(`Edit Article button is ${
      isEditArticleButtonDisplayed ? 'visible' : 'not visible'
    } on the Article Details page`);
    return isEditArticleButtonDisplayed;
  }

  async isDeleteArticleButtonDisplayed() {
    const isDeleteArticleButtonDisplayed = await Element.isDisplayed(articles.details.content.deleteArticleButton);
    logger.debug(`Delete Article button is ${
      isDeleteArticleButtonDisplayed ? 'visible' : 'not visible'
    } on the Article Details page`);
    return isDeleteArticleButtonDisplayed;
  }

  async isAuthorAvatarDisplayed() {
    const isAuthorAvatarDisplayed = await Element.isDisplayed(articles.details.content.authorAvatar);
    logger.debug(`Author avatar is ${
      isAuthorAvatarDisplayed ? 'visible' : 'not visible'
    } on the Article Details page`);
    return isAuthorAvatarDisplayed;
  }

  async getAuthorName() {
    const authorName = await Element.getText(articles.details.content.authorName);
    logger.debug(`Author name is ${authorName} on the Article Details page`);
    return authorName;
  }

  async getArticleDate() {
    const articleDate = await Element.getText(articles.details.content.articleDate);
    logger.debug(`Article date is ${articleDate} on the Article Details page`);
    return articleDate;
  }
}
