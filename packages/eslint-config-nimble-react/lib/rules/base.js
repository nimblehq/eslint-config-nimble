'use strict';

module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true,
  },
  extends: [
    '@nimblehq/eslint-config-nimble-core',
    '@nimblehq/eslint-config-nimble-typescript',
  ],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    // Turn off the 3 following rules based on @typescript-eslint recommendations:
    'no-use-before-define': 'off',
    'no-unused-vars': 'off',
    'no-shadow': 'off',
  },
};
