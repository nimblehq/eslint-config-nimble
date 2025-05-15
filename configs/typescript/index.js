/**
 * @fileoverview eslint typescript config
 * @author Nimble
 */
'use strict';

import coreConfig from '../core';
import typescriptConfig from './lib/typescript.js';

export default [
  {
    ...coreConfig,
    ...typescriptConfig,
    files: ['**/*.ts', '**/*.tsx'],
  },
];
