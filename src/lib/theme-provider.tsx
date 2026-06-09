import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

// Create context with defaults
const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Set default light theme
  const [theme, setTheme] = useState<Theme>('light');

  // Toggle current theme
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    
    // Apply theme changes
    applyTheme(newTheme);
    
    // Save theme preference
    localStorage.setItem('theme', newTheme);
    
    console.log('Theme toggled to:', newTheme);
  };

  // Apply the document theme
  const applyTheme = (theme: Theme) => {
    const root = document.documentElement;
    
    // Remove old classes
    root.classList.remove('light', 'dark');
    
    // Add new class
    root.classList.add(theme);
    
    // Update mobile meta color
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute(
        'content',
        theme === 'dark' ? '#0f172a' : '#ffffff'
      );
    }
  };

  // Initialize theme properly
  useEffect(() => {
    // Get saved or system theme
    const storedTheme = localStorage.getItem('theme') as Theme | null;
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Decide initial theme
    let initialTheme: Theme;
    if (storedTheme) {
      initialTheme = storedTheme;
    } else {
      initialTheme = systemPrefersDark ? 'dark' : 'light';
      localStorage.setItem('theme', initialTheme);
    }
    
    // Update component state
    setTheme(initialTheme);
    
    // Apply visual theme
    applyTheme(initialTheme);
    
    console.log('Theme initialized to:', initialTheme);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
} 