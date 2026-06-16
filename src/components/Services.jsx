import { motion } from "framer-motion";
import {
  ClipboardCheck,
  FileSpreadsheet,
  Calculator,
  BarChart3,
  Landmark,
  ShieldCheck
} from "lucide-react";

export const Services = () => {
  const servicesList = [
    {
      icon: <ClipboardCheck size={28} className="text-gold-500" />,
      title: "Internal Audit",
      description: "Comprehensive risk assessments, operational process reviews, internal control evaluations, and compliance audits to prevent leaks and maximize productivity."
    },
    {
      icon: <FileSpreadsheet size={28} className="text-gold-500" />,
      title: "GST Compliance",
      description: "Stress-free GST registrations, periodic filing (GSTR-1, 3B, 9, 9C), thorough input tax credit (ITC) reconciliation, and compliance management."
    },
    {
      icon: <Calculator size={28} className="text-gold-500" />,
      title: "Income Tax & TDS",
      description: "Structured income tax return filing, strategic corporate & individual tax planning, timely TDS deductions & filings, and audit representation."
    },
    {
      icon: <BarChart3 size={28} className="text-gold-500" />,
      title: "Financial Reporting",
      description: "Accurate preparation of balance sheets, profit & loss statements, MIS reporting, working capital management, and management dashboard creation."
    },
    {
      icon: <Landmark size={28} className="text-gold-500" />,
      title: "Banking Audits",
      description: "Specialized concurrent audits, statutory audits, stock & receivable audits, revenue leakage audits, and operational risk assessments for leading financial institutions."
    },
    {
      icon: <ShieldCheck size={28} className="text-gold-500" />,
      title: "Government Audits",
      description: "Targeted verification of scheme funds, compliance evaluations, and statutory audits (e.g., DRDA audits) for public departments and local bodies."
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
    }
  };

  return (
    <section id="services" className="py-20 sm:py-28 bg-slate-50 dark:bg-navy-950 transition-colors duration-300 relative">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="text-xs font-bold uppercase tracking-widest text-gold-500 mb-3">
            What I Offer
          </div>
          <h2 className="text-3xl sm:text-4xl font-sora font-extrabold text-navy-900 dark:text-white tracking-tight mb-4">
            Core Financial & Audit Services
          </h2>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-normal">
            Delivering robust financial compliance, strategic risk management, and rigorous audit frameworks that safeguard assets and optimize corporate accounting workflows.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {servicesList.map((service, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="bg-white dark:bg-navy-900 border border-slate-200/60 dark:border-navy-800 p-6 sm:p-8 rounded hover:border-gold-500/40 dark:hover:border-gold-500/30 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group relative"
            >
              {/* Gold light glow in background */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold-500/0 via-gold-500/0 to-gold-500/5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              {/* Icon Container */}
              <div className="w-12 h-12 rounded bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300 shrink-0">
                {service.icon}
              </div>

              {/* Card Title */}
              <h3 className="text-base sm:text-lg font-sora font-extrabold text-navy-900 dark:text-white mb-3 tracking-tight">
                {service.title}
              </h3>

              {/* Card Description */}
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-normal flex-1">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
