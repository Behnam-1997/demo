const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const {createEsbuildPlugin} = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const {addCucumberPreprocessorPlugin} = require("@badeball/cypress-cucumber-preprocessor");

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins : [createEsbuildPlugin(config)]
      });

      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);

      return config
    },
    viewportHeight: 720,
    viewportWidth: 1280,
    specPattern : "cypress/e2e/features/**/*.feature",
    baseUrl: "https://demoqa.com/",
  },
});
