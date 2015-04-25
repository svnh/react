var keyMirror = require('react/lib/keyMirror');

// Optional: Use keyMirror to mirror keys to values
// Otherwise this would just be an exported object
module.exports = keyMirror({
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  INCREASE_ITEM: 'INCREASE_ITEM',
  DECREASE_ITEM: 'DECREASE_ITEM',
});
