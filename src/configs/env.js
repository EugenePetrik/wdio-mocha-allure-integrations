require('dotenv').config();
import { cleanEnv, email, num, str, url } from 'envalid';

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
  TEST_RAIL_URL: str({
    default: 'https://project.testrail.io/',
    desc: 'TestRail URL',
  }),
  TEST_RAIL_USERNAME: email({
    default: 'example@gmail.com',
    desc: 'TestRail user email',
  }),
  TEST_RAIL_PASSWORD: str({
    default: 'SamplePassword',
    desc: 'TestRail API Key',
  }),
  TEST_RAIL_PROJECT_ID: num({
    default: 1,
    desc: 'TestRail Project ID',
  }),
  TEST_RAIL_SUITE_ID: num({
    default: 1,
    desc: 'TestRail Suite ID',
  }),
  SLACK_WEB_HOOK_URL: str({
    default: 'qwerty',
    desc: 'SLACK Web Hook URL',
  })
});
