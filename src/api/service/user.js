import { Axios } from '../../utils/axios';
import { endpoints } from '../endpoints';
import { globalConfig } from '../global';

export class User {
  static async register(user) {
    const { email, password, username } = user;

    const requestBody = {
      user: {
        email,
        password,
        username,
      },
    };

    return await Axios.post(endpoints.user.register, globalConfig.commonHeader, requestBody);
  }

  static async login(user) {
    const { email, password } = user;

    const requestBody = {
      user: {
        email,
        password,
      },
    };

    return await Axios.post(endpoints.user.login, globalConfig.commonHeader, requestBody);
  }

  static async getAuthorizationToken(user) {
    const { email, password } = user;

    const requestBody = {
      user: {
        email,
        password,
      },
    };

    return await Axios.post(endpoints.user.login, globalConfig.commonHeader, requestBody).then((response) => {
      return response.data['user']['token'];
    });
  }
}
