// This script runs immediately (before React loads)
(function() {
  // Get theme from localStorage
  const savedTheme = localStorage.getItem('theme');
  
  // Check system preference
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  // Clear any existing theme classes
  document.documentElement.classList.remove('light', 'dark');
  
  // Determine and apply theme
  if (savedTheme === 'light') {
    document.documentElement.classList.add('light');
    console.log('Theme script: Applied light theme from localStorage');
  } else if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark');
    console.log('Theme script: Applied dark theme from localStorage');
  } else if (prefersDark) {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    console.log('Theme script: Applied dark theme from system preference');
  } else {
    document.documentElement.classList.add('light'); // Default to light
    localStorage.setItem('theme', 'light');
    console.log('Theme script: Applied default light theme');
  }
})(); 