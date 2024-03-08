module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs'
  ],
  // add your custom rules here
  rules: {
    'vue/html-closing-bracket-newline': ['error', {
      'singleline': 'never',
      'multiline': 'never',
    }],
    'vue/no-v-html': ['0'],
    'comma-dangle': ['0', 'always-multiline'],
    'semi': ['0', 'always'],
    'space-before-function-paren': ['0', 'always'],
    'no-console': ['0'],
  }
}
