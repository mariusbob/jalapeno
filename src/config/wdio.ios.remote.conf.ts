const { config } = require("./wdio.conf");

import {
  browserStackAccessKey,
  browserStackAppID,
  browserStackUserName,
} from "../../env-variables";

config.services = ["browserstack"];
config.user = browserStackUserName;
config.key = browserStackAccessKey;

config.capabilities = [
  {
    project: "First Webdriverio iOS Project",
    build: "browserstack-build-1",
    name: "single_test",
    device: "iPhone 13 Pro",
    os_version: "15",
    app: browserStackAppID,
    "browserstack.debug": true,
  },
];

exports.config = config;
