import 'skatejs-web-components'
import {makeTemplate} from 'main/makeTemplate.js'

const name = 'x-test'

window.customElements.define(
  name,
  class extends HTMLElement {
    constructor () {
      super()
    }
    connectedCallback () {
      this.attachShadow({mode: 'open'})
      this.shadowRoot.innerHTML = `
        <style>
          ${name} {
            color: blue;
          }
        </style>
        <div class="${name}"></div>
      `
      this.render()
    }
    render () {
      const root = this.shadowRoot.querySelector('.'+name)
      root.innerHTML = `
          <div>TEST</div>
      `
    }
  }
)