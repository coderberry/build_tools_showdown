var ApplicationController = Ember.Controller.extend({
  actions: {
    viewOrganization: function() {
      this.transitionToRoute('organization', { organization: this.get('organization') });
    }
  }
});

module.exports = ApplicationController;

