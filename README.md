# jalapeno - cross-platform testing POC

**Tech stack:**

- [Appium](https://appium.io/)
- [WebdriverIO](https://webdriver.io/)

**How to execute the tests:**

1. Make sure you're using node 16 or higher. If you're using nvm, execute command `nvm use 16`
2. Install the dependencies: `npm install`
3. In `.env` file, make sure you set the required data: platformName, Android/iOS device and BrowserStack info (if running the test remotely)

Before proceeding further, **==>>> DO NOT FORGET TO SET THE `platformName` to iOS/Android in `.env` file. This is needed to properly set the locators to the coresponding platform<<<==**

- **android local**: `npm run test.android.local`
- **android remote**: `npm run test.android.remote`. **NOTE:** we have the tests executed succesfully: https://app-automate.browserstack.com/dashboard/v2/public-build/Z0dYWHA3eFJYaHU4QlpaR0NwYm45ZVpUOXMzUjRaYjErWlZRdmFSVzJXcS9wNTMxbVRNUm9HcnR5K09HQ204bzFRNlVONnhOQm1vNERuQXY5VXhLM1E9PS0tVHZqRE41QVpvS2dCME1xbHpOWXNQZz09--5d220b73978e05ed760deffa5c9a1a73d42dd6ad

- **iOS local**: `npm run test.ios.local`
- **iOS remote**: `npm run test.ios.remote` - this was not tested on BrowserStack due to the fact that we need an `.ipa` file to upload on their website

**Reporting:**
Allure reports are automatically generated in XML format. To generate them in HTML, you can simply run `allure-generate-html`.

**What's next?**

- run the iOS tests on BrowserStack;

- Implement a mechanism similar to [Java-Client](https://github.com/appium/java-client) which allows us to easily identify elements for both iOS and Android platforms;

- Link tests to TestRail / Jira testcases and upload the reports on a testrun.
