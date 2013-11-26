# Yet Another Ember Brunch (YAEB)

A [Brunch][] skeleton for rapid [Ember][] development. Including Ember
installation scripts, environment-specific JS builds, generators, and
[Ember.vim][] support.

## Technology

* [Brunch][]
* [Ember][]
* [CoffeeScript][]
* [Less][]
* [Handlebars](http://handlebarsjs.com)
* [HTML5 Boilerplate](http://html5boilerplate.com)
* _Optional_ [Ember Data][]
* _Optional_ [Ember Model][]

## Features

* **Ember Install Script** - [Cakefile scripts](Cakefile) to install the latest
  Ember, Ember Data, and Ember Model.
* **Environments** - Custom code to allow for environment detection
  in the browser and at compile time. Automagically uses Ember's production
  build when in production just like [ember-rails][].
* **Automatic File Loading** - Automatically loads you code, no script tags or
  superfluous requires necessary.
* **[Ember.vim][] support** - Navigate to and create models, controllers,
  templates, and views with ease.

**Brunch Plugins**

* **[auto-reload-brunch][]** - Adds automatic browser reloading support to
  Brunch.
* **[uglify-js-brunch][]** - Adds UglifyJS minification support to Brunch.
* **[gzip-brunch][]** - Automatically generate gzipped versions of your assets
  in your production build.

## Requirements

Before using YAEB with Ember you will need to install [Node][] and
[Brunch][] 1.7 or above.

```
npm install -g brunch
```

## Quick Start

Now that you've got Brunch installed, you're three commands away from a running
Ember app!

```bash
brunch new gh:cavneb/yet-another-ember-brunch <appname>
cd <appname>
cake server
```

Open [`localhost:3333`](http://localhost:3333) and check out your brand new
Ember app! Code changes you make will be automatically loaded in the browser.
Edit [`index_route.coffee`](app/routes/index_route.coffee) to see live-updating
in action.

YAEB runs Ember 1.0 out of the box. You can update to Beta or
Canary builds using the command below. It's also easy to install the latest
Ember Data or Ember Model using the `cake` scripts below.

## Deploying

YAEB comes with a [Mina][] [deployment script][].

1. Install Mina by running `gem install mina`
1. Fill in your credentials in [`config/deploy.rb`][deployment script]
1. Run `mina setup`
1. Run `mina deploy`

## Frequently Asked Questions

See [the FAQ][] in the Wiki.

## Updating Libraries

### Install Latest Ember

YAEB ships with Ember 1.1.2 already installed. You can update to
the latest release from each channel by using the commands below.

```bash
cake ember:install
# cake -t "v1.0.0" ember:install # for v1.0.0 tagged release
# cake -c "beta" ember:install # for beta
# cake -c "canary" ember:install # for canary
```

_Note: `cake ember:list` displays the tagged releases since 1.0.0._

### Install Latest Ember Data Beta

```bash
cake ember-data:install
# cake -t "v1.0.0-beta.3" ember-data:install # for v1.0.0-beta.3 tagged release
# cake -c "canary" ember-data:install # for canary
```

_Note: `cake ember-data:list` displays all tagged releases._

### Install Latest Ember Model

```bash
cake ember-model:install
```

### Install Latest Handlebars

```bash
cake handlebars:install
```

## Generators

This skeleton makes use of [loom][] generators 
to help you create common files quicker.

You can use the following command to generate files.

```
generate component x-buttonset
generate lib book
generate controller users/mini-profile
generate controller application type:array
generate helper capitalize
generate mixin queryable
generate model user name:string age:number
generate route index
generate template profile
generate view index
```

## Compiling for Production

Both the development and production versions of [Ember][] are installed via
the `ember:install` cake task. To compile your project with the production
version of Ember, run the following command:

`cake build`

## Scripts

The following [`cake`](/Cakefile) scripts are provided.

```
cake server                         # start the brunch server in development
cake build                          # build for production (delete public folder first)
cake ember:install                  # install latest Ember
cake -c "beta" ember-data:install   # install latest Ember Data
cake ember-model:install            # install latest Ember Model
cake handlebars:install             # install latest Handlebars
```

## Pow.cx

To use this app with [Pow.cx](http://pow.cx/), follow these simple steps:

1. Install [Pow.cx](http://pow.cx/)
1. `echo 3333 > ~/.pow/<appname>`
1. Start the server with `cake server`
1. Open [yet-another-ember-brunch.dev](http://<app-name>.dev)


## Testing

To run you will need [Testem](https://github.com/airportyh/testem) and you will need to
install [phantomjs](https://github.com/ariya/phantomjs).

```
brew update && brew install phantomjs
```

To run tests continiously as you write code and tests (for now) you must open
two terminal windows.

```
brunch watch -s
```

```
testem
```

If you want to run your tests on other browsers, modify your `testem.json` file to include the additional browsers. For example:

```
"launch_in_dev": [ "PhantomJS", "Chrome", "Chrome Canary", "Firefox", "Safari" ]
```

You can see a list of available launchers by running the command `testem launchers`.


## Ember.vim Support

Custom [Ember.vim][] support is provided via
[`portkey.json`](/config/projections.json). You can navigate to files via these
commands:

```
:Eadapter
:Easset <name>       → app/assets/<name>
:Ecomponent <name>   → app/components/<name>.coffee
:Econfig <name>      → app/config/<name>.coffee
:Econtroller <name>  → app/controllers/<name>.coffee
:Ehelper <name>      → app/helpers/<name>.coffee
:Einitialize
:Einitializer <name> → app/initializers/<name>.coffee
:Emixin <name>       → app/mixins/<name>.coffee
:Emodel <name>       → app/models/<name>.coffee
:Eroute <name>       → app/routes/<name>.coffee
:Estylesheet <name>  → app/stylesheets/<name>.styl
:Etemplate <name>    → app/templates/<name>.hbs
:Etest <name>        → test/<name>_test.coffee
:Eutility <name>     → app/utility/<name>.coffee
:Eview <name>        → app/views/<name>.coffee
```

## Updating YAEB

YAEB has a built-in update script.

```
cake yaeb:update
```

It updates and **overwites** `Cakefile`, `package.json`, `portkey.json`, `config.coffee`.

## Thanks To
* [@mutewinter](https://github.com/mutewinter/tapas-with-ember) for making vital changes to the original
  skeleton. YAEB is based on this skeleton.
* [@gcollazo](https://github.com/gcollazo) for making
  [brunch-with-ember-reloaded][], which Tapas with Ember is based on.

[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/cavneb/yet-another-ember-brunch/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

[brunch-with-ember-reloaded]: https://github.com/gcollazo/brunch-with-ember-reloaded
[Less]: http://lesscss.org
[CoffeeScript]: http://coffeescript.org/
[auto-reload-brunch]: https://github.com/brunch/auto-reload-brunch
[gzip-brunch]: https://github.com/banyan/gzip-brunch
[Brunch]: http://brunch.io
[Ember]: http://emberjs.com
[uglify-js-brunch]: https://github.com/brunch/uglify-js-brunch
[Ember.vim]: https://github.com/dsawardekar/ember.vim
[Node]: http://nodejs.org/
[ember-rails]: https://github.com/emberjs/ember-rails
[Ember Data]: https://github.com/emberjs/data
[Ember Model]: https://github.com/ebryn/ember-model
[loom]: https://github.com/cavneb/loom-generators-ember-brunch
[the FAQ]: https://github.com/cavneb/yet-another-ember-brunch/wiki/FAQ
[deployment script]: /config/deploy.rb
[Mina]: http://nadarei.co/mina/
