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
    ({DOM, ATTR, EV}) => ({
      //DOM: ATTR
      //  .filter(({attr}) => attr === 'foo')
      //  .map(({value}) => h('div', `The answer is ${value}!`)),
      DOM: EV('fooChanged')
        .map(({detail: {foo}}) => h('div', `The answer is ${foo}!`)),
      EV: xs.periodic(2000) 
        .map(_ => new CustomEvent('fooChanged', {
          detail: { foo: 'bar' },
          bubbles: true
        }))
    }),
    {
      template: `<link rel="stylesheet" href="components/elements/${name}.css">`,
      attrs: ['foo'], 
    }
  )
)