import { cleanEnv, str, url } from 'envalid';

export const env = cleanEnv(process.env, {
  APP_URL: url({
    default: 'https://demo.learnwebdriverio.com',
    desc: 'App URL to be tested',
  }),
  API_URL: url({
    default: 'https://conduit-api.learnwebdriverio.com',
    desc: 'App API to be tested',
  }),
  API_PREFIX_PATH: str({
    default: '/api',
    desc: 'Prefix part in url path to be prepended to all requests',
  }),
});
