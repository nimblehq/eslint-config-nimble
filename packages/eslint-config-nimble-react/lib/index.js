/**
 * @fileoverview eslint react config
 * @author Nimble
 */
'use strict';

module.exports = {
  extends: [
    '@nimblehq/eslint-config-nimble',
  ].map(require.resolve),
};
