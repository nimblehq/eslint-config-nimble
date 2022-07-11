/**
 * @fileoverview eslint react config
 * @author Nimble
 */
'use strict';

module.exports = {
  extends: [
    './rules/base',
    './rules/jsx-a11y',
    './rules/react',
    './rules/testing',
  ].map(require.resolve),
  rules: {},
};
