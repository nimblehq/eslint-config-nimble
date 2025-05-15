/**
 * @fileoverview eslint react config
 * @author Nimble
 */
'use strict';

import baseConfig from './lib/base.js';
import jsxA11yConfig from './lib/jsx-a11y.js';
import reactConfig from './lib/react.js';
import testingConfig from './lib/testing.js';
import prettierConfig from './lib/prettier.js';

export default [
  {
    ...baseConfig,
    ...jsxA11yConfig,
    ...reactConfig,
    ...prettierConfig,
    files: ['**/*.tsx', '**/*.jsx'],
  },
  {
    ...testingConfig,
    files: ['**/*.test.tsx', '**/*.test.jsx'],
  },
];
