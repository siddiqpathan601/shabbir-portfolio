import { motion } from "framer-motion";
import { Landmark, Shield, LandmarkIcon, CheckSquare } from "lucide-react";

export const AuditExperience = () => {
  const bankingClients = [
    "Canara Bank",
    "Syndicate Bank",
    "Karnataka Bank",
    "Tamilnad Mercantile Bank",
    "Chaitanya Godavari Grameena Bank",
    "Krishna District Cooperative Central Bank",
    "Mahesh Cooperative Urban Bank"
  ];

  const govAuditNotes = [
    "Audit execution across multiple Andhra Pradesh mandals, checking regulatory compliance and program integrity.",
    "Verification of scheme fund distributions, micro-finance allocations, and rural development spending audits.",
    "Comprehensive verification of voucher disbursements, eligibility lists, and bank account reconciliations."
  ];

  return (
    <section id="audits" className="py-20 sm:py-28 bg-slate-50 dark:bg-navy-950 transition-colors duration-300 relative">
      <div className="absolute top-10 left-10 w-96 h-96 bg-navy-500/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="text-xs font-bold uppercase tracking-widest text-gold-500 mb-3">
            Case Audits & Assignments
          </div>
          <h2 className="text-3xl sm:text-4xl font-sora font-extrabold text-navy-900 dark:text-white tracking-tight mb-4">
            Audit Experience
          </h2>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-normal">
            Proven track record auditing key financial operations, loan disbursements, scheme distribution balances, and compliance controls across major public sector banks and government organizations.
          </p>
        </div>

        {/* Audit Sections Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card 1: Banking Audit Assignments */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="bg-white dark:bg-navy-900 border border-slate-200/50 dark:border-navy-800 p-6 sm:p-8 rounded hover:border-gold-500/25 transition-all duration-300 flex flex-col justify-between shadow-sm relative group"
          >
            <div>
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-12 h-12 rounded bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-500 shrink-0">
                  <Landmark size={24} />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-sora font-extrabold text-navy-900 dark:text-white tracking-tight">
                    Banking Audit Assignments
                  </h3>
                  <p className="text-xs text-slate-400 dark:text-slate-400 font-medium">
                    Concurrent & Statutory Audits
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-normal mb-6">
                Conducted concurrent, statutory, revenue leakage, operational processes, asset classification, and NPA provisioning audits for major nationalized and cooperative banking institutions.
              </p>

              <div className="flex flex-wrap gap-2.5">
                {bankingClients.map((bank, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-slate-50 dark:bg-navy-950 border border-slate-200/60 dark:border-navy-800 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-gold-500 dark:hover:text-gold-400 hover:border-gold-500/30 transition-all cursor-default"
                  >
                    <LandmarkIcon size={12} className="text-gold-500/80" />
                    {bank}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card 2: Government Audit Assignments */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="bg-white dark:bg-navy-900 border border-slate-200/50 dark:border-navy-800 p-6 sm:p-8 rounded hover:border-gold-500/25 transition-all duration-300 flex flex-col justify-between shadow-sm relative group"
          >
            <div>
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-12 h-12 rounded bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-500 shrink-0">
                  <Shield size={24} />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-sora font-extrabold text-navy-900 dark:text-white tracking-tight">
                    Government Audit Assignments
                  </h3>
                  <p className="text-xs text-slate-400 dark:text-slate-400 font-medium">
                    District Rural Development Agency (DRDA)
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-navy-900 dark:bg-gold-500/10 border border-transparent dark:border-gold-500/20 text-[10px] font-bold uppercase tracking-wider text-white dark:text-gold-400 mb-4">
                  Scheme Fund Verification
                </span>
                
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-normal mb-5">
                  Assigned by the DRDA to conduct financial audits across multiple mandals in Andhra Pradesh, checking the validity, disbursement records, and compliance profiles of government scheme funds.
                </p>
              </div>

              <ul className="space-y-3">
                {govAuditNotes.map((note, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    <CheckSquare size={14} className="text-gold-500 shrink-0 mt-0.5" />
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
