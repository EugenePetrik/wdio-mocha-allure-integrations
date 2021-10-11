import { Element } from '../../../helper';
import { logger } from '../../../configs/';
import { home } from '../../../elements/home';

export class Banner {
  async getBrandNameText() {
    const brandNameText = (await Element.getText(home.banner.name)).trim();
    logger.debug(`Brand name is ${brandNameText} on the Home page`);
    return brandNameText;
  }

  async getBrandDescriptionText() {
    const brandDescriptionText = (await Element.getText(home.banner.description)).getText();
    logger.debug(`Brand description is ${brandDescriptionText} on the Home page`);
    return brandDescriptionText;
  }
}
