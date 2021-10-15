import { Element } from '../../../helpers';
import { logger } from '../../../configs';
import { home } from '../../../elements/home';

export class PopularTags {
  async getPopularTagsTitleText() {
    const popularTagsTitleText = (await Element.getText(home.popularTags.title)).trim();
    logger.debug(`Popular tags title is ${popularTagsTitleText} on the Home page`);
    return popularTagsTitleText;
  }

  async getPopularTagsLength() {
    const popularTagsLength = await Element.getElementsLength(home.popularTags.tags);
    logger.debug(`Popular tags length is ${popularTagsLength} on the Home page`);
    return popularTagsLength;
  }

  async getPopularTagsTitles() {
    const tagsTitles = await Element.getTextFromElements(home.popularTags.tags);
    logger.debug(`Popular tags titles - ${tagsTitles.join(', ')} on the Home page`);
    return tagsTitles;
  }

  async getPopularTagsEmptyText() {
    const popularTagsEmptyText = (await Element.getText(home.popularTags.emptyText)).trim();
    logger.debug(`Popular tags empty text is ${popularTagsEmptyText} on the Home page`);
    return popularTagsEmptyText;
  }
}
