const { config } = require("./wdio.conf");

import {
  browserStackAccessKey,
  browserStackAppID,
  browserStackUserName,
} from "../../env-variables";

//Browserstack info
config.services = ["browserstack"];
config.user = browserStackUserName;
config.key = browserStackAccessKey;

config.capabilities = [
  {
    platformName: "Android",
    automationName: "UiAutomator2",
    appPackage: "com.awesomeapp",
    appActivity: "com.awesomeapp.MainActivity",
    newCommandTimeout: 30 * 60000,
    app: browserStackAppID,
    project: "Jalapeno",
    build: "jalapeno_v0.0.1",
    name: "jalapeno_local_test",
    device: "Samsung Galaxy S22",
    os_version: "12.0",
  },
];

exports.config = config;
