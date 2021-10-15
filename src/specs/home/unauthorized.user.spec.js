import { expect } from 'chai';
import { env } from '../../configs';
import { HomePage } from '../../page_objects/home';
import { ApiHelper } from '../../utils/api.helper';
import { user, article } from '../../models';

describe('Home page for unauthorized user', () => {
  let homePage;
  let token;

  before(async () => {
    token = await ApiHelper.createUser(user);
    const articleSlug = await ApiHelper.createArticle(article, token);
    await ApiHelper.addArticleToFavorite(articleSlug, token);
  });

  beforeEach(async () => {
    homePage = new HomePage();
    await homePage.open();
    await homePage.waitHomePageLoaded();
  });

  it('should have navigation bar', async () => {
    const pageUrl = await homePage.getPageUrl();
    expect(pageUrl).to.eq(`${env.APP_URL}/`);

    const pageTitle = await homePage.getPageTitle();
    expect(pageTitle).to.eq('Conduit');

    const isBrandLogoVisible = await homePage.navBar.isBrandLogoDisplayed();
    expect(isBrandLogoVisible).to.be.true;

    const brandLogoLink = await homePage.navBar.getBrandLogoLink();
    expect(brandLogoLink).to.eq('/');
  });

  it('should have navigation bar links', async () => {
    const navbarLinksText = await homePage.navBar.getNavLinksText();
    expect(navbarLinksText).to.eql(['Home', 'Sign in', 'Sign up']);
  });

  it('should have banner', async () => {
    const brandNameText = await homePage.banner.getBrandNameText();
    expect(brandNameText).to.eq('conduit');

    const brandDescriptionText = await homePage.banner.getBrandDescriptionText();
    expect(brandDescriptionText).to.eq('A place to share your knowledge.');
  });

  it('should not have your feed', async () => {
    const isYourFeedTabDisplayed = await homePage.yourFeed.isYourFeedTabDisplayed();
    expect(isYourFeedTabDisplayed).to.be.false;
  });

  it('should have global feed', async () => {
    const articlesLength = await homePage.globalFeed.articleBlock.getArticlesLength();
    expect(articlesLength).to.be.greaterThan(0);

    const articlesTitles = await homePage.globalFeed.articleBlock.getArticleTitles();
    expect(articlesTitles).to.include(article.title);
  });

  it('should have popular tags', async () => {
    const popularTagsTitleText = await homePage.popularTags.getPopularTagsTitleText();
    expect(popularTagsTitleText).to.eq('Popular Tags');

    const popularTagsLength = await homePage.popularTags.getPopularTagsLength();
    expect(popularTagsLength).to.be.greaterThan(0);

    const popularTagsTitles = await homePage.popularTags.getPopularTagsTitles();
    article.tagList.forEach((tag) => {
      expect(popularTagsTitles).to.include(tag);
    });
  });

  it('should have footer', async () => {
    const isBrandLogoVisible = await homePage.footer.isBrandLogoDisplayed();
    expect(isBrandLogoVisible).to.be.true;

    const brandLogoLink = await homePage.footer.getBrandLogoLink();
    expect(brandLogoLink).to.eq('/');

    const actualFooterText = await homePage.footer.getFooterText();
    const expectedFooterText = 'An interactive learning project from Thinkster.';
    expect(actualFooterText).to.include(expectedFooterText);
  });
});
