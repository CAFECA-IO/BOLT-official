const path = require("path");

module.exports = {
  i18n: {
    defaultLocale: "zh-TW",
    locales: ["zh-TW", "en", "zh-CN"],
  },
  localePath: path.resolve("./src/locales"),
};
