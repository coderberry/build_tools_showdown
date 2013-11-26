module.exports = App.OrganizationRoute = Ember.Route.extend

  setupController: (controller, context) ->
    organizationName = context.organization
    App.Organization.fetch(organizationName).then (org) ->
      Em.run.next this, ->
        org.fetchMembers()
      controller.set "model", org
