import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar, BookOpen } from "lucide-react";

export const Education = () => {
  const credentials = [
    {
      degree: "CA Inter (Group I Cleared)",
      institution: "Institute of Chartered Accountants of India (ICAI)",
      year: "2009",
      description: "Rigorous corporate training, statutory law auditing, advanced accounting standards, and direct tax compliance qualifications."
    },
    {
      degree: "MBA Finance",
      institution: "Indira Gandhi National Open University (IGNOU)",
      year: "2016",
      description: "Specialized in financial management, portfolio evaluations, business analytics, risk advisory schemes, and working capital strategy."
    },
    {
      degree: "B.Com",
      institution: "Acharya Nagarjuna University",
      year: "2011",
      description: "Fundamental training in business commerce, industrial taxation, accounting math, mercantile legislation, and banking practices."
    }
  ];

  return (
    <section id="education" className="py-20 sm:py-28 bg-slate-50 dark:bg-navy-950 transition-colors duration-300 relative">
      <div className="absolute top-0 left-0 w-96 h-96 bg-navy-500/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="text-xs font-bold uppercase tracking-widest text-gold-500 mb-3">
            Academic Background
          </div>
          <h2 className="text-3xl sm:text-4xl font-sora font-extrabold text-navy-900 dark:text-white tracking-tight mb-4">
            Education & Qualifications
          </h2>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-normal">
            Strong foundation in corporate finance, advanced accounting practices, and legal framework compliance.
          </p>
        </div>

        {/* Credentials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {credentials.map((cred, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white dark:bg-navy-900 border border-slate-200/50 dark:border-navy-800 p-6 sm:p-8 rounded hover:border-gold-500/30 transition-all duration-300 flex flex-col justify-between shadow-sm relative group"
            >
              {/* Gold Top Border Effect */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-gold-500 transition-colors rounded-t" />

              <div>
                {/* Header Row */}
                <div className="flex justify-between items-start gap-4 mb-5">
                  <div className="w-10 h-10 rounded bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-500 shrink-0">
                    {idx === 0 ? <Award size={20} /> : <GraduationCap size={20} />}
                  </div>
                  
                  {/* Calendar Badge */}
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-slate-100 dark:bg-navy-950 border border-slate-200/50 dark:border-navy-800 text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    <Calendar size={10} />
                    {cred.year}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-sora font-extrabold text-navy-900 dark:text-white mb-2 leading-snug tracking-tight">
                  {cred.degree}
                </h3>
                
                <p className="text-xs font-semibold text-gold-600 dark:text-gold-400 mb-4 uppercase tracking-wider">
                  {cred.institution}
                </p>
                
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-normal">
                  {cred.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
