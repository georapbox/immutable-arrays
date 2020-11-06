module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true
  },
  parserOptions: {
    ecmaVersion: 9,
    sourceType: 'module',
    allowImportExportEverywhere: true
  },
  extends: [
    'eslint:recommended'
  ],
  rules: {
    'indent': ['warn', 2, { 'SwitchCase': 1 }],
    'eqeqeq': ['error', 'always', { 'null': 'ignore' }]
  }
};
