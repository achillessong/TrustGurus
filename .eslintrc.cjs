/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/eslint-config-typescript', '@vue/eslint-config-prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'max-len': [2, { code: 210, tabWidth: 4, ignoreUrls: true }],
    'vue/prop-name-casing': ['error'],
    'vue/multi-word-component-names': 0,
  },
};
