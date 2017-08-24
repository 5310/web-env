import {run} from '@cycle/run'
import {makeDOMDriver, h} from '@cycle/dom'
import {default as makeObservedAttrDriver} from 'components/cycle/driver-observed-attr.js'
import {default as makeEventDispatcherDriver} from 'components/cycle/driver-event-dispatcher.js'

export default (main, {attrs=[], template='', drivers={}}) =>
  class extends HTMLElement {
    static get observedAttributes () { return attrs }
    main = main
    drivers
    constructor () {
      super()
      this.attachShadow({mode: 'open'})
      this.shadowRoot.innerHTML = template
      this.drivers = Object.assign(drivers, {
        DOM: makeDOMDriver(this.shadowRoot),
        ATTR: makeObservedAttrDriver(this),
        EV: makeEventDispatcherDriver(this)
      })
      run(this.main, this.drivers)
    }
    attributeChangedCallback (...args) {
      this.drivers.ATTR.push(...args)
    }
  }