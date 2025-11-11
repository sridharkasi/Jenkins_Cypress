const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // ✅ Reporter must be at the ROOT level (not inside e2e)
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: true,
    json: true
  },

  e2e: {
    baseUrl: "https://example.cypress.io",
    defaultCommandTimeout: 120000, // 120s
    pageLoadTimeout: 120000,
    specPattern: "cypress/e2e/**/*.cy.js",
    setupNodeEvents(on, config) {
      return config;
    },
  },
});
