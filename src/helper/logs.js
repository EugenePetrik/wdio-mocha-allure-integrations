export class Logs {
  static async getBrowserLogs() {
    return await browser.getLogs('browser');
  }

  static async getInfoLogs() {
    return (await this.getBrowserLogs()).filter((item) => {
      return item.level === 'INFO'; 
    });
  }

  static async getErrorLogs() {
    return (await this.getBrowserLogs()).filter((item) => {
      return item.level === 'SEVERE'; 
    });
  }
}
