import * as skate from 'skatejs'

customElements.define('x-test', class extends skate.Component {
  static get props () {
    return {
      name: { attribute: true }
    }
  }
  renderCallback () {
    return skate.h('div', `Hello, ${this.name}`)
  }
})
