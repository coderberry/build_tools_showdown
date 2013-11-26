GhMembers.Router.map(function () {
  this.resource('organization', { path: '/:organization' }, function() {
    this.route('member', { path: '/:login' });
  });
});
