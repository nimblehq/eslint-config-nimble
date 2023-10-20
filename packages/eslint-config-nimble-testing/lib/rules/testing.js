'use strict';

module.exports = {
  plugins: ['jest'],
  overrides: [
    {
      files: 'src/**/*.test.[jt]s?(x)',
      extends: ['plugin:jest/recommended', 'plugin:jest/style'],
      env: {
        jest: true,
      },
    },
  ],
};
