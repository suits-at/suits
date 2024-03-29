module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  rules: {
    semi: 'off', // needs to be off in order for the next rule to properly work
    '@typescript-eslint/semi': ['error'],
  },
};
