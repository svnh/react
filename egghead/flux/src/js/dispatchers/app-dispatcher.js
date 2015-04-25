var Dispatcher = require('./dispatcher.js');
var merge =  require('lodash').assign;

var AppDispatcher = merge(Dispatcher.prototype, {
  handleViewAction: function(action){
    this.dispatch({
      source: 'VIEW_ACTION',
      action:action
    })
  }
})

module.exports = AppDispatcher;
