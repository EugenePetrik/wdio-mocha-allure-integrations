import { logger, Timeouts } from '../../../../configs';
import { articles } from '../../../../elements/articles';
import { Browser, Element, Waiter } from '../../../../helpers';

export class Comment {
  async waitCommentLoaded() {
    logger.debug('Wait until comment is displayed on the Article Details page');
    await Waiter.waitForDisplayed(articles.details.comment.card);
  }

  async getCommentBody() {
    const getCommentBody = await Element.getText(articles.details.comment.body);
    logger.debug(`Comment body is ${getCommentBody} on the New Article page`);
    return getCommentBody;
  }

  async isCommentAuthorAvatarDisplayed() {
    const isAuthorAvatarDisplayed = await Element.isDisplayed(articles.details.comment.authorAvatar);
    logger.debug(`Comment author avatar is ${
      isAuthorAvatarDisplayed ? 'visible' : 'not visible'
    } on the Article Details page`);
    return isAuthorAvatarDisplayed;
  }

  async getCommentAuthorName() {
    const authorName = await Element.getText(articles.details.comment.authorName);
    logger.debug(`comment author name is ${authorName} on the Article Details page`);
    return authorName;
  }

  async getCommentDatePosted() {
    const commentDate = await Element.getText(articles.details.comment.datePosted);
    logger.debug(`Comment date posted is ${commentDate} on the Article Details page`);
    return commentDate;
  }

  async isDeleteCommentButtonDisplayed() {
    const isDeleteCommentButtonDisplayed = await Element.isDisplayed(articles.details.comment.deleteComment);
    logger.debug(`Delete Comment button is ${
      isDeleteCommentButtonDisplayed ? 'visible' : 'not visible'
    } on the Article Details page`);
    return isDeleteCommentButtonDisplayed;
  }

  async isArticleCommentDisplayed() {
    const isArticleCommentDisplayed = await Element.isDisplayed(articles.details.comment.card);
    logger.debug(`Article comment is ${
      isArticleCommentDisplayed ? 'visible' : 'not visible'
    } on the Article Details page`);
    return isArticleCommentDisplayed;
  }

  async deleteArticleComment() {
    logger.debug('Delete article comment');
    await Element.click(articles.details.comment.deleteComment);
    await Browser.pause(Timeouts.element);
  }
}
