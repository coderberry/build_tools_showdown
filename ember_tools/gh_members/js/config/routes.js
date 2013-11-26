var App = require('./app');

App.Router.map(function() {
  this.resource('organization', { path: '/:organization' }, function() {
    this.route('member', { path: '/:login' });
  });
});

