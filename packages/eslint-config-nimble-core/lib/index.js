/**
 * @fileoverview eslint config
 * @author Nimble
 */
'use strict';

module.exports = {
  parserOptions: {
    ecmaVersion: 9,
    ecmaFeatures: {
      jsx: true,
      impliedStrict: true,
    },
    sourceType: 'module',
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
  extends: [
    './rules/base',
    './rules/import',
    './rules/prettier', // prettiter must be the last one
  ].map(require.resolve),
  rules: {},
};
