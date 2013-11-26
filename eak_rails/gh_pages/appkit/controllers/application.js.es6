export default Ember.Controller.extend({
  actions: {
    viewOrganization: function() {
      this.transitionToRoute('organization', { organization: this.get('organization') });
    }
  }
});
