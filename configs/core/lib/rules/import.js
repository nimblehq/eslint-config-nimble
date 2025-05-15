'use strict';

module.exports = {
  plugins: ['import'],
  extends: ['plugin:import/recommended'],
  rules: {
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
