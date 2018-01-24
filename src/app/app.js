import html from './app.html'
import './app.styl'

export class App {
  constructor(element) {
    /** @type {HTMLElement} */
    this.root = element
  }

  init() {
    const root = this.root
    root.setAttribute('view', 'app')

    root.innerHTML = html

    const views = {
      title: root.querySelector('h1')
    }
    this.views = views

    const data = {
      title: 'Hello World!'
    }
    this.data = data

    views.title.textContent = data.title
  }
}
