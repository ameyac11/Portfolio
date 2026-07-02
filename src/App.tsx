import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./lib/theme-provider";
import { Suspense, lazy, useEffect, useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import ScrollToTop from "./components/ScrollToTop";

const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const Tools = lazy(() => import("./pages/Tools"));
const Experience = lazy(() => import("./pages/Experience"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Initialize query client.
const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  // App theme initialization.
  useEffect(() => {
    // Retrieve stored theme.
    const savedTheme = localStorage.getItem('theme') || 'light';

    // Apply document theme.
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(savedTheme);

    console.log('App initialized with theme:', savedTheme);

    // Theme change listener.
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
            <ScrollToTop />
            <Suspense fallback={null}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/tools" element={<Tools />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/contact" element={<Contact />} />
                {/* Routes go here. */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
