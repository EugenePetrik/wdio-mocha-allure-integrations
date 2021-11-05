import { config } from './wdio.shared.conf';
import { env } from './env';

// Test Rail dependencies
import testrailUtil from 'wdio-wdiov5testrail-reporter/lib';

// Slack dependencies
import slack from 'wdio-slack-service';

// Report Portal dependencies
import reportportal from 'wdio-reportportal-reporter';
import RpService from 'wdio-reportportal-service';
import { RPconf } from './report.portal.conf';

// ============
// Capabilities
// ============

config.capabilities = [
  {
    maxInstances: 1,
    browserName: 'chrome',
    browserVersion: 'latest',
    'goog:chromeOptions': {
      args: ['--no-sandbox', '--disable-infobars', '--disable-web-security', '--headless'],
      prefs: {
        'profile.managed_default_content_settings.popups': 1,
        'profile.managed_default_content_settings.notifications': 1,
      },
    },
    acceptInsecureCerts: true,
  },
];

// ========
// Services
// ========

config.services = config.services.concat([
  slack,
  {
    webHookUrl: env.SLACK_WEB_HOOK_URL,
    notifyOnlyOnFailure: false,
    messageTitle: 'Webdriver IO Slack Reporter',
  },
]);

config.services = config.services.concat([RpService, {}]);

// ========
// Reporters
// ========

config.reporters = config.reporters.concat([
  'wdiov5testrail',
  {
    domain: env.TEST_RAIL_DOMAIN,
    username: env.TEST_RAIL_USERNAME,
    password: env.TEST_RAIL_PASSWORD,
    projectId: env.TEST_RAIL_PROJECT_ID,
    suiteId: env.TEST_RAIL_SUITE_ID,
    useLatestRunId: false,
    includeAll: true,
  },
]);

config.reporters = config.reporters.concat([reportportal, RPconf]);

// =====
// Hooks
// =====

config.beforeSession = async (config, capabilities, specs, cid) => {
  await testrailUtil.startup();
};

config.onComplete = async (exitCode, conf, capabilities, results) => {
  await testrailUtil.cleanup(conf);
};

exports.config = config;
