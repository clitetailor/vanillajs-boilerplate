import { App } from './app'
import { expect } from 'chai'

test("Expect title to be 'Hello World!'", () => {
  const app = new App(document.createElement('div'))
  app.init()

  expect(app.views.title.textContent).to.equal('Hello World!')
})
