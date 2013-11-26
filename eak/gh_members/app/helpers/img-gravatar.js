export default Ember.Handlebars.makeBoundHelper(function(gravatarId, size) {
  return new Ember.Handlebars.SafeString(
    '<img src="http://www.gravatar.com/avatar/' + gravatarId + '?s=' + size + '" />'
  );
});