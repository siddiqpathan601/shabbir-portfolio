import { motion } from "framer-motion";
import { CheckCircle2, Award, Briefcase, TrendingUp } from "lucide-react";

export const About = () => {
  const competencies = [
    "Internal Audit",
    "Financial Controls",
    "GST Compliance",
    "Income Tax & TDS",
    "Banking Audits",
    "Government Audits",
    "Financial Reporting",
    "Team Leadership"
  ];

  const highlights = [
    {
      icon: <Briefcase className="text-gold-500" size={20} />,
      title: "15+ Years Leadership",
      desc: "Managing corporate financial structures, leading auditing initiatives, and streamlining operations."
    },
    {
      icon: <Award className="text-gold-500" size={20} />,
      title: "Risk & Audit Expert",
      desc: "Extensive background resolving concurrent and statutory audits for leading national banks and government agencies."
    },
    {
      icon: <TrendingUp className="text-gold-500" size={20} />,
      title: "GST & Tax Specialist",
      desc: "In-depth proficiency in registrations, TDS filing, GST reconciliation, audits, and strategic tax planning."
    }
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-white dark:bg-navy-900 transition-colors duration-300 relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-slate-100 dark:bg-navy-950/20 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Core Description & Competencies */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col"
          >
            {/* Tagline */}
            <div className="text-xs font-bold uppercase tracking-widest text-gold-500 mb-3">
              Professional Profile
            </div>
            
            {/* Title */}
            <h2 className="text-3xl sm:text-4xl font-sora font-extrabold text-navy-900 dark:text-white tracking-tight leading-tight mb-6">
              Trusted Finance Professional with Proven Results
            </h2>
            
            {/* Narrative */}
            <div className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed space-y-4 font-normal mb-8">
              <p>
                Noor Basha Shabbir Mohammed is a senior finance and audit professional with more than fifteen years of experience in statutory audits, internal audits, taxation, compliance, financial reporting, and accounts management.
              </p>
              <p>
                He has worked across healthcare, manufacturing, insurance, banking, government projects, and commercial enterprises, helping organizations strengthen controls, improve compliance, and reduce financial risk.
              </p>
            </div>
            
            {/* Highlighted Competencies Checklist */}
            <div>
              <h3 className="text-xs uppercase font-bold text-navy-900 dark:text-slate-200 tracking-wider mb-4">
                Core Competencies
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {competencies.map((comp, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <CheckCircle2 size={16} className="text-gold-500 shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                      {comp}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Visual highlights boxes */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {highlights.map((hl, i) => (
              <div
                key={i}
                className="bg-slate-50 dark:bg-navy-950 border border-slate-200/50 dark:border-navy-800 p-5 sm:p-6 rounded hover:border-gold-500/30 transition-all duration-300 relative group"
              >
                {/* Visual anchor line on left side */}
                <div className="absolute top-0 bottom-0 left-0 w-1 bg-transparent group-hover:bg-gold-500 transition-colors rounded-l" />
                
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-white dark:bg-navy-900 border border-slate-200/50 dark:border-navy-800 rounded shadow-sm shrink-0">
                    {hl.icon}
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-sora font-bold text-navy-900 dark:text-white tracking-tight mb-1">
                      {hl.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-normal">
                      {hl.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};
