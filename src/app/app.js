import html from './app.html'
import './app.styl'

export class App {
  constructor(element) {
    /** @type {HTMLElement} */
    this.root = element
  }

  init() {
    this.root.setAttribute('view', 'app')

    this.root.innerHTML = html
  }
}
