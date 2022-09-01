import { ChainablePromiseElement } from "webdriverio";
import { AndroidLocator, getLocatorForPlatform, IOSLocator } from "../utils/by";
import { Page } from "./page";

class TabBarPage extends Page {
  pageTitle(): ChainablePromiseElement<WebdriverIO.Element> {
    throw new Error("Method not implemented.");
  }

  isDisplayed(): Promise<boolean> {
    return (
      this.waitUntilElementDisplayed(this.settingsTab) &&
      this.waitUntilElementDisplayed(this.dashBoardTab) &&
      this.waitUntilElementDisplayed(this.instructionsTab)
    );
  }

  private get settingsTab() {
    return $(
      getLocatorForPlatform({
        androidLocator: AndroidLocator.resourceId("Settings tab"),
        iosLocator: IOSLocator.accessibilitiId("Settings tab"),
      })
    );
  }

  private get dashBoardTab() {
    return $(
      getLocatorForPlatform({
        androidLocator: AndroidLocator.resourceId("Dashboard tab"),
        iosLocator: IOSLocator.accessibilitiId("Dashboard tab"),
      })
    );
  }

  private get instructionsTab() {
    return $(
      getLocatorForPlatform({
        androidLocator: AndroidLocator.resourceId("Instructions tab"),
        iosLocator: IOSLocator.accessibilitiId("Instructions tab"),
      })
    );
  }

  public async tapSettingsTab() {
    this.settingsTab.click();
  }

  public async tapDashBoardTab() {
    this.dashBoardTab.click();
  }

  public async tapInstructionsTab() {
    this.instructionsTab.click();
  }
}

export default new TabBarPage();
