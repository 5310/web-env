import 'skatejs-web-components'
import { Component, h, prop } from 'skatejs'

customElements.define('x-hello', class XHello extends Component {
  static props = {
    name: prop.string({attribute: true, default: 'World'})
  }
  renderCallback() {
    return [
      h('link', {rel: 'stylesheet', href: 'components/elements/x-hello.css'}),
      h('div.x-hello', `Hello ${this.name}!`)
    ]
  }
})

console.log('Custom element <x-hello> defined.')