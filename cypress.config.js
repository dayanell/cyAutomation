const { defineConfig } = require("cypress");

module.exports = defineConfig({
  //defaultCommandTimeout: 8000,
  projectId: "1t7est",
  env:{
    url: "https://vue-vuex-realworld.netlify.app"
  },
  e2e: {
   
    setupNodeEvents(on, config) {
      
    },
  },
});
