import Member from 'appkit/models/member';

var OrganizationMemberRoute = Ember.Route.extend({
  setupController: function(controller, context) {
    var login = context.login;
    controller.set('model', Member.find(login));
  }
});

export default OrganizationMemberRoute;

