module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', ['a', 'b']],
    'subject-empty': [2, 'always'],
  },
};
