module.exports = App.OrganizationMemberRoute = Ember.Route.extend
  
  setupController: (controller, context) ->
    login = context.login
    controller.set "model", App.Member.find(login)
