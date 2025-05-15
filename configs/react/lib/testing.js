'use strict';

import testingLibraryPlugin from 'eslint-plugin-testing-library';

export default {
  plugins: {
    'testing-library': testingLibraryPlugin,
  },
  rules: testingLibraryPlugin.configs.react.rules,
  env: {
    jest: true,
  },
};
