module.exports = {
  rules: {
    'type-enum': [
      2,
      'always',
      ['feat', 'bugfix', 'fix', 'refactor', 'style', 'docs', 'chore', 'other'],
    ],
    'scope-enum': [0],
    'type-case': [0],
    'type-empty': [0],
    'scope-empty': [0],
    'scope-case': [0],
    'subject-full-stop': [0, 'never'],
    'subject-case': [0, 'never'],
    'header-max-length': [2, 'always', 72],
  },
}
