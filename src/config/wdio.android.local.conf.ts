const { config } = require("./wdio.conf");

import { androidDeviceName, androidVersion } from "../../env-variables";

config.port = 4723;

config.services = ["appium"];

config.capabilities = [
  {
    platformName: "Android",
    automationName: "UiAutomator2",
    appiumVersion: "1.22.3",
    browserName: "",
    appPackage: "com.awesomeapp",
    appActivity: "com.awesomeapp.MainActivity",
    platformVersion: androidVersion,
    deviceName: androidDeviceName,
    newCommandTimeout: 30 * 60000,
    app: "./aut/AwesomeApp.apk",
  },
];

exports.config = config;
