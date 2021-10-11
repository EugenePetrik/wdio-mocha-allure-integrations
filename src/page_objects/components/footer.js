import { logger } from '../../configs';
import { footer } from '../../elements/components/footer';
import { Waiter, Element } from '../../helpers';

export class FooterComponent {
  async waitFooterLoaded() {
    logger.debug('Wait until footer is displayed');
    await Waiter.waitForDisplayed(footer.root);
  }

  async isBrandLogoDisplayed() {
    const isBrandLogoDisplayed = await Element.isDisplayed(footer.brandLogo);
    logger.debug(`Brand logo is ${isBrandLogoDisplayed ? 'visible' : 'not visible'} in footer`);
    return isBrandLogoDisplayed;
  }

  async getBrandLogoLink() {
    const brandLogoLink = await Element.getAttribute(footer.brandLogo, 'href');
    logger.debug(`Brand logo 'href' attribute equals ${brandLogoLink} in footer`);
    return brandLogoLink;
  }

  async getFooterText() {
    const footerText = (await Element.getText(footer.attribution)).trim();
    logger.debug(`Attribution text is ${footerText} in footer`);
    return footerText;
  }
}
