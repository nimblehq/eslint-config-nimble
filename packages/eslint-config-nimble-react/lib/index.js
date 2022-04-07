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
  ].map(require.resolve),
  rules: {},
};
