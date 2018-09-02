const getReSource = require('../getReSource');

module.exports = (re, index) => ({
  re: getReSource(re),
  index,
});
