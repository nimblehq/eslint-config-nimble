/**
 * @fileoverview eslint testing config
 * @author Nimble
 */
'use strict';

import coreConfig from '../../core';
import typescriptConfig from '../../typescript';
import jestConfig from './lib/jest';

export default [
  {
    ...coreConfig,
    ...typescriptConfig,
    ...jestConfig,
  },
];