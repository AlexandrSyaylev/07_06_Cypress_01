const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
      webpackConfig: require("./webpack.config"),
    },
    
  },

  e2e: {
    baseUrl: "http://localhost:3000/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  
  "retries":{
    "runMode": 2,
    "openMode": 0,
  }
  

});
