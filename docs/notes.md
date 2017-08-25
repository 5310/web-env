## Packages

- (atom)
  - apm:atom-language-postcss
  - apm:linter-stylelint
- jsonfile
- browserslist
- eslint
  - babel-eslint
  - eslint-config-standard
  - eslint-plugin-html
  - eslint-plugin-import
  - eslint-plugin-node
  - eslint-plugin-promise
  - eslint-plugin-standard
- stylelint
  - stylelint-config-standard
- (babel)
  - babel-core
  - babel-preset-env
  - babel-preset-stage-2
- postcss
  - sugarss
  - postcss-nested
  - postcss-nested-props
  - postcss-mixins
  - postcss-font-magician
  - postcss-cssnext
- metalsmith
  - metalsmith-filter
  - metalsmith-rename
  - metalsmith-babel
  - metalsmith-postcss
  - metalsmith-pug
  - metalsmith-changed
- jspm
- watch

## Config Files

- manifests
  - manifest.json
- package managers
  - package.json
  - bower.json
  - jspm.config.js
- static configs
  - .babelrc
  - .browserslistrc
  - .eslintrc
  - .gitignore
  - .postcssrc
  - .stylelintrc?
- build tools
  - metalsmith.config.js
- continuous integration
  - .travis.yml

## Project Structure

- docs
- concepts
- src
  - assets: source files of all the assets
  - components
  - content
  - templates
- dist
  - assets: compiled/rendered assets
  - components: compiled second
  - templates: compiled before content is
  - content: actual site

## Notes

- We're only using hyperscript in our Js for webcomponents.
- We're also building webcomponents with just Cycle.js
  - https://github.com/staltz/cycle-custom-elementify [obsolete]
- Metalsmith
  - https://github.com/segmentio/metalsmith-collections
  - https://github.com/segmentio/metalsmith-collections
  - http://www.petermorlion.com/writing-your-first-metalsmith-plugin/
  - http://www.metalsmith.io/#matching
- It was tricky to incorporate web-components into my use-case of static sites.
  - Because those components would be Js modules that have import statements in them too, so we need to get them over JSPM or risk further deduplication.
  - But SystemJS (and indeed, import statements) are async.
  - They do work when loaded async'ly, but there's a flash of unpopulated content!
- ShadyCSS is a pain in the ass
  - https://github.com/webcomponents/shadycss/issues/19
- Yarn is too noisy.
- Bower is dead.
  - No need to worry about polyfills. Just import them wherever you need to!
    - Except @webcomponents/webcomponentjs doesn't work, at all.
    - Using skatejs/skatejs-web-components
    - But the package uses GH commits as deps, which have to be overridden.
- SkateJS 5.0.0-alpha does not work properly.
  - Its hyperscript isn't properly variadic.
  - It has no working props generator.
  - And it's not documented at all, so there's that.
  - Use 4.x instead.
  - Or don't use at all...
- You'll be using Cycle.js anyway. Make webcomponents out of them too.
- AsciiDoc/tor is a no go.
  - Not only us pulling in all that Ruby a terrible idea, the library is very very...very.
  - The HTML5 converter is anything but (non-semantic.)
  - There's no way to create blank block elements.
  - Or pass children to macro elements.
    - Docs mention nested macros, but give no examples; couldn't get them to work.
  - Docs look extensive, but are actually rather poor.
    - http://asciidoc.org/chunked/ch21.html
    - http://asciidoctor.org/docs/user-manual/#extensions-and-integrations
    - Asciidoctor.js at least has some examples:
      - https://github.com/asciidoctor/asciidoctor.js/tree/c28dfa60de30bf43f4413bd208918fc976b6bdfd/spec/share/extensions
    - There are no docs for the API extensions actually use to generate output: 
      - https://github.com/asciidoctor/asciidoctor/blob/master/lib/asciidoctor/converter/html5.rb
      

## TODO

