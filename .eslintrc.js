module.exports = {
  'settings': {
    'react': {
      'version': 'latest',
    },
  },
  'env': {
    'browser': true,
    'commonjs': true,
    'es2021': true,
    'jest/globals': true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',    
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 12,
  },
  'plugins': [
    'react',
    'jest'
  ],
  'rules': {
    'react/jsx-uses-vars': 'error',
    'react/jsx-uses-react': 'error',
    'no-unused-vars': 0,
    'no-useless-escape': 0,
  }
};