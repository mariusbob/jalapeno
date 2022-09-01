import { ChainablePromiseElement } from "webdriverio";
import { AndroidLocator, getLocatorForPlatform, IOSLocator } from "../utils/by";
import { Page } from "./page";

class SettingsPage extends Page {
  isDisplayed(): Promise<boolean> {
    return this.waitUntilElementDisplayed(this.pageTitle());
  }

  pageTitle(): ChainablePromiseElement<WebdriverIO.Element> {
    return $(
      getLocatorForPlatform({
        androidLocator: AndroidLocator.resourceId("settings-title"),
        iosLocator: IOSLocator.accessibilitiId("settings-title"),
      })
    );
  }
}

export default new SettingsPage();
