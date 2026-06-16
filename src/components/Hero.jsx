import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Shield } from "lucide-react";
import shabbirImage from "../assets/images/shabbir.jpg";
import resumePdf from "../assets/doc/Shabbir_Mohammed_Resume.pdf";

export const Hero = ({ theme }) => {
  const stats = [
    { value: "15+", label: "Years Experience", description: "Audit & Accounts Leadership" },
    { value: "100+", label: "Audit Assignments", description: "Internal, Bank & Govt Audits" },
    { value: "Multi-Industry", label: "Sector Expertise", description: "Healthcare, Mfg, Banking, Ins." },
    { value: "GST & Tax", label: "Specialist", description: "Filing, Reconciliation & Advisory" }
  ];

  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
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
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } }
  };

  return (
    <section
      id="home"
      className={`min-h-screen relative flex items-center justify-center pt-24 pb-16 overflow-hidden ${theme === "dark" ? "mesh-gradient-bg" : "light-theme-mesh"
        }`}
    >
      {/* Decorative ambient elements */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-gold-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-navy-500/15 dark:bg-navy-400/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Outer Container */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Copy Column */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col justify-center text-left"
        >
          {/* Headline with sequential line reveal */}
          <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-sora font-extrabold tracking-tight text-navy-900 dark:text-white leading-[1.2] mb-6 overflow-hidden">
            <span className="block overflow-hidden relative pb-1">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="block"
              >
                Helping Businesses Build
              </motion.span>
            </span>
            <span className="block overflow-hidden relative pb-1">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="block text-transparent bg-clip-text bg-gradient-to-r from-gold-500 via-gold-400 to-slate-500 dark:to-slate-400"
              >
                Financial Confidence
              </motion.span>
            </span>
            <span className="block overflow-hidden relative pb-1">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                className="block"
              >
                Through Audit, Tax & Compliance.
              </motion.span>
            </span>
          </h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
            className="text-slate-600 dark:text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed font-normal max-w-2xl mb-8"
          >
            Senior Finance Consultant with 15+ years of experience delivering Internal Audit, GST Compliance, Taxation, Risk Management, Financial Reporting, and Strategic Advisory services across diverse industries.
          </motion.p>

          {/* CTA Row */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.75 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 flex-wrap"
          >
            <motion.a
              href="#contact"
              onClick={(e) => handleScrollTo(e, "#contact")}
              whileHover={{ 
                scale: 1.02, 
                boxShadow: "0 0 20px rgba(197, 168, 128, 0.45)"
              }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center bg-navy-900 hover:bg-navy-800 dark:bg-gold-500 dark:hover:bg-gold-600 text-white dark:text-navy-950 px-6 py-3.5 rounded text-xs font-bold uppercase tracking-wider transition-all duration-200 group gap-2 shadow-xl shadow-navy-900/10 dark:shadow-gold-500/10 border border-transparent dark:border-gold-400/20"
            >
              Secure Your Risk Assessment
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </motion.a>
            
            <motion.a
              href={resumePdf}
              download="Shabbir_Mohammed_Resume.pdf"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 0 20px rgba(197, 168, 128, 0.3)"
              }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center bg-slate-900 text-white dark:bg-navy-800 dark:text-white px-6 py-3.5 rounded text-xs font-bold uppercase tracking-wider transition-all duration-200 gap-1 border border-slate-700 dark:border-navy-700"
            >
              Download Resume
            </motion.a>

            <motion.a
              href="#journey"
              onClick={(e) => handleScrollTo(e, "#journey")}
              className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 hover:text-gold-500 dark:hover:text-gold-400 transition-colors duration-200 underline underline-offset-4 pl-2"
            >
              Review Track Record
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Stats & Placeholder Graphic Column */}
        <div className="lg:col-span-5 relative w-full flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[420px] aspect-[4/5] rounded bg-navy-900/40 dark:bg-navy-900/60 border border-slate-200/50 dark:border-navy-800/80 backdrop-blur-md p-6 flex flex-col justify-between shadow-2xl overflow-hidden"
          >
            {/* Ambient gold glow on card */}
            <div className="absolute -top-20 -right-20 w-44 h-44 bg-gold-500/20 rounded-full blur-[40px] pointer-events-none" />

            {/* Consulting aesthetics grids */}
            <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />

            {/* Corporate Portrait Image */}
            <div className="w-full flex-1 flex flex-col justify-center items-center relative z-10 mb-6">
              {/* Circular Image Frame */}
              <div className="w-44 h-44 rounded-full border-2 border-gold-500 overflow-hidden shadow-xl mb-4 relative group">
                <img
                  src={shabbirImage}
                  alt="Noor Basha Shabbir Mohammed Portrait"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Credentials Text */}
              <div className="text-center">
                <h3 className="text-base font-sora font-extrabold text-white tracking-tight">
                  Noor Basha Shabbir Mohammed
                </h3>
                <p className="text-xs font-semibold text-slate-200 dark:text-gold-500 mt-1 uppercase tracking-wider">
                  Senior Finance & Audit Consultant
                </p>
              </div>
            </div>

            {/* Metrics Grid Overlay */}
            <div className="grid grid-cols-2 gap-3 relative z-10">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-white/80 dark:bg-navy-950/80 border border-slate-100 dark:border-navy-800 p-3 rounded hover:border-gold-500/40 dark:hover:border-gold-500/30 transition-all duration-300 group"
                >
                  <div className="text-xl font-sora font-extrabold text-navy-900 dark:text-gold-500 tracking-tight group-hover:scale-105 transition-transform origin-left">
                    {stat.value}
                  </div>
                  <div className="text-[11px] font-bold text-slate-800 dark:text-slate-200 tracking-tight mt-0.5">
                    {stat.label}
                  </div>
                  <div className="text-[9px] text-slate-500 dark:text-slate-400 font-medium mt-0.5 line-clamp-1">
                    {stat.description}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
