/**
 * @fileoverview eslint testing config
 * @author Nimble
 */
'use strict';

module.exports = {
  extends: ['./rules/base', './rules/testing'].map(require.resolve),
  rules: {},
};
