import { logger, timeouts } from '../../configs';
import { BasePage } from '../base.page';
import { articles } from '../../elements/articles';
import { Waiter, Element, Actions, Browser } from '../../helpers';

export class EditArticlePage extends BasePage {
  async open(articleSlug) {
    logger.debug(`Open the Edit Article page for article - ${articleSlug}`);
    await super.open(`/editor/${articleSlug}`);
  }

  async waitEditArticlePageLoaded() {
    logger.debug('Wait until Edit Article page is displayed');
    await Waiter.waitForDisplayed(articles.edit.root);
  }

  async getArticleTitle() {
    const articleTitle = await Element.getValue(articles.edit.titleInput);
    logger.debug(`Article title is ${articleTitle} on the Edit Article page`);
    return articleTitle;
  }

  async getArticleDescription() {
    const articleDescription = await Element.getValue(articles.edit.descriptionInput);
    logger.debug(`Article description is ${articleDescription} on the Edit Article page`);
    return articleDescription;
  }

  async getArticleBody() {
    const articleBody = await Element.getValue(articles.edit.bodyInput);
    logger.debug(`Article body is ${articleBody} on the Edit Article page`);
    return articleBody;
  }

  async getArticleTagsPlaceholder() {
    const articleTagsPlaceholder = await Element.getAttribute(articles.edit.tagsInput,
      'placeholder');
    logger.debug(`Article tags placeholder is ${articleTagsPlaceholder} on the Edit Article page`);
    return articleTagsPlaceholder;
  }

  async getArticleTags() {
    const articleTags = await Element.getTextFromElements(articles.edit.addedTags);
    logger.debug(`Article tags are ${articleTags.join(', ')} on the Edit Article page`);
    return articleTags;
  }

  async editArticleWith(article) {
    const { title, description, body, tagList } = article;

    logger.debug(`Edit an article with - ${JSON.stringify(article)}`);

    await Element.setValue(articles.edit.titleInput, title);
    await Element.setValue(articles.edit.descriptionInput, description);
    await Element.setValue(articles.edit.bodyInput, body);

    for await (const tag of tagList) {
      await Element.setValue(articles.edit.tagsInput, tag);
      await Actions.enter();
      await Browser.pause(timeouts.element);
    }

    await Element.click(articles.edit.publishArticleButton);
  }
}
