import 'skatejs-web-components'
import {default as xs} from 'xstream'
import {run} from '@cycle/run'
import {makeDOMDriver, h} from '@cycle/dom'
import {default as makeObservedAttrDriver} from 'components/cycle/driver-observed-attr.js'
import {default as webcomponentize} from 'components/cycle/webcomponentize.js'

const name = 'cycle-test'

window.customElements.define(
  name,
  webcomponentize(
    ({DOM, ATTR}) => ({
      DOM: ATTR
        .filter(({attr}) => attr === 'foo')
        .map(({value}) => h('div', `The answer is ${value}!`))
    }),
    {
      template: `<link rel="stylesheet" href="components/elements/${name}.css">`,
      attrs: ['foo'], 
    }
  )
)