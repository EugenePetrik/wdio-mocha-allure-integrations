import { expect } from 'chai';
import { env } from '../../configs';
import { ProfilePage } from '../../page_objects/profile';
import { ApiHelper } from '../../utils/api.helper';
import { user, article } from '../../models';

describe('Favorited articles', () => {
  let profilePage;
  let token;

  before(async () => {
    token = await ApiHelper.createUser(user);
  });

  beforeEach(async () => {
    profilePage = new ProfilePage();
    await ApiHelper.loginToApp(token);
  });

  describe('without articles', () => {
    beforeEach(async () => {
      await profilePage.open(user.username);
      await profilePage.favoritedArticles.clickFavoritedArticlesTab();
      await profilePage.waitProfilePageLoaded();
    });

    it('should not display articles', async () => {
      const articlesEmptyText =
        await profilePage.favoritedArticles.articleBlock.getArticlesEmptyText();
      expect(articlesEmptyText).to.eq('No articles are here... yet.');
    });
  });

  describe('with articles', () => {
    before(async () => {
      const articleSlug = await ApiHelper.createArticle(article, token);
      await ApiHelper.addArticleToFavorite(articleSlug, token);
    });

    beforeEach(async () => {
      await profilePage.open(user.username);
      await profilePage.favoritedArticles.clickFavoritedArticlesTab();
      await profilePage.waitProfilePageLoaded();
    });

    it('should open the page', async () => {
      const { username } = user;

      const isUserImageDisplayed = await profilePage.isUserImageVisible();
      expect(isUserImageDisplayed).to.be.true;

      const getUsername = await profilePage.getUsernameText();
      expect(getUsername).to.eq(username);

      const isEditProfileButtonVisible = await profilePage.isEditProfileButtonVisible();
      expect(isEditProfileButtonVisible).to.be.true;

      const pageUrl = await profilePage.getPageUrl();
      expect(pageUrl).to.eq(`${env.APP_URL}/@${username}/favorites`);

      const pageTitle = await profilePage.getPageTitle();
      expect(pageTitle).to.eq('Conduit');
    });

    it('should display articles', async () => {
      const articlesLength = await profilePage.favoritedArticles.articleBlock.getArticlesLength();
      expect(articlesLength).to.eq(1);

      const articlesTitles = await profilePage.favoritedArticles.articleBlock.getArticleTitles();
      expect(articlesTitles).to.eql([article.title]);
    });
  });
});
