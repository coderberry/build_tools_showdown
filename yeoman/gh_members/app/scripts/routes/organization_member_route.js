GhMembers.OrganizationMemberRoute = Ember.Route.extend({
  setupController: function(controller, context) {
    var login = context.login;
    controller.set('model', GhMembers.Member.find(login));
  }
});
