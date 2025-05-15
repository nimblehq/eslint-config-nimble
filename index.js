const configs = {
  flat: {
    recommended: {
      plugins: { react: plugin },
      rules: configs.recommended.rules,
      languageOptions: { parserOptions: configs.recommended.parserOptions },
    },
    all: {
      plugins: { react: plugin },
      rules: configs.all.rules,
      languageOptions: { parserOptions: configs.all.parserOptions },
    },
    'jsx-runtime': {
      plugins: { react: plugin },
      rules: configs['jsx-runtime'].rules,
      languageOptions: { parserOptions: configs['jsx-runtime'].parserOptions },
    },
  },
};

const plugin = {
  configs,
};

module.exports = plugin;
