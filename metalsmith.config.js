const Metalsmith = require('metalsmith')
const json = require('jsonfile').readFileSync

new Metalsmith(__dirname)
  .destination('./dist')
  .use(require('metalsmith-babel')(json('.babelrc')))
  .use(require('metalsmith-with-postcss')(
    Object.assign({}, json('.postcssrc'), {
      pattern: ["**/*.sss"],
      parser: require('sugarss')
    })
  ))
  .use(require('metalsmith-rename')([[/\.sss$/, '.css']]))
  .use(require('metalsmith-with-postcss')(
    Object.assign({}, json('.postcssrc'), {
      pattern: ["**/*.css"]
    })
  ))
  .build(console.log)