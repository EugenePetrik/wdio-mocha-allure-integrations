import { expect } from 'chai';
import { env } from '../../configs';
import { ApiHelper } from '../../utils/api.helper';
import { article, user } from '../../models';
import { HomePage } from '../../page_objects/home';
import { ArticleDetailsPage } from '../../page_objects/article';

describe('Delete an article', () => {
  let articleDetailsPage;
  let homePage;
  let token;
  let articleSlug;

  before(async () => {
    token = await ApiHelper.createUser(user);
    articleSlug = await ApiHelper.createArticle(article, token);
  });

  beforeEach(async () => {
    articleDetailsPage = new ArticleDetailsPage();
    homePage = new HomePage();

    await ApiHelper.loginToApp(token);

    await articleDetailsPage.open(articleSlug);
    await articleDetailsPage.waitArticleDetailsPageLoaded();
  });

  it('should open the page', async () => {
    const pageUrl = await articleDetailsPage.getPageUrl();
    expect(pageUrl).to.eq(`${env.APP_URL}/articles/${articleSlug}`);

    const pageTitle = await articleDetailsPage.getPageTitle();
    expect(pageTitle).to.eq('Conduit');

    const articleTitle = await articleDetailsPage.banner.getArticleTitle();
    expect(articleTitle).to.eq(article.title);

    const articleBody = await articleDetailsPage.content.getArticleBody();
    expect(articleBody).to.eq(article.body);

    const articleTags = await articleDetailsPage.content.getArticleTags();
    expect(articleTags).to.eql(article.tagList);
  });

  it('should remove an article', async () => {
    await articleDetailsPage.banner.clickDeleteArticleButton();
    await homePage.waitHomePageLoaded();

    const pageUrl = await homePage.getPageUrl();
    expect(pageUrl).to.eq(`${env.APP_URL}/`);

    const pageTitle = await homePage.getPageTitle();
    expect(pageTitle).to.eq('Conduit');

    const articlesTitles = await homePage.globalFeed.articleBlock.getArticleTitles();
    expect(articlesTitles).not.to.include(article.title);
  });
});
