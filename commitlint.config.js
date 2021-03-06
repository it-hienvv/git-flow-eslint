module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', ['a', 'b']],
    'header-max-length': [2, 'always', 99],
    'footer-leading-blank': [2, 'always', 99],
    'scope-case': [2, 'always', 'lower-case'],
  },
};
