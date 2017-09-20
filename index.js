"format cjs";

var engine = require('./engine');
var conventionalCommitTypes = require('conventional-commit-types');
var types = conventionalCommitTypes.types;
types.theming = {
  description: "Updates to CSS or HTML markup",
  title: "Theming"
};

module.exports = engine({
  types: types
});
