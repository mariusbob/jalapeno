import { waitAndAssert } from "../utils/wait";
import { ChainablePromiseElement } from "webdriverio";

/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
export abstract class Page {
  abstract isDisplayed(): Promise<boolean>;

  abstract pageTitle(): ChainablePromiseElement<WebdriverIO.Element>;

  async waitUntilElementDisplayed(
    element: ChainablePromiseElement<WebdriverIO.Element>,
    timeout = 30000,
    message?: string
  ): Promise<boolean> {
    return await waitAndAssert(
      async () => {
        const elem = await element;
        return elem.isDisplayed();
      },
      timeout ? { timeout, interval: 1000 } : null,
      message
    );
  }

  async openSideMenu() {
    const { width, height } = await browser.getWindowSize();
    const pressStartPointX = 0;
    const pressStartPointY = height / 2;
    const moveToX = (width * 75) / 100;

    await browser.touchAction([
      {
        action: "press",
        x: pressStartPointX,
        y: pressStartPointY,
      },
      {
        action: "wait",
        ms: 125,
      },
      {
        action: "moveTo",
        x: moveToX,
        y: pressStartPointY,
      },
      "release",
    ]);
  }
}
