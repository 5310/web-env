const Metalsmith = require('metalsmith')
const filter = require('metalsmith-filter')
const json = require('jsonfile').readFileSync

const debug = (err, payload) => {
  if (err) console.log(err)
  Object.keys(payload).forEach(key => console.log(key))
}

// Script
new Metalsmith(__dirname)
  .destination('./dist')
  .use(filter(['**/*.js']))
  .use(require('metalsmith-babel')(json('.babelrc')))
  .build(debug)

// Markup
new Metalsmith(__dirname)
  .destination('./dist')
  .use(filter(['**/*.pug', '!layouts/**']))
  .use(require('metalsmith-pug')())
  .build(debug)

// Style
new Metalsmith(__dirname)
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
  .build(debug)
