import { env } from './env';

export const RPconf = {
  reportPortalClientConfig: {
    token: env.RP_UIID,
    endpoint: env.RP_ENDPOINT,
    launch: env.RP_LAUNCH,
    project: env.RP_PROJECT,
    mode: 'DEFAULT',
    debug: false,
    description: 'WDIO-ReportPortal integration test',
    attributes: [{ key: 'tag', value: 'foo' }],
    headers: { foo: 'bar' },
    restClientConfig: {
      proxy: {
        protocol: env.RP_CONF_PROTOCOL,
        host: env.RP_CONF_HOST,
        port: env.RP_CONF_PORT,
        auth: {
          username: env.RP_CONF_USERNAME,
          password: env.RP_CONF_PASSWORD,
        },
      },
      timeout: 60000,
    },
  },
  reportSeleniumCommands: false,
  seleniumCommandsLogLevel: 'debug',
  autoAttachScreenshots: false,
  screenshotsLogLevel: 'info',
  parseTagsFromTestTitle: false,
};
