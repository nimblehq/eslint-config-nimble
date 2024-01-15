/**
 * @fileoverview eslint typescript config
 * @author Nimble
 */
'use strict';

module.exports = {
  extends: ['./rules/base', './rules/typescript'].map(require.resolve),
  rules: {},
};
