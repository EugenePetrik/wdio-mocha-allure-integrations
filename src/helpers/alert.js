export class Alert {
  static async acceptAlert() {
    try {
      await browser.acceptAlert();
    } catch (e) {
      return e.message;
    }
  }

  static async dismissAlert() {
    try {
      await browser.dismissAlert();
    } catch (e) {
      return e.message;
    }
  }
}
