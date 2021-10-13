import { logger } from '../configs';
import { User, Article } from '../api/service';
import { HomePage } from '../page_objects/home';

export class ApiHelper {
  static async createUser(user) {
    logger.debug(`Sign up user via API with - ${JSON.stringify(user)}`);
    
    const { data } = await browser.call(async function () {
      return await User.register(user);
    });
  
    const jwtToken = data['user']['token'];
  
    if (jwtToken) {
      logger.debug(`User JWT Token - ${jwtToken}`);
    } else {
      throw new Error('Did not receive user JWT Token in response');
    }
  
    return jwtToken;
  }

  static async signInUser(user) {
    logger.debug(`Sign in user via API with - ${JSON.stringify(user)}`);
  
    const { data } = await browser.call(async function () {
      return await User.login(user);
    });
  
    const jwtToken = data['user']['token'];
  
    if (jwtToken) {
      logger.debug(`User JWT Token - ${jwtToken}`);
    } else {
      throw new Error('Did not receive user JWT Token in response');
    }
  
    return jwtToken;
  }

  static async loginToApp(token) {
    logger.debug('Open Home page');
  
    const homePage = new HomePage();
    await homePage.open();
  
    logger.debug('Add JWT Token to Local Storage');
  
    await browser.execute(function (key, value) {
      window.localStorage.setItem(key, value);
    },'id_token', token);
  
    logger.debug('Reload the page after adding the JWT Token');
  
    await homePage.refreshCurrentPage();
    await homePage.waitHomePageLoaded();
  }

  static async createArticle(article, token) {
    logger.debug(`Create a new article via API with - ${JSON.stringify(article)}`);
    const { data } = await browser.call(async function () {
      return await Article.createArticle(article, token);
    });
  
    const articleSlug = data['article']['slug'];
  
    if (articleSlug) {
      logger.debug(`Article slug is ${articleSlug}`);
    } else {
      throw new Error('Did not receive the article slug in response');
    }
  
    return articleSlug;
  }
  
  static async addArticleToFavorite(articleSlug, token) {
    logger.debug('Add an article to favorite');
    await browser.call(async function () {
      return await Article.addArticleToFavorite(articleSlug, token);
    });
  }
}
