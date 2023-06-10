const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "zpp7sm",
  env: {
    url: "https://vue-vuex-realworld.netlify.app/#/"
  },
  
  projectId: "zpp7sm",

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/e2e/*.js'
  }
  
});