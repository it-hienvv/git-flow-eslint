module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', ['a', 'b']],
    'header-max-length': [2, 'always', 100],
    'footer-leading-blank': [2, 'always', 100],
    'scope-case': [2, 'always'],
  },
};
