import { ChainablePromiseElement } from "webdriverio";
import { AndroidLocator, getLocatorForPlatform, IOSLocator } from "../utils/by";
import { Page } from "./page";

class SideMenu extends Page {
  get button() {
    return $("");
  }

  get container() {
    return $(
      getLocatorForPlatform({
        androidLocator: AndroidLocator.resourceId("sidemenu"),
        iosLocator: IOSLocator.accessibilitiId("sidemenu"),
      })
    );
  }

  get sideMenuButton() {
    return $(
      getLocatorForPlatform({
        androidLocator: AndroidLocator.resourceId("sidemenuButton"),
        iosLocator: IOSLocator.accessibilitiId("sidemenuButton"),
      })
    );
  }

  isDisplayed(): Promise<boolean> {
    return this.waitUntilElementDisplayed(this.container);
  }

  pageTitle(): ChainablePromiseElement<WebdriverIO.Element> {
    return this.container.$(
      getLocatorForPlatform({
        androidLocator: AndroidLocator.resourceId("Side menu"),
        iosLocator: IOSLocator.accessibilitiId("Side menu"),
      })
    );
  }

  async clickGetAnswerButton() {
    await this.sideMenuButton.click();
  }
}

export default new SideMenu();
