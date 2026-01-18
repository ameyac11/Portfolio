import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import Analytics from "./analytics";
import SpeedInsights from "./speed-insights";

// Make sure the DOM is fully loaded before rendering
document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root')
  if (root) {
    createRoot(root).render(
      <>
        <App />
        <Analytics />
        <SpeedInsights />
      </>
    )
  }
})
