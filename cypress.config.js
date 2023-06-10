const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 60000,
  projectId: "1t7est",
  retries:{
    runMode:1
  },
  env: {
    url: "https://vue-vuex-realworld.netlify.app"
  },
  e2e: {
    setupNodeEvents(on, config) {
      // Add the pageLoadTimeout configuration
      //config.pageLoadTimeout = 30000; // Replace 10000 with your desired timeout in milliseconds

      // Return the modified config object
      return config;
    },
  },
});