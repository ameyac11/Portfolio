import { createRoot } from 'react-dom/client'
import clarity from '@microsoft/clarity'
import App from './App.tsx'
import './index.css'

clarity.init('xdy2sa5z8r')

// Wait for DOM load.
document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root')
  if (root) {
    createRoot(root).render(
      <>
        <App />
      </>
    )
  }
})
