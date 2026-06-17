import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
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
import { ScheduleConsultation } from "./components/ScheduleConsultation";
import { Analytics } from "@vercel/analytics/react";

function App() {
  const [theme, setTheme] = useState(() => {
    // Default to dark theme for that premium luxury look, but respect local storage if set
    const saved = localStorage.getItem("theme");
    return saved || "dark";
  });

  const location = useLocation();

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

  // Handle scrolling to sections if the user landed on home page with a hash tag (e.g. from /schedule-consultation)
  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          const offset = 80;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 100);
    }
  }, [location]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-navy-950 text-slate-900 dark:text-slate-100 font-inter transition-colors duration-300 selection:bg-gold-200 dark:selection:bg-gold-800/50 relative overflow-x-hidden">
      {/* Premium subtle layout grids */}
      <div className="absolute inset-0 grid-pattern pointer-events-none z-0" />
      
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      <Routes>
        <Route 
          path="/" 
          element={
            <>
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
            </>
          } 
        />
        <Route 
          path="/schedule-consultation" 
          element={
            <ScheduleConsultation theme={theme} />
          } 
        />
      </Routes>

      <FooterSection />
      <Analytics />
    </div>
  );
}

export default App;
