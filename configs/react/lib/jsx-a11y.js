'use strict';

import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';

export default {
  plugins: {
    'jsx-a11y': jsxA11yPlugin,
  },
  rules: jsxA11yPlugin.configs.recommended.rules,
};
