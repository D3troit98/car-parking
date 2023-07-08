import { defineConfig } from "cypress";

export default defineConfig({
  env:{
  NEXT_PUBLIC_BASE_URL : 'http://localhost:3000',
MONGODB_URI  : 'mongodb+srv://lithiumgx:lithiumgx98@cluster0.niazpjl.mongodb.net/?retryWrites=true&w=majority'
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
