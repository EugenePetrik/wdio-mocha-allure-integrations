import { expect } from 'chai';
import dayjs from 'dayjs';
import { env } from '../../configs';
import { ApiHelper } from '../../utils/api.helper';
import { article, user } from '../../models';
import { NewArticlePage, ArticleDetailsPage } from '../../page_objects/article';

describe('Create a new article', () => {
  let newArticlePage;
  let articleDetailsPage;
  let token;

  before(async () => {
    token = await ApiHelper.createUser(user);
  });

  beforeEach(async () => {
    newArticlePage = new NewArticlePage();
    articleDetailsPage = new ArticleDetailsPage();

    await ApiHelper.loginToApp(token);
    
    await newArticlePage.open();
    await newArticlePage.waitNewArticlePageLoaded();
  });

  it('should open the page', async () => {
    const pageUrl = await newArticlePage.getPageUrl();
    expect(pageUrl).to.eq(`${env.APP_URL}/editor`);

    const pageTitle = await newArticlePage.getPageTitle();
    expect(pageTitle).to.eq('Conduit');

    const articleTitlePlaceholder = await newArticlePage.getArticleTitlePlaceholder();
    expect(articleTitlePlaceholder).to.eq('Article Title');

    const articleDescriptionPlaceholder = await newArticlePage.getArticleDescriptionPlaceholder();
    expect(articleDescriptionPlaceholder).to.eq(`What's this article about?`);

    const articleBodyPlaceholder = await newArticlePage.getArticleBodyPlaceholder();
    expect(articleBodyPlaceholder).to.eq('Write your article (in markdown)');

    const articleTagsPlaceholder = await newArticlePage.getArticleTagsPlaceholder();
    expect(articleTagsPlaceholder).to.eq('Enter tags');
  });

  it('should create a new article', async () => {
    await newArticlePage.createNewArticleWith(article);
    await articleDetailsPage.waitArticleDetailsPageLoaded();

    const articleTitle = await articleDetailsPage.banner.getArticleTitle();
    expect(articleTitle).to.eq(article.title);

    const isAuthorAvatarDisplayedInBanner =
      await articleDetailsPage.banner.isAuthorAvatarDisplayed();
    expect(isAuthorAvatarDisplayedInBanner).to.be.true;

    const authorNameInBanner = await articleDetailsPage.banner.getAuthorName();
    expect(authorNameInBanner).to.eq(user.username);

    const articleDateInBanner = await articleDetailsPage.banner.getArticleDate();
    expect(articleDateInBanner).to.eq(dayjs().format('MMMM D, YYYY'));

    const isEditArticleButtonDisplayedInBanner =
      await articleDetailsPage.banner.isEditArticleButtonDisplayed();
    expect(isEditArticleButtonDisplayedInBanner).to.be.true;

    const isDeleteArticleButtonDisplayedInBanner =
      await articleDetailsPage.banner.isDeleteArticleButtonDisplayed();
    expect(isDeleteArticleButtonDisplayedInBanner).to.be.true;

    const articleBody = await articleDetailsPage.content.getArticleBody();
    expect(articleBody).to.eq(article.body);

    const articleTags = await articleDetailsPage.content.getArticleTags();
    expect(articleTags).to.eql(article.tagList);

    const isAuthorAvatarDisplayedInContent =
      await articleDetailsPage.content.isAuthorAvatarDisplayed();
    expect(isAuthorAvatarDisplayedInContent).to.be.true;

    const authorNameInContent = await articleDetailsPage.content.getAuthorName();
    expect(authorNameInContent).to.eq(user.username);

    const articleDateInContent = await articleDetailsPage.content.getArticleDate();
    expect(articleDateInContent).to.eq(dayjs().format('MMMM D, YYYY'));

    const isEditArticleButtonDisplayedInContent =
      await articleDetailsPage.content.isEditArticleButtonDisplayed();
    expect(isEditArticleButtonDisplayedInContent).to.be.true;

    const isDeleteArticleButtonDisplayedInContent =
      await articleDetailsPage.content.isDeleteArticleButtonDisplayed();
    expect(isDeleteArticleButtonDisplayedInContent).to.be.true;
  });
});
