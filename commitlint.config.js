module.exports = {
  extends: [
    "@commitlint/config-conventional"
  ],
  rules: {
    "type-enum": [2, "always", ["feat", "fix", "revert", "config"]], // TODO: Add another keys if needed
  }
};
