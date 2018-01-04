export class Renderer {
  setRoot(newRoot) {
    /** @type {HTMLElement} */
    this.root = newRoot
  }

  render(text) {
    for (const child of this.root.children) {
      child.remove()
    }
    this.root.innerHTML = text
  }
}
