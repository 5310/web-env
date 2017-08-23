import 'skatejs-web-components'
import { Component, h, prop } from 'skatejs'

const name = 'skate-test'

customElements.define(name, class extends Component {
  static props = {
    name: prop.string({attribute: true, default: 'World'})
  }
  renderCallback() {
    return [
      h('link', {rel: 'stylesheet', href: `components/elements/${name}.css`}),
      h('div', `Hello ${this.name}!`)
    ]
  }
})