var Member = Ember.Model.extend({
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
Member.url = 'http://sheltered-inlet-5738.herokuapp.com/api/members';
Member.rootKey = 'member';
Member.adapter = Ember.RESTAdapter.create();
Member.camelizeKeys = true;

module.exports = Member;
