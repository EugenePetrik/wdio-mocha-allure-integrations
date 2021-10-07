import { Axios } from '../../utils/axios';
import { endpoints } from '../endpoints';
import { globalConfig } from '../global';

export class Comment {
  static async createComment(articleSlug, comment, token) {
    const { body } = comment;

    const requestHeaders = Object.assign(globalConfig.commonHeader, globalConfig.authorizationHeader(token));

    const requestBody = {
      comment: {
        body,
      },
    };

    return await Axios.post(endpoints.comment.createComment(articleSlug), requestHeaders, requestBody);
  }

  static async deleteComment(articleSlug, commentId, token) {
    const requestHeaders = Object.assign(globalConfig.commonHeader, globalConfig.authorizationHeader(token));
    return await Axios.delete(endpoints.comment.deleteComment(articleSlug, commentId), requestHeaders);
  }
}
