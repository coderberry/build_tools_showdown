module.exports = App.ApplicationController = Ember.Controller.extend

  actions: 
    viewOrganization: ->
      @transitionToRoute 'organization', { organization: @get('organization') }
