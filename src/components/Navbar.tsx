
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, User, Code2, Briefcase, Mail, Sun, Moon, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [time, setTime] = useState(new Date());
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-4 md:px-8 ${scrolled ? "bg-background/0" : "bg-transparent"
        }`}
    >
      <div className="max-w-[1920px] mx-auto flex items-center justify-between">

        {/* --- LEFT: LOGO --- */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-black dark:bg-white rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/20 transition-transform duration-500 hover:scale-105">
            <Code2 className="w-6 h-6 text-cyan-500" />
          </div>
          <Link to="/" className="hidden md:flex items-center gap-1 bg-[#1e1e24] dark:bg-white backdrop-blur-md border border-white/10 dark:border-black/10 px-4 py-2 rounded-xl shadow-lg dark:shadow-md transition-all duration-500 ease-in-out hover:shadow-xl dark:hover:shadow-lg">
            <span className="font-bold text-cyan-500 transition-colors duration-500">A</span>
            <span className="font-medium text-white dark:text-black transition-colors duration-500">meya</span>
            <span className="font-bold text-cyan-500 ml-1 transition-colors duration-500">C</span>
            <span className="font-medium text-white dark:text-black transition-colors duration-500">hopade</span>
          </Link>
        </div>

        {/* --- CENTER: FLOATING DOCK --- */}
        <div className="hidden md:flex items-center bg-[#1e1e24] dark:bg-white backdrop-blur-md border border-white/10 dark:border-black/10 rounded-full px-2 py-2 shadow-2xl dark:shadow-lg transition-all duration-500 ease-in-out">
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
        <div className="hidden md:flex items-center">
          <div className="bg-[#1e1e24] dark:bg-white backdrop-blur-md border border-white/10 dark:border-black/10 rounded-xl px-4 py-2 flex items-center gap-2 shadow-lg dark:shadow-md transition-all duration-500 ease-in-out">
            <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></div>
            <span className="text-white dark:text-black font-mono text-sm tabular-nums transition-colors duration-500">
              {time.toLocaleTimeString([], { hour12: false })}
            </span>
          </div>
        </div>

        {/* Mobile Toggle (Simple) */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => { }}>
            <div className="w-6 h-0.5 bg-foreground mb-1"></div>
            <div className="w-6 h-0.5 bg-foreground mb-1"></div>
            <div className="w-6 h-0.5 bg-foreground"></div>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
