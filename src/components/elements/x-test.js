window.customElements.define(
  'x-test',
  class extends HTMLElement {
    constructor () {
      // Always call super first in constructor
      super()
      // Create the shadow root
      this.shadow = this.attachShadow({mode: 'open'})
      this.shadow.innerHTML = `
        <style>
        </style>
        <div class="x-test"></div>
      `
    }
    connectedCallback () {
      this.render()
    }
    render () {
      const root = this.shadow.querySelector('.x-test')
      root.innerHTML = `
          <div>TEST</div>
      `    
    }
  }
)
console.log('Custom element <x-test> defined.')