module.exports = (actions, type) => ({
  rulesFromActions: true,
  actions: Array.isArray(actions) ? actions : [actions],
  type,
});
