const { config } = require("./wdio.conf");

import { iOSDeviceName, iOSVersion } from "../../env-variables";

config.port = 4723;

config.services = ["appium"];

config.capabilities = [
  {
    platformName: "iOS",
    automationName: "XCUITest",
    platformVersion: iOSVersion,
    deviceName: iOSDeviceName,
    app: "./aut/AwesomeApp.app",
  },
];

exports.config = config;
