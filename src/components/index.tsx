import * as React from 'react'
import { render } from 'react-dom'
import Home from './app'
import '../style/main.scss'

render(
  <Home />,
  document.getElementById('app-wrapper') as HTMLElement
)

console.log('TEST')