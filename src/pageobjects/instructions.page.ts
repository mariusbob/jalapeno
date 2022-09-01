import { ChainablePromiseElement } from "webdriverio";
import { AndroidLocator, getLocatorForPlatform, IOSLocator } from "../utils/by";
import { Page } from "./page";

class InstructionsPage extends Page {
  get instructionsView() {
    return $(
      getLocatorForPlatform({
        androidLocator: AndroidLocator.resourceId("instructions"),
        iosLocator: IOSLocator.accessibilitiId("Testing instructions"),
      })
    );
  }

  pageTitle(): ChainablePromiseElement<WebdriverIO.Element> {
    return this.instructionsView.$(
      getLocatorForPlatform({
        androidLocator: AndroidLocator.text("Testing instructions"),
        iosLocator: IOSLocator.accessibilitiId("Testing instructions"),
      })
    );
  }

  isDisplayed(): Promise<boolean> {
    return this.waitUntilElementDisplayed(this.instructionsView);
  }
}

export default new InstructionsPage();
