Ember.Handlebars.helper 'gravatar', (gravatarId, size) ->
  new Ember.Handlebars.SafeString('<img src="http://www.gravatar.com/avatar/' + gravatarId + '?s=' + size + '" />')
