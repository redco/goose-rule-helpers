module.exports = (scope, useActionsResultOrText) => ({
  scope,
  useActionsResult: typeof useActionsResultOrText === 'boolean' ? useActionsResultOrText : false,
  text: typeof useActionsResultOrText === 'string' ? useActionsResultOrText : undefined,
});
