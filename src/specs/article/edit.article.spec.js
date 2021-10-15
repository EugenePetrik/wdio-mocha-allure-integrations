import { expect } from 'chai';
import faker from 'faker';
import dayjs from 'dayjs';
import { env } from '../../configs';
import { ApiHelper } from '../../utils/api.helper';
import { article, user } from '../../models';
import { EditArticlePage, ArticleDetailsPage } from '../../page_objects/article';

describe('Edit an article', () => {
  let editArticlePage;
  let articleDetailsPage;
  let token;
  let articleSlug;

  before(async () => {
    token = await ApiHelper.createUser(user);
    articleSlug = await ApiHelper.createArticle(article, token);
  });

  beforeEach(async () => {
    editArticlePage = new EditArticlePage();
    articleDetailsPage = new ArticleDetailsPage();

    await ApiHelper.loginToApp(token);

    await editArticlePage.open(articleSlug);
    await editArticlePage.waitEditArticlePageLoaded();
  });

  it('should open the page', async () => {
    const pageUrl = await editArticlePage.getPageUrl();
    expect(pageUrl).to.eq(`${env.APP_URL}/editor/${articleSlug}`);

    const pageTitle = await editArticlePage.getPageTitle();
    expect(pageTitle).to.eq('Conduit');

    const articleTitle = await editArticlePage.getArticleTitle();
    expect(articleTitle).to.eq(article.title);

    const articleDescription = await editArticlePage.getArticleDescription();
    expect(articleDescription).to.eq(article.description);

    const articleBody = await editArticlePage.getArticleBody();
    expect(articleBody).to.eq(article.body);

    const articleTagsPlaceholder = await editArticlePage.getArticleTagsPlaceholder();
    expect(articleTagsPlaceholder).to.eq('Enter tags');

    const articleTags = await editArticlePage.getArticleTags();
    expect(articleTags).to.eql(article.tagList);
  });

  it('should edit an article', async () => {
    const newArticle = {
      title: faker.lorem.words(),
      description: faker.lorem.sentence(),
      body: faker.lorem.paragraph(),
      tagList: [faker.lorem.word(), faker.lorem.word(), faker.lorem.word()],
    };

    await editArticlePage.editArticleWith(newArticle);
    await articleDetailsPage.waitArticleDetailsPageLoaded();

    const pageUrl = await articleDetailsPage.getPageUrl();
    expect(pageUrl).to.eq(`${env.APP_URL}/articles/${articleSlug}`);

    const pageTitle = await articleDetailsPage.getPageTitle();
    expect(pageTitle).to.eq('Conduit');

    const articleTitle = await articleDetailsPage.banner.getArticleTitle();
    expect(articleTitle).to.eq(newArticle.title);

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
    expect(articleBody).to.eq(newArticle.body);

    const articleTags = await articleDetailsPage.content.getArticleTags();
    expect(articleTags).to.eql([...article.tagList, ...newArticle.tagList]);

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
