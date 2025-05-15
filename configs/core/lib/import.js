'use strict';

import importPlugin from 'eslint-plugin-import';

export default {
  plugins: {
    'import': importPlugin,
  },
  rules: {
    ...importPlugin.configs.recommended.rules,
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal'],
        pathGroups: [
          {
            pattern: 'react*',
            group: 'external',
            position: 'before',
          },
          {
            pattern: 'css/*|*.scss|*.svg|.png',
            group: 'internal',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'import/extensions': [
      'error',
      'never',
      {
        scss: 'always',
        svg: 'always',
        png: 'always',
        json: 'always',
        spec: 'always',
      },
    ],
  },
};
