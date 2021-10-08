import { Timeouts } from '../config/timeout';

export class Waiter {
  static async waitForPageLoading(maxWaitTime = Timeouts.max) {
    try {
      await browser.waitUntil(async () => {
        const state = await browser.execute('return document.readyState;');
        return state === 'complete';
      },
      {
        timeout: maxWaitTime,
      });
    } catch (error) {
      if (error.name === 'TimeoutError') {
        throw new Error('[TimeoutError] Page loading timeout');
      } else {
        throw error;
      }
    }
  }

  static async waitForExist(locator, maxWaitTime = Timeouts.max) {
    try {
      await (await $(locator)).waitForExist({ timeout: maxWaitTime });
    } catch (e) {
      if (e.name === 'TimeoutError') {
        throw new Error(`[TimeoutError] Time for waiting element '${locator}' is out, element still not exist`);
      } else {
        throw e;
      }
    }
  }

  static async waitForDisplayed(locator, maxWaitTime = Timeouts.max) {
    try {
      await (await $(locator)).waitForDisplayed({ timeout: maxWaitTime });
    } catch (e) {
      if (e.name === 'TimeoutError') {
        throw new Error(`[TimeoutError] Time for waiting element '${locator}' is out, element still not enabled`);
      } else {
        throw e;
      }
    }
  }

  static async waitForEnabled(locator, maxWaitTime = Timeouts.max) {
    try {
      await (await $(locator)).waitForEnabled({ timeout: maxWaitTime });
    } catch (e) {
      if (e.name === 'TimeoutError') {
        throw new Error(`[TimeoutError] Time for waiting element '${locator}' is out, element still not displayed`);
      } else {
        throw e;
      }
    }
  }

  static async waitForClickable(locator, maxWaitTime = Timeouts.max) {
    try {
      await (await $(locator)).waitForClickable({ timeout: maxWaitTime });
    } catch (e) {
      if (e.name === 'TimeoutError') {
        throw new Error(`[TimeoutError] Time for waiting element '${locator}' is out, element still not clickable`);
      } else {
        throw e;
      }
    }
  }

  static async waitForElements(elements, maxWaitTime = Timeouts.max) {
    await browser.waitUntil(async () => {
      return (await $$(elements)).length > 0;
    },
    {
      timeout: maxWaitTime,
      timeoutMsg: '[TimeoutError] Time for waiting elements is out, elements are not visible',
    });
  }
}
