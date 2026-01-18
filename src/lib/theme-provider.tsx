import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

// Create context with default values
const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Initialize with light theme by default
  const [theme, setTheme] = useState<Theme>('light');

  // Function to toggle theme
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    
    // Apply theme to document
    applyTheme(newTheme);
    
    // Save to localStorage
    localStorage.setItem('theme', newTheme);
    
    console.log('Theme toggled to:', newTheme);
  };

  // Function to apply theme to document
  const applyTheme = (theme: Theme) => {
    const root = document.documentElement;
    
    // Remove both classes
    root.classList.remove('light', 'dark');
    
    // Add the new theme class
    root.classList.add(theme);
    
    // Update meta theme-color for mobile browsers
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute(
        'content',
        theme === 'dark' ? '#0f172a' : '#ffffff'
      );
    }
  };

  // Initialize theme on mount
  useEffect(() => {
    // Get theme from localStorage or use system preference
    const storedTheme = localStorage.getItem('theme') as Theme | null;
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Determine which theme to use
    let initialTheme: Theme;
    if (storedTheme) {
      initialTheme = storedTheme;
    } else {
      initialTheme = systemPrefersDark ? 'dark' : 'light';
      localStorage.setItem('theme', initialTheme);
    }
    
    // Update state
    setTheme(initialTheme);
    
    // Apply theme to document
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