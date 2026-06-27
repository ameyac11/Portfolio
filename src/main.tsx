import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

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
