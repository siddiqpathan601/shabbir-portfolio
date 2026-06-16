import { motion } from "framer-motion";
import {
  Calendar,
  Layers,
  CheckCircle,
  Users,
  Building,
  ShieldAlert
} from "lucide-react";

export const WhyWorkWithMe = () => {
  const cards = [
    {
      icon: <Calendar className="text-gold-500" size={24} />,
      title: "15+ Years Experience",
      description: "Over a decade and a half of dedicated experience in general accounting, tax advisory, statutory oversight, and financial administration."
    },
    {
      icon: <Layers className="text-gold-500" size={24} />,
      title: "Multi-Industry Knowledge",
      description: "Tested insights across manufacturing, healthcare providers, banking networks, insurance sectors, and government projects."
    },
    {
      icon: <CheckCircle className="text-gold-500" size={24} />,
      title: "Strong Compliance Expertise",
      description: "Up-to-date guidance on Indian GST rules, TDS filing mandates, income tax legislation, and public sector accounts."
    },
    {
      icon: <Users className="text-gold-500" size={24} />,
      title: "Audit Leadership Experience",
      description: "Capable of managing audit teams, implementing schedules, compiling reports, and communicating directly with leadership."
    },
    {
      icon: <Building className="text-gold-500" size={24} />,
      title: "Government & Banking Exposure",
      description: "Direct expertise conducting audits for district agencies (DRDA) and leading commercial/cooperative banks."
    },
    {
      icon: <ShieldAlert className="text-gold-500" size={24} />,
      title: "Hands-on Financial Controls",
      description: "Practical strategies for detecting financial leaks, assessing operational bottlenecks, and structuring internal controls."
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="whyme" className="py-20 sm:py-28 bg-white dark:bg-navy-900 transition-colors duration-300 relative">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="text-xs font-bold uppercase tracking-widest text-gold-500 mb-3">
            Why Choose Me
          </div>
          <h2 className="text-3xl sm:text-4xl font-sora font-extrabold text-navy-900 dark:text-white tracking-tight mb-4">
            Why Work With Me
          </h2>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-normal">
            Bringing rigorous compliance management, deep sector knowledge, and professional audit integrity to streamline business accounting.
          </p>
        </div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto"
        >
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-slate-50 dark:bg-navy-950 border border-slate-200/50 dark:border-navy-800/80 p-6 sm:p-8 rounded hover:border-gold-500/30 transition-all duration-300 flex flex-col group relative"
            >
              {/* Subtle hover accent */}
              <div className="absolute inset-x-0 bottom-0 h-1 bg-transparent group-hover:bg-gold-500 transition-colors rounded-b" />

              <div className="w-12 h-12 rounded bg-white dark:bg-navy-900 border border-slate-200/50 dark:border-navy-800 shadow-sm flex items-center justify-center mb-5 shrink-0 group-hover:scale-105 transition-transform duration-300">
                {card.icon}
              </div>
              
              <h3 className="text-sm sm:text-base font-sora font-extrabold text-navy-900 dark:text-white mb-3 tracking-tight">
                {card.title}
              </h3>
              
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-normal flex-1">
                {card.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
