
import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Link, useLocation } from "react-router-dom";
import { Home, User, Code2, Briefcase, Mail, Sun, Moon, MapPin, X, ChevronRight, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [time, setTime] = useState(new Date());
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  // Time Update Effect
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Theme Effect
  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    setTheme(isDark ? 'dark' : 'light');
  }, []);

  const toggleTheme = (e: React.MouseEvent<HTMLButtonElement>) => {
    const newTheme = theme === 'light' ? 'dark' : 'light';

    // Check if view transitions are supported
    if (!document.startViewTransition) {
      setTheme(newTheme);
      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add(newTheme);
      localStorage.setItem('theme', newTheme);
      document.dispatchEvent(new Event('themeChanged'));
      return;
    }

    const x = e.clientX;
    const y = e.clientY;

    const endRadius = Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y)
    );

    const transition = document.startViewTransition(() => {
      setTheme(newTheme);
      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add(newTheme);
      localStorage.setItem('theme', newTheme);
      document.dispatchEvent(new Event('themeChanged'));
    });

    transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`,
      ];

      document.documentElement.animate(
        {
          clipPath: theme === "dark" ? [...clipPath].reverse() : clipPath,
        },
        {
          duration: 400,
          easing: "ease-out",
          pseudoElement: theme === "dark" ? "::view-transition-old(root)" : "::view-transition-new(root)",
        }
      );
    });
  };

  const navLinks = [
    { name: "Home", path: "/", icon: <Home className="w-4 h-4" /> },
    { name: "About", path: "/about", icon: <User className="w-4 h-4" /> },
    { name: "Project", path: "/projects", icon: <Briefcase className="w-4 h-4" /> },
    { name: "Experience", path: "/experience", icon: <Briefcase className="w-4 h-4" /> },
    { name: "ToolStack", path: "/tools", icon: <Code2 className="w-4 h-4" /> },
    { name: "Contact", path: "/contact", icon: <Mail className="w-4 h-4" /> },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${scrolled
          ? "bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-lg shadow-black/5"
          : "bg-background/80 backdrop-blur-md"
          } py-3 md:py-4 px-4 md:px-8`}
      >
        <div className="w-full max-w-[1920px] mx-auto flex items-center justify-between gap-4">

          {/* --- LEFT: LOGO --- */}
          <div className="flex items-center gap-2 z-[10001]">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-9 md:w-10 h-9 md:h-10 bg-black dark:bg-white rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/20 transition-transform duration-300 hover:scale-105">
                <Code2 className="w-5 md:w-6 h-5 md:h-6 text-cyan-500" />
              </div>
              <div className="hidden lg:flex items-center gap-1 bg-[#1e1e24] dark:bg-white backdrop-blur-md border border-white/10 dark:border-black/10 px-4 py-2 rounded-xl shadow-lg dark:shadow-md transition-all duration-500 ease-in-out hover:shadow-xl dark:hover:shadow-lg">
                <span className="font-bold text-cyan-500 transition-colors duration-500">A</span>
                <span className="font-medium text-white dark:text-black transition-colors duration-500">meya</span>
                <span className="font-bold text-cyan-500 ml-1 transition-colors duration-500">C</span>
                <span className="font-medium text-white dark:text-black transition-colors duration-500">hopade</span>
              </div>
            </Link>
          </div>

          {/* --- CENTER: FLOATING DOCK --- */}
          <div className="hidden lg:flex items-center bg-[#1e1e24] dark:bg-white backdrop-blur-md border border-white/10 dark:border-black/10 rounded-full px-2 py-2 shadow-2xl dark:shadow-lg transition-all duration-500 ease-in-out">
            <div className="flex items-center space-x-1 pr-4 border-r border-white/10 dark:border-black/10 mr-4 transition-colors duration-500">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-500 ease-in-out ${location.pathname === link.path
                    ? "bg-cyan-500/20 text-cyan-400 dark:bg-cyan-500/10 dark:text-cyan-700"
                    : "text-gray-300 dark:text-zinc-600 hover:text-white dark:hover:text-black hover:bg-white/10 dark:hover:bg-black/5"
                    }`}
                >
                  {link.icon}
                  {link.name !== "Home" && <span>{link.name}</span>}
                </Link>
              ))}
            </div>

            {/* Theme Toggle in Dock */}
            <button
              onClick={(e) => toggleTheme(e)}
              className="p-2 rounded-full text-gray-300 dark:text-zinc-600 hover:text-yellow-400 dark:hover:text-yellow-600 hover:bg-white/10 dark:hover:bg-black/5 transition-all duration-500"
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>
          </div>

          {/* --- RIGHT: TIME --- */}
          <div className="hidden lg:flex items-center">
            <div className="bg-[#1e1e24] dark:bg-white backdrop-blur-md border border-white/10 dark:border-black/10 rounded-xl px-4 py-2 flex items-center gap-2 shadow-lg dark:shadow-md transition-all duration-500 ease-in-out">
              <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></div>
              <span className="text-white dark:text-black font-mono text-sm tabular-nums transition-colors duration-500">
                {time.toLocaleTimeString([], { hour12: false })}
              </span>
            </div>
          </div>

        </div>
      </nav>

      {/* Mobile Menu Toggle - Portal to Body (Bypasses all layout constraints) */}
      {typeof document !== "undefined" && createPortal(
        <div className="fixed top-3.5 right-4 z-[999999] lg:hidden flex items-center gap-3">
          {/* Time Display (Portal) */}
          <div className="hidden sm:block px-2.5 py-1.5 rounded-lg bg-secondary/80 backdrop-blur-md border border-border/40 text-[10px] sm:text-xs font-mono tabular-nums text-foreground/80 shadow-sm">
            {time.toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit' })}
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-secondary/80 hover:bg-secondary backdrop-blur-md border border-border/40 text-foreground shadow-sm transition-all duration-300 active:scale-95 group"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={mobileMenuOpen ? 'open' : 'closed'}
                initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                transition={{ duration: 0.2 }}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </motion.div>
            </AnimatePresence>
          </button>
        </div>,
        document.body
      )}

      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence mode="wait">
            {mobileMenuOpen && (
              <>
                {/* Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="fixed inset-0 z-[2147483646] bg-black/60 backdrop-blur-sm lg:hidden"
                  onClick={() => setMobileMenuOpen(false)}
                />

                {/* Menu Panel */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: -20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -20 }}
                  transition={{ type: "spring", damping: 25, stiffness: 300 }}
                  className="fixed top-24 left-4 right-4 z-[2147483647] max-w-sm mx-auto bg-white/90 dark:bg-zinc-950/90 backdrop-blur-2xl border border-zinc-200/50 dark:border-white/10 rounded-[2rem] shadow-2xl overflow-hidden flex flex-col"
                >

                  {/* Header/Brand */}
                  <div className="flex items-center justify-between px-6 py-5 border-b border-zinc-200/50 dark:border-white/5">
                    <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest">Navigation</span>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                      <span className="text-[10px] text-zinc-500 font-medium">ONLINE</span>
                    </div>
                  </div>

                  {/* Navigation Gird */}
                  <div className="p-3 grid grid-cols-2 gap-2">
                    {navLinks.map((link, i) => {
                      const isActive = location.pathname === link.path;
                      return (
                        <Link
                          key={link.name}
                          to={link.path}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`flex flex-col items-center justify-center gap-2 p-4 rounded-2xl transition-all duration-300 border ${isActive
                            ? "bg-cyan-500/10 border-cyan-500/20 text-cyan-600 dark:text-cyan-400"
                            : "bg-zinc-50/50 dark:bg-white/5 border-transparent text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-white/10 hover:text-zinc-900 dark:hover:text-zinc-100"
                            }`}
                        >
                          {React.cloneElement(link.icon as React.ReactElement, { className: "w-6 h-6 mb-1" })}
                          <span className="font-medium text-xs tracking-wide">{link.name}</span>
                        </Link>
                      );
                    })}
                  </div>

                  {/* Footer Stats / Toggles */}
                  <div className="px-3 pb-3">
                    <button
                      onClick={(e) => toggleTheme(e)}
                      className="w-full flex items-center justify-between p-4 rounded-2xl bg-zinc-50/50 dark:bg-white/5 hover:bg-zinc-100 dark:hover:bg-white/10 border border-transparent hover:border-zinc-200/50 dark:hover:border-white/5 transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-full transition-colors ${theme === 'dark' ? 'bg-cyan-500/10 text-cyan-400' : 'bg-yellow-500/10 text-yellow-600'}`}>
                          {theme === 'light' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                        </div>
                        <div className="flex flex-col items-start gap-0.5">
                          <span className="text-xs font-medium text-zinc-600 dark:text-zinc-300">Appearance</span>
                          <span className="text-[10px] text-zinc-500 uppercase tracking-wider">{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</span>
                        </div>
                      </div>
                      <div className="h-6 px-2 rounded-md bg-zinc-200/50 dark:bg-white/5 flex items-center justify-center">
                        <span className="text-[10px] font-mono text-zinc-500">{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                      </div>
                    </button>
                  </div>

                </motion.div>
              </>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
};

export default Navbar;
