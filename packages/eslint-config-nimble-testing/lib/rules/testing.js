'use strict';

module.exports = {
  plugins: ['jest', 'cypress'],
  overrides: [
    {
      files: 'src/**/*.test.[jt]s?(x)',
      extends: ['plugin:jest/recommended', 'plugin:jest/style'],
      env: {
        jest: true,
      },
    },
    {
      files: 'cypress/**/*.[jt]s',
      extends: ['plugin:cypress/recommended'],
    },
  ],
};
