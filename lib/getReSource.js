module.exports = re => [re.source, [
  re.global && 'g' || '',
  re.ignoreCase && 'i' || '',
  re.multiline && 'm' || '',
].join('')];
