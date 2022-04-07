/**
 * @fileoverview eslint react config
 * @author Nimble
 */
'use strict';

module.exports = {
  extends: [
    './rules/base',
    './rules/react',
  ].map(require.resolve),
  rules: {},
};
