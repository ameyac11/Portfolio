import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import Analytics from "./analytics";
import SpeedInsights from "./speed-insights";

// Wait for DOM load.
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
