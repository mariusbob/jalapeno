import { platformName } from "../../env-variables";

export interface Locator {
  iosLocator: string;
  androidLocator: string;
}

export interface By {}

export abstract class AndroidLocator implements By {
  static resourceId(resourceId: string) {
    return `android=new UiSelector().resourceId("${resourceId}")`;
  }

  static text(text: string) {
    return `android=new UiSelector().text("${text}")`;
  }
}

export abstract class IOSLocator implements By {
  static accessibilitiId(identifier: string) {
    return `~${identifier}`;
  }

  static xpath(xpath: string) {
    return xpath;
  }
}

/**
 *
 * @param locator used for identifying a UI element
 * @returns a string that will used as a final selector to hook the element on the UI
 */
export const getLocatorForPlatform = (locator: Locator): string => {
  return platformName.toLocaleLowerCase() === "android"
    ? locator.androidLocator
    : locator.iosLocator;
};
