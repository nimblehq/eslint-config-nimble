'use strict';

module.exports = {
  plugins: ['testing-library'],
  overrides: [
    {
      files: 'src/**/*.test.[jt]s?(x)',
      extends: ['plugin:testing-library/react'],
      env: {
        jest: true,
      },
    },
  ],
};
