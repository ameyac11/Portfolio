
import React from 'react';
import { Heart, Github, Linkedin, Mail, ArrowUp, Code2, Sparkles, MapPin } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Skills', href: '/tools' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: 'mailto:ameyaccod171@gmail.com' }
  ];

  const socialLinks = [
    { icon: <Github size={18} />, href: 'https://github.com/ameyaccod171', label: 'GitHub' },
    { icon: <Linkedin size={18} />, href: 'https://www.linkedin.com/in/ameya-chopade11', label: 'LinkedIn' },
    { icon: <Mail size={18} />, href: 'mailto:ameyaccod171@gmail.com', label: 'Email' }
  ];

  return (
    <footer className="bg-background text-foreground pt-20 pb-8 relative overflow-hidden border-t border-border">
      {/* Soft Glow */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>

      <div className="container px-4 mx-auto">
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          {/* Brand Section - Col Span 5 */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shadow-sm">
                <Code2 className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold tracking-tight">Ameya Chopade</h3>
                <p className="text-sm text-muted-foreground">AI & ML Developer</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-sm">
              Passionate about creating intelligent solutions with cutting-edge AI and Machine Learning technologies. Let's build the future together!
            </p>
            <div className="flex gap-4 pt-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center text-muted-foreground hover:text-foreground transition-all duration-300 hover:-translate-y-1"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links - Col Span 3 */}
          <div className="md:col-span-3 md:pl-8">
            <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-primary" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info - Col Span 4 */}
          <div className="md:col-span-4">
            <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" />
              Let's Connect
            </h4>
            <div className="space-y-4">
              <div className="group">
                <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium mb-1 group-hover:text-primary transition-colors">Email</p>
                <a href="mailto:ameyaccod171@gmail.com" className="text-foreground hover:text-primary transition-colors">ameyaccod171@gmail.com</a>
              </div>
              <div className="group">
                <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium mb-1 group-hover:text-primary transition-colors">Location</p>
                <div className="flex items-center gap-2 text-foreground">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  India
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            &copy; {currentYear} Ameya Chopade. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              Made with <Heart className="w-3 h-3 text-red-500 fill-current animate-pulse" /> and ☕
            </p>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-lg bg-secondary hover:bg-secondary/80 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
