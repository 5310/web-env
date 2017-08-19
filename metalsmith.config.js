const Metalsmith = require('metalsmith')
const filter = require('metalsmith-filter')
const changed = require('metalsmith-changed')
const json = require('jsonfile').readFileSync

const debug = (err, payload) => {
  if (err) console.log(err)
  Object.keys(payload)
    .filter(key => !key.match(/^.\metalsmith-changed/))
    .forEach(key => console.log(key))
}

// Script
new Metalsmith(__dirname)
  .clean(false)
  .destination('./dist')
  .use(filter(['**/*.js']))
  .use(require('metalsmith-babel')(json('.babelrc')))
  .use(changed({ctimes: '.metalsmith-changed.script.json'}))
  .build(debug)

// Markup
new Metalsmith(__dirname)
  .clean(false)
  .destination('./dist')
  .use(filter(['**/*.pug', '!layouts/**']))
  .use(require('metalsmith-pug')())
  .use(changed({ctimes: '.metalsmith-changed.markup.json'}))
  .build(debug)

// Style
new Metalsmith(__dirname)
  .clean(false)
  .destination('./dist')
  .use(filter(['**/*.sss', '**/*.css']))
  .use(require('metalsmith-with-postcss')(
    Object.assign({}, json('.postcssrc'), {
      pattern: ['**/*.sss'],
      parser: require('sugarss')
    })
  ))
  .use(require('metalsmith-rename')([[/\.sss$/, '.css']]))
  .use(require('metalsmith-with-postcss')(
    Object.assign({}, json('.postcssrc'), {
      pattern: ['**/*.css']
    })
  ))
  .use(changed({ctimes: '.metalsmith-changed.style.json'}))
  .build(debug)
