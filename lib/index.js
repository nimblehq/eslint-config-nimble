/**
 * @fileoverview eslint config
 * @author Nimbl3
 */
"use strict";

module.exports = {
  "parserOptions": {
    "ecmaVersion": 8,
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true,
      "impliedStrict": true
    },
    "sourceType": "module"
  },
  "env": {
    "es6": true,
    "node": true
  },
  "globals": {
    "document": false,
    "navigator": false,
    "window": false
  },
  extends: [
    './rules/base'
  ].map(require.resolve),
  rules: {}
};
