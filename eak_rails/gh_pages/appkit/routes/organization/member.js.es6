import Member from 'appkit/models/member';

export default Ember.Route.extend({
  setupController: function(controller, context) {
    var login = context.login;
    controller.set('model', Member.find(login));
  }
});
