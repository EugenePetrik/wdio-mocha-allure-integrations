import { logger } from '../configs';
import { Browser, Waiter } from '../helpers';
import { FooterComponent, NavBarComponent } from './components';

export class BasePage {
  navBar = new NavBarComponent();
  footer = new FooterComponent();

  async open(path) {
    await Browser.url(path);
    await Waiter.waitForPageLoading();
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
    return pageTitle;
  }

  async refreshCurrentPage() {
    logger.debug('Refresh the current page');
    await Browser.refresh();
    await Waiter.waitForPageLoading();
  }
}
