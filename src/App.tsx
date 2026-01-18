import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Tools from "./pages/Tools";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { ThemeProvider } from "./lib/theme-provider";
import { useEffect, useState } from "react";
import LoadingScreen from "./components/LoadingScreen";

// Create a client
const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Initialize theme on app load
  useEffect(() => {
    // Get the theme from localStorage
    const savedTheme = localStorage.getItem('theme') || 'light';

    // Apply the theme class to the document
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(savedTheme);

    console.log('App initialized with theme:', savedTheme);

    // Listen for theme changes
    const handleThemeChange = () => {
      const isDarkMode = document.documentElement.classList.contains('dark');
      console.log('App detected theme change:', isDarkMode ? 'dark' : 'light');
    };

    document.addEventListener('themeChanged', handleThemeChange);

    return () => {
      document.removeEventListener('themeChanged', handleThemeChange);
    };
  }, []);

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/tools" element={<Tools />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/contact" element={<Contact />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
