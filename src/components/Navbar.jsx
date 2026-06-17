import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X, Sun, Moon, ArrowRight, Shield } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Journey", href: "#journey" },
    { name: "Audits", href: "#audits" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Why Me", href: "#whyme" },
    { name: "Contact", href: "#contact" }
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    
    if (location.pathname !== "/") {
      navigate(`/${href}`);
    } else {
      const element = document.querySelector(href);
      if (element) {
        const offset = 80; // height of sticky navbar
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/80 dark:bg-navy-950/80 backdrop-blur-md border-b border-slate-200/50 dark:border-navy-800/50 py-3 shadow-md"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo Brand */}
          <a
            href="/"
            onClick={(e) => handleLinkClick(e, "#home")}
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 bg-navy-900 dark:bg-gold-500 border border-gold-500/20 dark:border-navy-950/20 rounded flex items-center justify-center shadow-lg transition-transform group-hover:scale-105">
              <Shield className="text-white dark:text-navy-950" size={18} />
            </div>
            <div className="flex flex-col">
              <span className="text-navy-900 dark:text-white font-sora font-bold text-sm leading-none tracking-tight group-hover:text-gold-500 dark:group-hover:text-gold-400 transition-colors">
                Shabbir Mohammed
              </span>
              <span className="text-slate-500 dark:text-slate-400 text-[10px] tracking-wide font-medium mt-0.5 uppercase">
                Senior Finance Consultant
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-xs uppercase font-semibold tracking-wider text-slate-600 hover:text-navy-900 dark:text-slate-300 dark:hover:text-gold-400 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded bg-slate-100 hover:bg-slate-200 dark:bg-navy-800 dark:hover:bg-navy-700 text-slate-700 dark:text-slate-300 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            {/* CTA Button */}
            <button
              onClick={() => {
                setIsOpen(false);
                navigate("/schedule-consultation");
              }}
              className="inline-flex items-center justify-center bg-navy-900 hover:bg-navy-800 dark:bg-gold-500 dark:hover:bg-gold-600 text-white dark:text-navy-950 px-5 py-2.5 rounded text-xs font-bold uppercase tracking-wider transition-all duration-200 group gap-1 border border-transparent dark:border-gold-400/20 cursor-pointer animate-pulse"
            >
              Schedule Consultation
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Mobile Navigation Trigger */}
          <div className="flex items-center gap-3 lg:hidden">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded bg-slate-100 hover:bg-slate-200 dark:bg-navy-800 dark:hover:bg-navy-700 text-slate-700 dark:text-slate-300 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            {/* Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded bg-slate-100 hover:bg-slate-200 dark:bg-navy-800 dark:hover:bg-navy-700 text-slate-700 dark:text-slate-300 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black z-40 lg:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-80 bg-white dark:bg-navy-900 border-l border-slate-200 dark:border-navy-800 z-50 p-6 flex flex-col justify-between shadow-2xl lg:hidden"
            >
              <div className="flex flex-col gap-6">
                <div className="flex justify-between items-center pb-6 border-b border-slate-100 dark:border-navy-800">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-navy-900 dark:bg-gold-500 rounded flex items-center justify-center">
                      <Shield className="text-white dark:text-navy-950" size={14} />
                    </div>
                    <span className="text-navy-900 dark:text-white font-sora font-bold text-sm">
                      Consultant
                    </span>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded hover:bg-slate-100 dark:hover:bg-navy-800 text-slate-500 dark:text-slate-400"
                  >
                    <X size={20} />
                  </button>
                </div>

                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className="text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-gold-500 dark:hover:text-gold-400 py-2 transition-colors"
                    >
                      {link.name}
                    </a>
                  ))}
                </nav>
              </div>

              <div className="mt-8 border-t border-slate-100 dark:border-navy-800 pt-6">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    navigate("/schedule-consultation");
                  }}
                  className="w-full inline-flex items-center justify-center bg-navy-900 hover:bg-navy-800 dark:bg-gold-500 dark:hover:bg-gold-600 text-white dark:text-navy-950 px-5 py-3 rounded font-bold uppercase tracking-wider text-xs transition-colors group gap-2 cursor-pointer"
                >
                  Schedule Consultation
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
