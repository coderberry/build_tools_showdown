GhMembers.OrganizationRoute = Ember.Route.extend({
  setupController: function(controller, context) {
    var organizationName = context.organization;
    GhMembers.Organization.fetch(organizationName).then(function(org) {
      Em.run.next(this, function() { org.fetchMembers(); });
      controller.set('model', org);
    });
  }
});