import { motion } from "framer-motion";

export const Skills = () => {
  const skillSets = [
    { name: "Financial Auditing", percentage: 95 },
    { name: "GST Compliance", percentage: 95 },
    { name: "Taxation (Direct & Indirect)", percentage: 90 },
    { name: "Financial Reporting & MIS", percentage: 90 },
    { name: "Tally Prime", percentage: 95 },
    { name: "ERP Systems (Financial Modules)", percentage: 85 },
    { name: "Banking Audits & Systems", percentage: 85 },
    { name: "Risk Management & Compliance", percentage: 90 }
  ];

  return (
    <section id="skills" className="py-20 sm:py-28 bg-white dark:bg-navy-900 transition-colors duration-300 relative">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="text-xs font-bold uppercase tracking-widest text-gold-500 mb-3">
            Core Competencies
          </div>
          <h2 className="text-3xl sm:text-4xl font-sora font-extrabold text-navy-900 dark:text-white tracking-tight mb-4">
            Skills & Expertise
          </h2>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-normal">
            Specialized technical capability in taxation portals, corporate auditing tools, double-entry ledgers, banking interfaces, and compliance controls.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-5xl mx-auto">
          {skillSets.map((skill, idx) => (
            <div key={idx} className="flex flex-col">
              {/* Skill Labels */}
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                  {skill.name}
                </span>
                <span className="text-xs font-bold text-gold-600 dark:text-gold-400">
                  {skill.percentage}%
                </span>
              </div>
              
              {/* Outer Bar */}
              <div className="w-full h-2 bg-slate-100 dark:bg-navy-950 rounded-full overflow-hidden border border-slate-200/20 dark:border-navy-800/50">
                {/* Inner Animated Bar */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.percentage}%` }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 1, ease: "easeOut", delay: idx * 0.05 }}
                  className="h-full bg-gradient-to-r from-navy-900 via-gold-500 to-gold-400 dark:from-navy-800 dark:via-gold-500 dark:to-gold-400 rounded-full"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
