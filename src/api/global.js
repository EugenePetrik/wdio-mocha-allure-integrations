import { env } from '../configs/env';

export const globalConfig = {
  baseUrl: env.API_URL,
  prefixPath: env.API_PREFIX_PATH,
  commonHeader: {
    Accept: 'application/json, text/plain, */*',
    'Content-type': 'application/json;charset=UTF-8',
  },
  authorizationHeader(token) {
    return {
      Authorization: `Token ${token}`,
    };
  },
};
