const { defineConfig } = require("cypress");
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Mochawesome Reporter configuration
      "reporterEnabled"; "mochawesome",
      "mochawesomeReporterOptions"; {
          "reportDir"; "cypress/results/json",  // Reports Path
          "overwrite"; false, // Create a new report
          "html"; false,  
          "json"; true
        }
     }
    },
  });
