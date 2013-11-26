sysPath = require 'path'

environment = process.env.BRUNCH_ENV ? 'development'

console.log "Running Brunch in #{environment} environment"

exports.config =
  paths:
    watched: ['app', 'test', 'vendor', 'config', 'bower_components']
  files:
    javascripts:
      joinTo:
        'javascripts/app.js':
          new RegExp("^(app|config/environments/#{environment}\.coffee)")
        'javascripts/vendor.js':
          new RegExp("^(bower_components|vendor/(scripts|ember/#{environment}))")
      order:
        before: [
          'vendor/scripts/console-polyfill.js'
          'vendor/scripts/jquery.js'
          'vendor/scripts/lodash.js'
          'vendor/scripts/handlebars.js'
          "vendor/ember/#{environment}/ember.js"
          # "vendor/ember/#{environment}/ember-data.js"  # <-- uncomment if using Ember Data
          "vendor/ember/#{environment}/ember-model.js" # <-- uncomment if using Ember Model
          # Anything else that depends on Ember
        ]

    stylesheets:
      joinTo:
        'stylesheets/app.css': /^(app|vendor)/
      order:
        before: [
          # Place bower imported css stylesheets here
        ]

    templates:
      precompile: true
      root: 'templates'
      joinTo: 'javascripts/app.js' : /^app/

  # allow _ prefixed templates so partials work
  conventions:
    ignored: (path) ->
      startsWith = (string, substring) ->
        string.indexOf(substring, 0) is 0
      sep = sysPath.sep
      if path.indexOf("app#{sep}templates#{sep}") is 0
        false
      else
        startsWith sysPath.basename(path), '_'

  overrides:
    production:
      optimize: true
      sourceMaps: false
      plugins: autoReload: enabled: false
