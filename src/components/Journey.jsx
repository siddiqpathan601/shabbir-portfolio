import { motion } from "framer-motion";
import { Briefcase, Calendar, CheckCircle } from "lucide-react";

export const Journey = () => {
  const experiences = [
    {
      role: "Internal Auditor & Audit Department Head",
      company: "Krishna IVF Clinic Pvt Ltd",
      duration: "Current",
      duties: [
        "Lead internal audit functions across operations, medical services, and administrative divisions.",
        "Evaluate internal controls and structure risk-mitigation measures to avoid leakage.",
        "Manage, mentor, and allocate schedules for the internal audit teams.",
        "Compile and present comprehensive audit reports and insights directly to executive management.",
        "Monitor adherence to medical compliance, tax regulations, and internal standard operating procedures."
      ]
    },
    {
      role: "Senior Accounts & Audit Executive",
      company: "Bharat Electronics Limited (BEL)",
      duration: "4 Years",
      duties: [
        "Conducted statutory and internal audits, verifying ledgers and vouchers.",
        "Investigated transaction accuracy to assure full financial ledger reconciliation.",
        "Managed compliance audits ensuring compliance with public sector financial frameworks.",
        "Reviewed governmental accounting rules, reporting on budget variances and compliance gaps."
      ]
    },
    {
      role: "Accounts & Audit Officer",
      company: "National Insurance Company",
      duration: "2 Years",
      duties: [
        "Managed insurer accounting, premium collection reconciliation, and policy claims auditing.",
        "Prepared periodic financial reports and claims processing sheets for management reviews.",
        "Supervised quarterly TDS calculation, withholding compliance, and tax filing.",
        "Analyzed operational spreadsheets to verify agent commission and brokerage allocations."
      ]
    },
    {
      role: "Senior Accountant",
      company: "Mohammad Enterprises",
      duration: "5 Years",
      duties: [
        "Filing monthly/yearly GST returns and completing commercial GST reconciliation.",
        "Prepared corporate payroll schedules, compliance filings, and employee benefit distributions.",
        "Managed vendor relations, accounts payable logs, and supply chain ledger clearances.",
        "Conducted weekly bank reconciliations and cash flow statements."
      ]
    },
    {
      role: "Accounts Executive",
      company: "Jaya Hume Pipes",
      duration: "3 Years",
      duties: [
        "Handled manufacturing-focused cost accounting, raw materials inventory logs, and product costing.",
        "Prepared preliminary balance sheets and profit & loss reports.",
        "Conducted quarterly income tax computations and prepared compliance sheets.",
        "Ensured rigorous TDS compliance for vendors and contractors."
      ]
    }
  ];

  return (
    <section id="journey" className="py-20 sm:py-28 bg-white dark:bg-navy-900 transition-colors duration-300 relative">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="text-xs font-bold uppercase tracking-widest text-gold-500 mb-3">
            Career Timeline
          </div>
          <h2 className="text-3xl sm:text-4xl font-sora font-extrabold text-navy-900 dark:text-white tracking-tight mb-4">
            Professional Journey
          </h2>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-normal">
            Over fifteen years of dedicated accounting leadership, tax consulting, and auditing execution in leading private, corporate, and public sector organizations.
          </p>
        </div>

        {/* Timeline Track */}
        <div className="relative border-l border-slate-200 dark:border-navy-800 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className="relative group"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 w-6 h-6 rounded-full bg-slate-50 dark:bg-navy-900 border-2 border-slate-200 dark:border-navy-800 flex items-center justify-center group-hover:border-gold-500 transition-colors duration-300">
                <Briefcase size={10} className="text-slate-400 group-hover:text-gold-500 transition-colors" />
              </div>

              {/* Box */}
              <div className="bg-slate-50 dark:bg-navy-950 border border-slate-200/50 dark:border-navy-800 p-5 sm:p-8 rounded hover:border-gold-500/25 transition-all duration-300 shadow-sm relative">
                {/* Visual Top Highlight Accent */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-transparent group-hover:bg-gold-500 transition-colors rounded-t" />

                {/* Meta details */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-base sm:text-lg font-sora font-extrabold text-navy-900 dark:text-white tracking-tight">
                      {exp.role}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-gold-600 dark:text-gold-400 mt-0.5">
                      {exp.company}
                    </p>
                  </div>
                  
                  {/* Tag Duration */}
                  <span className="inline-flex items-center gap-1 self-start sm:self-center px-2.5 py-1 rounded bg-slate-200/60 dark:bg-navy-900 border border-slate-300/30 dark:border-navy-800 text-[11px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 shrink-0">
                    <Calendar size={12} className="text-slate-500 dark:text-slate-400" />
                    {exp.duration}
                  </span>
                </div>

                {/* Duty Bullets */}
                <ul className="space-y-2.5">
                  {exp.duties.map((duty, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                      <CheckCircle size={14} className="text-gold-500 shrink-0 mt-0.5" />
                      <span>{duty}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
