module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', '@ijsto'],
  globals: {
    React: 'writable',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    eqeqeq: 'off',
    'no-console': 'off',
    'no-new-wrappers': 'off',
    'no-param-reassign': 'off',
    'no-shadow': 'off',
    'react/react-in-jsx-scope': 'off',
  },
};
