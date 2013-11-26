App.Member = Ember.Model.extend
  id          : Ember.attr()
  login       : Ember.attr()
  gravatarId  : Ember.attr()
  name        : Ember.attr()
  blog        : Ember.attr()
  publicRepos : Ember.attr()
  publicGists : Ember.attr()
  following   : Ember.attr()
  followers   : Ember.attr()
  
App.Member.url = "http://sheltered-inlet-5738.herokuapp.com/api/members"
App.Member.rootKey = "member"
App.Member.adapter = Ember.RESTAdapter.create()
App.Member.camelizeKeys = true

module.exports = App.Member

