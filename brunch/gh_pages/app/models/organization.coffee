App.Organization = Ember.Model.extend
  id          : Ember.attr()
  login       : Ember.attr()
  name        : Ember.attr()
  publicRepos : Ember.attr()
  publicGists : Ember.attr()
  members: []
  fetchMembers: ->
    Em.$.ajax
      async: false
      url: "http://sheltered-inlet-5738.herokuapp.com/api/organizations/" + @get("login") + "/members"
      type: "GET"
      context: this
      dataType: "json"
      success: (data) ->
        @set "members", data.members

App.Organization.url = "http://sheltered-inlet-5738.herokuapp.com/api/organizations"
App.Organization.rootKey = "organization"
App.Organization.adapter = Ember.RESTAdapter.create()
App.Organization.camelizeKeys = true

module.exports = App.Organization
