var GhMembers = window.GhMembers = Ember.Application.create({
  LOG_TRANSITIONS: true
});

/* Order and include as you please. */
require('scripts/controllers/*');
require('scripts/models/*');
require('scripts/routes/*');
require('scripts/views/*');
require('scripts/helpers/*'); // <-- had to add
require('scripts/router');
