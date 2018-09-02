const getReSource = require('../getReSource');

module.exports = (separator, dataType, index) => ({
  separator: getReSource(separator),
  dataType,
  index,
});
