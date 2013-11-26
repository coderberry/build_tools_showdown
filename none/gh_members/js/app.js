App = Ember.Application.create({
  LOG_TRANSITIONS: true
});

App.Router.map(function() {
  this.resource('organization', { path: '/:organization' }, function() {
    this.route('member', { path: '/:login' });
  });
});

// Helpers -------
Ember.Handlebars.helper('gravatar', function(gravatarId, size) {
  return new Handlebars.SafeString(
    '<img src="http://www.gravatar.com/avatar/' + gravatarId + '?s=' + size + '" />'
  );
});

// Models --------------------------------------------------------
App.Organization = Ember.Model.extend({
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
App.Organization.url = 'http://sheltered-inlet-5738.herokuapp.com/api/organizations';
App.Organization.rootKey = 'organization';
App.Organization.adapter = Ember.RESTAdapter.create();
App.Organization.camelizeKeys = true;

App.Member = Ember.Model.extend({
  id:          Ember.attr(),
  login:       Ember.attr(),
  gravatarId:  Ember.attr(),
  name:        Ember.attr(),
  blog:        Ember.attr(),
  publicRepos: Ember.attr(),
  publicGists: Ember.attr(),
  following:   Ember.attr(),
  followers:   Ember.attr()
});
App.Member.url = 'http://sheltered-inlet-5738.herokuapp.com/api/members';
App.Member.rootKey = 'member';
App.Member.adapter = Ember.RESTAdapter.create();
App.Member.camelizeKeys = true;

// Routes --------------------------------------------------------

App.OrganizationRoute = Ember.Route.extend({
  setupController: function(controller, context) {
    var organizationName = context.organization;
    App.Organization.fetch(organizationName).then(function(org) {
      Em.run.next(this, function() { org.fetchMembers(); });
      controller.set('model', org);
    });
  }
});

App.OrganizationMemberRoute = Ember.Route.extend({
  setupController: function(controller, context) {
    var login = context.login;
    controller.set('model', App.Member.find(login));
  }
});

// Controllers --------------------------------------------------------

App.ApplicationController = Ember.Controller.extend({
  actions: {
    viewOrganization: function() {
      this.transitionToRoute('organization', { organization: this.get('organization') });
    }
  }
});
