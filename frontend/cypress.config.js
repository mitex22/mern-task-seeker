import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import { createEsbuildPlugin } from "@badeball/cypress-cucumber-preprocessor/esbuild";

export default defineConfig({
    viewportHeight: 1080,
    viewportWidth: 1920,
    video: false,
    e2e: {
        // baseUrl: "https://mern-task-seeker.vercel.app/",
        baseUrl: "http://localhost:5173/",
        excludeSpecPattern: ['**/1-getting-started', '**/2-advanced-examples'],
        specPattern: [
            'cypress/e2e/**/*.spec.{js,ts,jsx,tsx}',
            'cypress/e2e/**/*.cy.{js,ts,jsx,tsx}',
            'cypress/e2e/**/*.feature'  // Add support for .feature files
        ],
        async setupNodeEvents(on, config) {
            const bundler = createBundler({
                plugins: [createEsbuildPlugin(config)],
            });

            on("file:preprocessor", bundler);

            await addCucumberPreprocessorPlugin(on, config);

            return config;
        },
        env: {
            // Configure tags to exclude
            tags: "not @ignore and not @skip"
        },
        defaultCommandTimeout: 10000, // 10 seconds instead of 4
        pageLoadTimeout: 60000,      // Page load timeout
        requestTimeout: 30000,        // API request timeout
        responseTimeout: 30000,      // API response timeout
    },
});
