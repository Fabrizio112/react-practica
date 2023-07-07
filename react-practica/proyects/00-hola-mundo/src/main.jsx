import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'

const main = document.querySelector("#root")
const root = ReactDOM.createRoot(main)
root.render(
  <>
    <App />
  </>
)
