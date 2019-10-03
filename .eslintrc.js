module.exports = {
  'env': {
      'browser': true,
      'es6': true,
      'node': true,
      'jest': true
  },
  "extends": [
      "eslint:recommended",
      "plugin:react/recommended"
  ],
  'parser': 'babel-eslint',
  'parserOptions': {
      'ecmaVersion': 2018,
      'sourceType': 'module'
  },
  'plugins': [
      'babel',
      'react-hooks'
  ],
  'rules': {
      'array-bracket-spacing': ['error', 'never'],
      'babel/semi': 1,
      'block-spacing': 'error',
      'brace-style': 'error',
      'comma-spacing': 'error',
      'computed-property-spacing': ['error', 'never'],
      'curly': 'error',
      'default-case': 'error',
      'eqeqeq': 'error',
      'func-call-spacing': ['error', 'never'],
      "jsx-quotes": ["error", "prefer-single"],
      'indent': ['error', 4],
      'no-extra-semi': 'error',
      'no-multi-spaces': 'error',
      'no-var': 'error',
      'object-curly-spacing': ['error', 'always'],
      'padding-line-between-statements': [
          'error',
          { 'blankLine': 'always', 'prev': 'function', 'next': '*' },
          { 'blankLine': 'always', 'prev': ['const', 'let', 'var'], 'next': '*' },
          { 'blankLine': 'any', 'prev': ['const', 'let', 'var'], 'next': ['const', 'let', 'var'] },
      ],
      'prefer-const': 'error',
      'quotes': ['error', 'single'],
      'semi': ['error', 'always'],
      'space-in-parens': ['error', 'never'],
      'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
      'no-case-declarations': 'off'
  },
  'settings': {
      'react': {
          'version': 'detect'
      }
  }
};
