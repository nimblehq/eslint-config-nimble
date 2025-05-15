'use strict';

import coreConfig from '@nimblehq/eslint-config-nimble-core';
import typescriptConfig from '@nimblehq/eslint-config-nimble-typescript';

export default {
  ...coreConfig,
  ...typescriptConfig,
  languageOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true,
  },
  rules: {
    // Turn off the 3 following rules based on @typescript-eslint recommendations:
    'no-use-before-define': 'off',
    'no-unused-vars': 'off',
    'no-shadow': 'off',
  },
};
