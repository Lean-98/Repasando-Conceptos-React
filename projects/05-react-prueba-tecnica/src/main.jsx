import { createRoot } from 'react-dom/client'
import { App } from './App'
import { StrictMode } from 'react'

const root = createRoot(document.getElementById('app'))
root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
