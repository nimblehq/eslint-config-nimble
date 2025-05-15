'use strict';

import prettierPlugin from 'eslint-plugin-prettier';

export default {
  plugins: {
    'prettier': prettierPlugin,
  },
  rules: {
    'prettier/prettier': [
      'error',
      { singleQuote: true, semi: true, trailingComma: 'es5' },
    ],
  },
};
