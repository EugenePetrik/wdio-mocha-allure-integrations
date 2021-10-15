import { logger } from '../../configs';
import { navBar } from '../../elements/components/nav.bar';
import { Waiter, Element } from '../../helpers';

export class NavBarComponent {
  async waitNavBarLoaded() {
    logger.debug('Wait until navigation bar is displayed');
    await Waiter.waitForDisplayed(navBar.root);
  }

  async isBrandLogoDisplayed() {
    const isBrandLogoDisplayed = await Element.isDisplayed(navBar.brandLogo);
    logger.debug(`Brand Logo is ${isBrandLogoDisplayed ? 'visible' : 'not visible'} in Navigation bar`);
    return isBrandLogoDisplayed;
  }

  async getBrandLogoLink() {
    const brandLogoLink = await Element.getAttribute(navBar.brandLogo, 'href');
    logger.debug(`Brand logo 'href' attribute equals ${brandLogoLink} in Navigation bar`);
    return brandLogoLink;
  }

  async getNavLinksLength() {
    const navLinksLength = await Element.getElementsLength(navBar.links);
    logger.debug(`There are ${navLinksLength} links in Navigation bar`);
    return navLinksLength;
  }

  async getNavLinksText() {
    const navLinksText = await Element.getTextFromElements(navBar.links);
    logger.debug(`Navigation bar links text - ${navLinksText.join(', ')}`);
    return navLinksText;
  }
}
