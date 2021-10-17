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
  }),
  RP_UIID: str({
    default: '00000000-0000-0000-0000-00000000000',
    desc: 'Report Portal UIID',
  }),
  RP_ENDPOINT: url({
    default: 'http://localhost:8080/api/v1',
    desc: 'Report Portal endpoint',
  }),
  RP_LAUNCH: str({
    default: 'TEST_EXAMPLE',
    desc: 'Report Portal launch',
  }),
  RP_PROJECT: str({
    default: 'TEST_EXAMPLE',
    desc: 'Report Portal project',
  }),
  RP_CONF_PROTOCOL: str({
    default: 'http',
    desc: 'Report Portal configuration protocol',
  }),
  RP_CONF_HOST: str({
    default: '127.0.0.1',
    desc: 'Report Portal configuration host',
  }),
  RP_CONF_PORT: str({
    default: '8080',
    desc: 'Report Portal configuration port',
  }),
  RP_CONF_USERNAME: str({
    default: 'username',
    desc: 'Report Portal username',
  }),
  RP_CONF_PASSWORD: str({
    default: 'password',
    desc: 'Report Portal user password',
  }),
});
