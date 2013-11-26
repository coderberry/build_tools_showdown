var OrganizationMemberRoute = Ember.Route.extend({
  setupController: function(controller, context) {
    var login = context.login;
    controller.set('model', App.Member.find(login));
  }
});

module.exports = OrganizationMemberRoute;

