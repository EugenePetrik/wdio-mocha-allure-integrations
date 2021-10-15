import { logger, Timeouts } from '../../configs';
import { BasePage } from '../base.page';
import { articles } from '../../elements/articles';
import { Waiter, Element, Actions, Browser } from '../../helpers';

export class NewArticlePage extends BasePage {
  async open() {
    logger.debug('Open the New Article page');
    await super.open('/editor');
  }

  async waitNewArticlePageLoaded() {
    logger.debug('Wait until the New Article page is displayed');
    await Waiter.waitForDisplayed(articles.new.root);
  }

  async getArticleTitlePlaceholder() {
    const articleTitlePlaceholder = await Element.getAttribute(articles.new.titleInput,
      'placeholder');
    logger.debug(`Article title placeholder is ${articleTitlePlaceholder} on the New Article page`);
    return articleTitlePlaceholder;
  }

  async getArticleDescriptionPlaceholder() {
    const articleDescriptionPlaceholder = await Element.getAttribute(articles.new.descriptionInput,
      'placeholder');
    logger.debug(`Article description placeholder is ${articleDescriptionPlaceholder} on the New Article page`);
    return articleDescriptionPlaceholder;
  }

  async getArticleBodyPlaceholder() {
    const articleBodyPlaceholder = await Element.getAttribute(articles.new.bodyInput,
      'placeholder');
    logger.debug(`Article body placeholder is ${articleBodyPlaceholder} on the New Article page`);
    return articleBodyPlaceholder;
  }

  async getArticleTagsPlaceholder() {
    const articleTagsPlaceholder = await Element.getAttribute(articles.new.tagsInput,
      'placeholder');
    logger.debug(`Article tags placeholder is ${articleTagsPlaceholder} on the New Article page`);
    return articleTagsPlaceholder;
  }

  async createNewArticleWith(article) {
    const { title, description, body, tagList } = article;

    logger.debug(`Create a new article with - ${JSON.stringify(article)}`);

    await Element.setValue(articles.new.titleInput, title);
    await Element.setValue(articles.new.descriptionInput, description);
    await Element.setValue(articles.new.bodyInput, body);

    for await (const tag of tagList) {
      await Element.setValue(articles.new.tagsInput, tag);
      await Actions.enter();
      await Browser.pause(Timeouts.element);
    }

    await Element.click(articles.new.publishArticleButton);
  }
}
