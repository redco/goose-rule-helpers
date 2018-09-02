const getReSource = require('../getReSource');

module.exports = (re, to) => ({
  re: getReSource(re),
  to,
});
