const { defineConfig } = require("cypress");
//const { pluginsyntax } = require("@babel/plugin-syntax-import-attributes")

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://econsole-t1-arrival-west.integ.lab',
    setupNodeEvents(on,config) {

      return config
    },
    supportFile: 'cypress/support/e2e.js'
  },
  env:{
    username: 'Sup01',
    pw: 'P@ssw0rd',
  },
});
