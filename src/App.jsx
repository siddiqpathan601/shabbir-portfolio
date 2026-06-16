import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Journey } from "./components/Journey";
import { AuditExperience } from "./components/AuditExperience";
import { Skills } from "./components/Skills";
import { Education } from "./components/Education";
import { WhyWorkWithMe } from "./components/WhyWorkWithMe";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { FooterSection } from "./components/FooterSection";
import { Analytics } from "@vercel/analytics/react";

function App() {
  const [theme, setTheme] = useState(() => {
    // Default to dark theme for that premium luxury look, but respect local storage if set
    const saved = localStorage.getItem("theme");
    return saved || "dark";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      document.body.classList.add("dark");
      root.setAttribute("data-theme", "dark");
    } else {
      root.classList.remove("dark");
      document.body.classList.remove("dark");
      root.setAttribute("data-theme", "light");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-navy-950 text-slate-900 dark:text-slate-100 font-inter transition-colors duration-300 selection:bg-gold-200 dark:selection:bg-gold-800/50 relative overflow-x-hidden">
      {/* Premium subtle layout grids */}
      <div className="absolute inset-0 grid-pattern pointer-events-none z-0" />
      
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero theme={theme} />
      <About />
      <Services />
      <Journey />
      <AuditExperience />
      <Skills />
      <Education />
      <WhyWorkWithMe />
      <Testimonials />
      <Contact />
      <FooterSection />
      <Analytics />
    </div>
  );
}

export default App;
