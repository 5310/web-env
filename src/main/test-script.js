import {answer} from './test-module.js'
class X {
  foo = answer
}
const {foo} = new X()
console.log(foo)
