import { logger } from '../configs';
import { Browser } from '../helper';

export class BasePage {
  async open(path) {
    await Browser.open(path);
  }

  async getBaseUrl() {
    const baseUrl = await Browser.baseUrl();
    logger.debug(`Base URL is ${baseUrl}`);
    return baseUrl;
  }

  async getPageUrl() {
    const pageUrl = await Browser.getUrl();
    logger.debug(`Current page URL is ${pageUrl}`);
    return pageUrl;
  }

  async getPageTitle() {
    const pageTitle = await Browser.getTitle();
    logger.debug(`Page title is '${pageTitle}'`);
  }

  async refreshCurrentPage() {
    logger.debug('Refresh the current page');
    await Browser.refresh();
  }
}
