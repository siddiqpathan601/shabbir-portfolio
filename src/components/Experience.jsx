"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Calendar } from "lucide-react";

const experiences = [
  {
    id: 1,
    title: "Full Stack Developer Intern",
    company: "Trangla Innovations Pvt. Ltd",
    period: "June 2025 - November 2025",
    description: [
      "Built responsive UI components using React.js and Tailwind CSS.",
      "Improved code structure and modular design to enhance reusability.",
      "Integrated backend REST APIs and managed state flows efficiently.",
      "Optimized application rendering performance and asset delivery.",
      "Developed modern, mobile-responsive layouts ensuring cross-browser styling."
    ],
    technologies: ["React.js", "Tailwind CSS", "JavaScript ES6+", "REST APIs", "Git", "GitHub"],
    logo: "/trangla-logo.png"
  },
  {
    id: 2,
    title: "Machine Learning Intern",
    company: "SmartBridge Educational Services Pvt. Ltd",
    period: "June 2024 - December 2024",
    description: [
      "Completed a comprehensive 240-hour hands-on Machine Learning internship.",
      "Built a Liver Disease Prediction System based on patient medical records.",
      "Performed detailed weather and medical data preprocessing and feature engineering.",
      "Trained, fine-tuned, and evaluated multiple classification and regression models."
    ],
    technologies: ["Python", "Scikit-Learn", "Machine Learning", "Data Preprocessing", "Model Training", "Flask"],
    logo: "/smartbridge-logo.png"
  }
];

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-10% 0px -10% 0px" });
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('Experience');
      if (!section) return;

      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      const progress = Math.max(0, Math.min(1,
        (scrollPosition - sectionTop + windowHeight * 0.3) / (sectionHeight - windowHeight * 0.4)
      ));

      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="Experience" className="min-h-screen py-16 md:py-24 px-4 sm:px-6 bg-deepBlue relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 z-0 opacity-15">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-color1 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-color2/50 rounded-full blur-[150px]"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Work <span className="text-color2">Experience</span>
          </h2>
          <p className="text-[#989898] text-sm md:text-base max-w-xl mx-auto">
            My professional journey and key internships in web development and machine learning
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Vertical Center Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 transform translate-x-[-1px] z-0">
            <div className="absolute inset-0 bg-white/10"></div>
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-color1 to-color2"
              style={{
                height: `${scrollProgress * 100}%`,
              }}
              transition={{ type: "spring", stiffness: 50, damping: 20 }}
            />
          </div>

          {/* Timeline Items */}
          <div className="space-y-12 relative z-10">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className={`relative flex flex-col md:flex-row items-center md:items-start ${
                    isEven ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {/* Central Icon Circle */}
                  <div className="absolute left-4 md:left-1/2 top-0 w-12 h-12 md:w-14 md:h-14 bg-deepBlue rounded-full border-4 border-color1 transform md:translate-x-[-28px] z-20 flex items-center justify-center shadow-lg shadow-color1/20">
                    <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center bg-white p-0.5">
                      <img
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        className="w-full h-full object-contain rounded-full"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          const parent = e.currentTarget.parentElement;
                          if (parent) {
                            parent.innerHTML = `<div class="w-full h-full bg-color1 rounded-full flex items-center justify-center text-xs font-bold text-white">${exp.company.charAt(0)}</div>`;
                          }
                        }}
                      />
                    </div>
                  </div>

                  {/* Date Badge - Alternating Position */}
                  <div
                    className={`absolute top-3 md:top-4 z-20 ${
                      isEven
                        ? "left-20 md:left-[54%]"
                        : "left-20 md:left-auto md:right-[54%]"
                    }`}
                  >
                    <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1 rounded-full backdrop-blur-md">
                      <Calendar className="w-3.5 h-3.5 text-color2" />
                      <span className="text-[10px] md:text-xs text-white/80 font-medium whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  {/* Card Content - Alternating Position */}
                  <div
                    className={`w-full md:w-[45%] pl-20 pr-4 md:px-0 mt-14 md:mt-0 ${
                      isEven ? "md:pr-12 text-left" : "md:pl-12 text-left"
                    }`}
                  >
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="card-glass p-6 md:p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-color2/35 transition-all duration-300 shadow-xl"
                    >
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                        {exp.title}
                      </h3>
                      <h4 className="text-color2 font-semibold text-sm md:text-base mb-4">
                        {exp.company}
                      </h4>

                      <ul className="space-y-3 mb-6">
                        {exp.description.map((point, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2 text-white/70">
                            <span className="text-color2 mt-1 flex-shrink-0 text-xs">▸</span>
                            <span className="text-xs md:text-sm leading-relaxed">{point}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Badges */}
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                        {exp.technologies.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-0.5 bg-white/5 text-color2 text-[10px] md:text-xs rounded-full border border-white/10 font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}