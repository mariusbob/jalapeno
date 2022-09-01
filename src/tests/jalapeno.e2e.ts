import { platformName } from "../../env-variables";
import AlertDialogPage from "../pageobjects/alert-dialog.page";
import DashboardPage from "../pageobjects/dashboard.page";
import InstructionsPage from "../pageobjects/instructions.page";
import SettingsPage from "../pageobjects/settings.page";
import SidemenuPage from "../pageobjects/sidemenu.page";
import TabBarPage from "../pageobjects/tab-bar.page";

afterEach(async () => {
  await browser.reloadSession();
});

describe(`Jalapeno testing app. Platform: ${platformName}`, () => {
  it("should load the Settings and Dashboard", async () => {
    console.log("PLATFORMA");
    console.log(platformName);
    await InstructionsPage.isDisplayed();

    await TabBarPage.tapSettingsTab();

    expect(await SettingsPage.isDisplayed()).toBe(true);

    await TabBarPage.tapDashBoardTab();

    expect(await DashboardPage.isDisplayed()).toBe(true);
  });

  it("should swipe right and test the alert dialog", async () => {
    await InstructionsPage.isDisplayed();

    await SettingsPage.openSideMenu();

    await SidemenuPage.isDisplayed();
    await SidemenuPage.clickGetAnswerButton();

    await AlertDialogPage.isDisplayed();
    const alertTitle = await AlertDialogPage.pageTitle().getText();

    expect(alertTitle).toBe("42");

    await AlertDialogPage.clickConfirmButton();
  });

  it("should fail at incorrect alert title", async () => {
    await InstructionsPage.isDisplayed();

    await SettingsPage.openSideMenu();

    await SidemenuPage.isDisplayed();
    await SidemenuPage.clickGetAnswerButton();

    await AlertDialogPage.isDisplayed();
    const alertTitle = await AlertDialogPage.pageTitle().getText();

    expect(alertTitle).toBe("INCORRECT ALLERT TITLE");

    await AlertDialogPage.clickConfirmButton();
  });
});
