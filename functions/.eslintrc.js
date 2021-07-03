module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    browser: true,
    jquery: true,
    document: true
  },
  extends: ["eslint:recommended", "google"],
  rules: {
    quotes: ["error", "double"]
  }
};
