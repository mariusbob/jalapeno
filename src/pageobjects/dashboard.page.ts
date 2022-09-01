import { ChainablePromiseElement } from "webdriverio";
import { AndroidLocator, getLocatorForPlatform, IOSLocator } from "../utils/by";
import { Page } from "./page";

class DashBoardPage extends Page {
  pageTitle(): ChainablePromiseElement<WebdriverIO.Element> {
    return $(
      getLocatorForPlatform({
        androidLocator: AndroidLocator.resourceId("dashboard-title"),
        iosLocator: IOSLocator.accessibilitiId("dashboard-title"),
      })
    );
  }

  isDisplayed(): Promise<boolean> {
    return this.waitUntilElementDisplayed(this.pageTitle());
  }
}

export default new DashBoardPage();
