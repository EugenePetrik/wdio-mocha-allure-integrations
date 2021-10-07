import { Axios } from '../../utils/axios';
import { endpoints } from '../endpoints';
import { globalConfig } from '../global';

export class Article {
  static async getArticle(articleSlug, token) {
    const requestHeaders = Object.assign(globalConfig.commonHeader, globalConfig.authorizationHeader(token));
    return await Axios.get(endpoints.article.getArticle(articleSlug, requestHeaders));
  }

  static async createArticle(article, token) {
    const { title, description, body, tagList } = article;

    const requestHeaders = Object.assign(globalConfig.commonHeader, globalConfig.authorizationHeader(token));

    const requestBody = {
      article: {
        body,
        description,
        tagList,
        title,
      },
    };

    return await Axios.post(endpoints.article.createArticle, requestHeaders, requestBody);
  }

  static async updateArticle(article, articleSlug, token) {
    const { title, description, body, tagList } = article;

    const requestHeaders = Object.assign(globalConfig.commonHeader, globalConfig.authorizationHeader(token));

    const requestBody = {
      article: {
        body,
        description,
        tagList,
        title,
      },
    };

    return await Axios.put(endpoints.article.updateArticle(articleSlug), requestHeaders, requestBody);
  }

  static async addArticleToFavorite(articleSlug, token) {
    const requestHeaders = Object.assign(globalConfig.commonHeader, globalConfig.authorizationHeader(token));
    return await Axios.post(endpoints.article.addArticleToFavorite(articleSlug), requestHeaders);
  }

  static async deleteArticle(articleSlug, token) {
    const requestHeaders = Object.assign(globalConfig.commonHeader, globalConfig.authorizationHeader(token));
    return await Axios.delete(endpoints.article.deleteArticle(articleSlug), requestHeaders);
  }
}
