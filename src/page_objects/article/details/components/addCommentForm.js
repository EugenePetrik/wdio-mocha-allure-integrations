import { logger } from '../../../../configs';
import { articles } from '../../../../elements/articles';
import { Element } from '../../../../helpers';

export class AddCommentForm {
  async getCommentPlaceholder() {
    const getCommentPlaceholder = await Element.getAttribute(articles.details.addComment.writeCommentInput,
      'placeholder');
    logger.debug(`Article description placeholder is ${getCommentPlaceholder} on the New Article page`);
    return getCommentPlaceholder;
  }

  async isCommentAuthorAvatarDisplayed() {
    const isCommentAuthorAvatarDisplayed = await Element.isDisplayed(articles.details.addComment.authorAvatar);
    logger.debug(`Comment author avatar is ${
      isCommentAuthorAvatarDisplayed ? 'visible' : 'not visible'
    } on the Article Details page`);
    return isCommentAuthorAvatarDisplayed;
  }

  async isPostCommentButtonDisplayed() {
    const isPostCommentButtonDisplayed = await Element.isDisplayed(articles.details.addComment.postCommentButton);
    logger.debug(`Post Comment button is ${
      isPostCommentButtonDisplayed ? 'visible' : 'not visible'
    } on the Article Details page`);
    return isPostCommentButtonDisplayed;
  }

  async addCommentWith(comment) {
    const { body } = comment;

    logger.debug(`Add comment with - ${JSON.stringify(comment)}`);

    await Element.setValue(articles.details.addComment.writeCommentInput, body);
    await Element.click(articles.details.addComment.postCommentButton);
  }
}
