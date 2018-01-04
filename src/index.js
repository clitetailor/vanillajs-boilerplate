import './index.css'
import './app/app'

import { App } from './app/app'

const appRoot = document.querySelector('app-root')
const app = new App(appRoot)

app.init()
