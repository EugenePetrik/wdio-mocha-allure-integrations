import { expect } from 'chai';
import dayjs from 'dayjs';
import { env } from '../../configs';
import { ApiHelper } from '../../utils/api.helper';
import { article, user, comment } from '../../models';
import { ArticleDetailsPage } from '../../page_objects/article';

describe('Delete article comment', () => {
  let articleDetailsPage;
  let token;
  let articleSlug;

  before(async () => {
    token = await ApiHelper.createUser(user);
    articleSlug = await ApiHelper.createArticle(article, token);
    await ApiHelper.addCommentToArticle(articleSlug, comment, token);
  });

  beforeEach(async () => {
    articleDetailsPage = new ArticleDetailsPage();

    await ApiHelper.loginToApp(token);
    
    await articleDetailsPage.open(articleSlug);
    await articleDetailsPage.waitArticleDetailsPageLoaded();
  });

  it('should open the page', async () => {
    const pageUrl = await articleDetailsPage.getPageUrl();
    expect(pageUrl).to.eq(`${env.APP_URL}/articles/${articleSlug}`);

    const pageTitle = await articleDetailsPage.getPageTitle();
    expect(pageTitle).to.eq('Conduit');

    const commentPlaceholder = await articleDetailsPage.addCommentForm.getCommentPlaceholder();
    expect(commentPlaceholder).to.eq('Write a comment...');

    const isPostCommentButtonDisplayed =
      await articleDetailsPage.addCommentForm.isPostCommentButtonDisplayed();
    expect(isPostCommentButtonDisplayed).to.be.true;

    const commentBody = await articleDetailsPage.comment.getCommentBody();
    expect(commentBody).to.eq(comment.body);

    const isCommentAuthorAvatarDisplayed =
      await articleDetailsPage.comment.isCommentAuthorAvatarDisplayed();
    expect(isCommentAuthorAvatarDisplayed).to.be.true;

    const commentAuthorName = await articleDetailsPage.comment.getCommentAuthorName();
    expect(commentAuthorName).to.eq(user.username);

    const commentDatePosted = await articleDetailsPage.comment.getCommentDatePosted();
    expect(commentDatePosted).to.eq(dayjs().format('MMMM D, YYYY'));

    const isDeleteCommentButtonDisplayed =
      await articleDetailsPage.comment.isDeleteCommentButtonDisplayed();
    expect(isDeleteCommentButtonDisplayed).to.be.true;
  });

  it('should delete article comment', async () => {
    await articleDetailsPage.comment.deleteArticleComment();

    const isArticleCommentDisplayed = await articleDetailsPage.comment.isArticleCommentDisplayed();
    expect(isArticleCommentDisplayed).to.be.false;
  });
});
