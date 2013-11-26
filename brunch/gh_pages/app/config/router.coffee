module.exports = App.Router.map ->
  @resource 'organization', { path: '/:organization' }, ->
    @route 'member', { path: '/:login' }