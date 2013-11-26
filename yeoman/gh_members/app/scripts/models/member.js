GhMembers.Member = Ember.Model.extend({
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
GhMembers.Member.url = 'http://sheltered-inlet-5738.herokuapp.com/api/members';
GhMembers.Member.rootKey = 'member';
GhMembers.Member.adapter = Ember.RESTAdapter.create();
GhMembers.Member.camelizeKeys = true;