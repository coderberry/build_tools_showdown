require('../vendor/components/lodash/dist/lodash.min');

require('../vendor/jquery');
require('../vendor/handlebars');
require('../vendor/ember');
require('../vendor/components/ember-model/ember-model');
// require('../vendor/ember-data'); // delete if you don't want ember-data

var App = Ember.Application.create();
// App.Store = require('./store'); // delete if you don't want ember-data

module.exports = App;

