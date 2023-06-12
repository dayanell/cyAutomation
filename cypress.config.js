const { defineConfig } = require("cypress");

module.exports = defineConfig({
  //defaultCommandTimeout: 60000,
  projectId: "1t7est",
  "chromeWebSecurity": false,
  env: {
    url: "https://vue-vuex-realworld.netlify.app",
    "CYPRESS_DISABLE_SOURCE_MAPS": true
  },
  e2e: {
    setupNodeEvents(on, config) {
      // Add the pageLoadTimeout configuration
      //config.pageLoadTimeout = 20000; // Replace 10000 with your desired timeout in milliseconds

      // Return the modified config object
      return config;
    },
  },
});