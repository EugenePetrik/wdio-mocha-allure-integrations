export class Browser {
  static async url(path) {
    await browser.url(path);
  }

  static async refresh() {
    await browser.refresh();
  }

  static async baseUrl() {
    return await browser.options.baseUrl;
  }

  static async getUrl() {
    return await browser.getUrl();
  }

  static async getTitle() {
    return await browser.getTitle();
  }

  static async pause(miliseconds) {
    await browser.pause(miliseconds);
  }
}
