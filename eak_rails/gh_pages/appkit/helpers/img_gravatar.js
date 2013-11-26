Ember.Handlebars.helper('img-gravatar', function(gravatarId, size) {
  return new Handlebars.SafeString(
    '<img src="http://www.gravatar.com/avatar/' + gravatarId + '?s=' + size + '" />'
  );
});
