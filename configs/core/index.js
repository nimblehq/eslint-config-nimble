/**
 * @fileoverview eslint config
 * @author Nimble
 */

import baseConfig from './lib/base.js';
import importConfig from './lib/import.js';
import prettierConfig from './lib/prettier.js';

export default [
  {
    ...baseConfig,
    ...importConfig,
    ...prettierConfig,
    languageOptions: {
      ecmaVersion: 'laterst',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
          impliedStrict: true,
        },
      },
    },
    env: {
      es6: true,
      node: true,
    },
    globals: {
      document: false,
      navigator: false,
      window: false,
    },
    files: ['**/*.js', '**/*.jsx'],
  },
];
