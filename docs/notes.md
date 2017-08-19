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

## TODO

- Make JSPM work.
- Prototype a Cycle.js webcomponent.
- Asciidoctor in Metalsmith
  - See if you can add support for AsciiDoctor (addons and all) into Consolidate.js and therefore `metalsmith-layouts`
  - Just metalmisth-asciidoctor if that doesn't work.
  - Implement a standalone AsciiDoctor plugin if nothing works out.
