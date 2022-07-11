/**
 * @fileoverview eslint config
 * @author Nimbl3
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
    './rules/typescript',
    './rules/import',
    './rules/testing',
    './rules/prettier',
  ].map(require.resolve),
  rules: {},
};
