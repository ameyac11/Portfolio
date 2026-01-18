
import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Link, useLocation } from "react-router-dom";
import { Home, User, Code2, Briefcase, Mail, Sun, Moon, MapPin, X, ChevronRight } from "lucide-react";
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
          } md:py-4 py-3 px-4 md:px-8`}
      >
        <div className="max-w-[1920px] mx-auto flex items-center justify-between">

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

          {/* Mobile Toggle - Always Visible Premium Design */}
          <div className="flex lg:hidden items-center gap-3 z-[10001] relative">
            {/* Time Display on Mobile */}
            <div className="px-3 py-1.5 rounded-lg bg-secondary/60 backdrop-blur-md border border-border/40 text-xs font-mono tabular-nums text-foreground/80">
              {time.toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit' })}
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="relative w-11 h-11 flex items-center justify-center rounded-xl bg-foreground/10 backdrop-blur-md border-2 border-foreground/20 hover:bg-foreground/20 hover:border-foreground/30 transition-all duration-300 active:scale-95"
              aria-label="Toggle menu"
            >
              <div className="flex flex-col gap-1.5 w-6">
                <span className={`h-0.5 bg-foreground rounded-full transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`h-0.5 bg-foreground rounded-full transition-all duration-300 ${mobileMenuOpen ? 'opacity-0 scale-0' : ''}`} />
                <span className={`h-0.5 bg-foreground rounded-full transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>

        </div>
      </nav>

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
                  transition={{ duration: 0.2 }}
                  className="fixed inset-0 z-[2147483646] bg-black/60 backdrop-blur-sm lg:hidden"
                  onClick={() => setMobileMenuOpen(false)}
                />

                {/* Menu Panel */}
                <motion.div
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "spring", damping: 30, stiffness: 300 }}
                  className="fixed inset-y-0 right-0 z-[2147483647] w-full max-w-sm bg-background/95 backdrop-blur-2xl border-l border-white/10 shadow-2xl lg:hidden flex flex-col"
                >


                  {/* Header */}
                  <div className="relative z-10 flex items-center justify-between px-6 py-5 border-b border-white/5">
                    <Link to="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 group">
                      <div className="w-10 h-10 bg-cyan-500/10 rounded-xl flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors duration-300">
                        <Code2 className="w-5 h-5 text-cyan-500" />
                      </div>
                      <span className="font-bold text-lg tracking-tight text-foreground">Portfolio</span>
                    </Link>
                    <button
                      onClick={() => setMobileMenuOpen(false)}
                      className="p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-white/5 transition-all duration-300"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>

                  {/* Navigation */}
                  <div className="relative z-10 flex-1 overflow-y-auto py-8 px-4">
                    <nav className="flex flex-col gap-2">
                      {navLinks.map((link, i) => {
                        const isActive = location.pathname === link.path;
                        return (
                          <motion.div
                            key={link.name}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 + i * 0.05 }}
                          >
                            <Link
                              to={link.path}
                              onClick={() => setMobileMenuOpen(false)}
                              className={`group relative flex items-center justify-between p-4 rounded-xl transition-all duration-300 ${isActive
                                ? "text-cyan-500"
                                : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                                }`}
                            >
                              <div className="flex items-center gap-4">
                                <span className={`p-2 rounded-lg transition-colors duration-300 ${isActive ? "text-cyan-500" : "bg-white/5 text-muted-foreground group-hover:bg-white/10 group-hover:text-foreground"
                                  }`}>
                                  {React.cloneElement(link.icon as React.ReactElement, { className: "w-5 h-5" })}
                                </span>
                                <span className="font-medium text-lg">{link.name}</span>
                              </div>
                              {isActive && (
                                <motion.div
                                  layoutId="activeIndicator"
                                  className="w-1.5 h-1.5 rounded-full bg-cyan-500"
                                />
                              )}
                              {!isActive && <ChevronRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />}
                            </Link>
                          </motion.div>
                        );
                      })}
                    </nav>
                  </div>

                  {/* Footer */}
                  <div className="relative z-10 px-6 py-6 border-t border-white/5 bg-background/50 backdrop-blur-xl">
                    <div className="flex flex-col gap-4">
                      {/* Theme Toggle */}
                      <button
                        onClick={(e) => toggleTheme(e)}
                        className="flex items-center justify-between w-full p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all duration-300 group"
                      >
                        <span className="flex items-center gap-3 text-muted-foreground group-hover:text-foreground">
                          {theme === 'light' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                          <span className="font-medium">{theme === 'light' ? 'Light' : 'Dark'} Mode</span>
                        </span>
                        <div className={`w-10 h-6 rounded-full p-1 transition-colors duration-300 ${theme === 'dark' ? 'bg-cyan-500' : 'bg-zinc-600'}`}>
                          <div className={`w-4 h-4 rounded-full bg-white shadow-sm transition-transform duration-300 ${theme === 'dark' ? 'translate-x-4' : 'translate-x-0'}`} />
                        </div>
                      </button>

                      {/* Time & Copyright */}
                      <div className="flex items-center justify-between text-xs text-muted-foreground px-1">
                        <span>© 2026 Portfolio</span>
                        <span className="font-mono tabular-nums bg-white/5 px-2 py-1 rounded-md">
                          {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      </div>
                    </div>
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
