import { ChainablePromiseElement } from "webdriverio";
import { AndroidLocator, getLocatorForPlatform, IOSLocator } from "../utils/by";
import { Page } from "./page";

class AlertDialog extends Page {
  get container() {
    return $(
      getLocatorForPlatform({
        androidLocator: AndroidLocator.resourceId("android:id/content"),
        iosLocator: IOSLocator.xpath("//XCUIElementTypeAlert"),
      })
    );
  }

  get alertTitleLabel() {
    return $(
      getLocatorForPlatform({
        androidLocator: AndroidLocator.resourceId("android:id/alertTitle"),
        iosLocator: IOSLocator.xpath('//XCUIElementTypeStaticText[@name="42"]'), //TODO: do not hardode "42" value here
      })
    );
  }

  get alertConfirmationButton() {
    return $(
      getLocatorForPlatform({
        androidLocator: AndroidLocator.resourceId("android:id/button1"),
        iosLocator: IOSLocator.xpath('//XCUIElementTypeButton[@name="OK"]'),
      })
    );
  }

  isDisplayed(): Promise<boolean> {
    return this.waitUntilElementDisplayed(this.container);
  }

  pageTitle(): ChainablePromiseElement<WebdriverIO.Element> {
    return this.alertTitleLabel;
  }

  async clickConfirmButton() {
    await (await this.alertConfirmationButton).click();
  }
}

export default new AlertDialog();
