const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

const dotenv = require("dotenv");

dotenv.config();

module.exports = defineConfig({
  e2e: {
    specPattern: "**/*.feature",
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
    },
    baseUrl: process.env.HOST || "http://localhost:3000",
    defaultCommandTimeout: 10000,
    requestTimeout: 15000, 
    responseTimeout: 15000,
  },
});
