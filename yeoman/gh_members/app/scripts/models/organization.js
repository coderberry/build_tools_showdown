GhMembers.Organization = Ember.Model.extend({
  id:          Ember.attr(),
  login:       Ember.attr(),
  name:        Ember.attr(),
  publicRepos: Ember.attr(),
  publicGists: Ember.attr(),
  members:     [],

  fetchMembers: function() {
    Em.$.ajax({
      async: false,
      url: 'http://sheltered-inlet-5738.herokuapp.com/api/organizations/' + this.get('login') + '/members',
      type: 'GET',
      context: this,
      dataType: 'json',
      success: function(data) {
        this.set('members', data.members);
      }
    });
  }
});
GhMembers.Organization.url = 'http://sheltered-inlet-5738.herokuapp.com/api/organizations';
GhMembers.Organization.rootKey = 'organization';
GhMembers.Organization.adapter = Ember.RESTAdapter.create();
GhMembers.Organization.camelizeKeys = true;