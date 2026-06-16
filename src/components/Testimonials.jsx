import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

export const Testimonials = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const list = [
    {
      quote: "Shabbir directed our internal audit processes, streamlining our operational internal control protocols and proactively resolving compliance gaps. His deep understanding of healthcare service operations and tax filings helped us reduce financial risk significantly.",
      author: "Managing Director",
      organization: "Healthcare & IVF Clinic Group",
      context: "Internal Audit Oversight"
    },
    {
      quote: "During bank audit assignments, Mr. Noor Basha Shabbir Mohammed demonstrated exceptional vigilance and technical expertise. His audits on loans, NPAs, and statutory balances met absolute standard regulations and guidelines.",
      author: "Senior Branch Manager",
      organization: "Cooperative Banking Institution",
      context: "Banking Audit Assignment"
    },
    {
      quote: "We consulted Shabbir for our manufacturing cost reconciliations, inventory audits, and GST filings. His attention to detail, quick reconciliation cycles, and advisory saved our finance department days of manual ledger calculations.",
      author: "Chief Finance Officer",
      organization: "Hume Pipes Manufacturing Firm",
      context: "Tax & GST Consulting"
    }
  ];

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? list.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev === list.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-20 sm:py-28 bg-slate-50 dark:bg-navy-950 transition-colors duration-300 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-gold-500 mb-3">
            Client Feedback
          </div>
          <h2 className="text-3xl sm:text-4xl font-sora font-extrabold text-navy-900 dark:text-white tracking-tight">
            Professional Testimonials
          </h2>
        </div>

        {/* Testimonial Box */}
        <div className="relative bg-white dark:bg-navy-900 border border-slate-200/50 dark:border-navy-800 p-8 sm:p-12 rounded shadow-sm hover:shadow-lg transition-all duration-300">
          
          {/* Quote Icon */}
          <div className="absolute -top-5 left-8 w-10 h-10 bg-navy-900 dark:bg-gold-500 rounded flex items-center justify-center text-white dark:text-navy-950 shadow-md">
            <Quote size={18} />
          </div>

          <div className="min-h-[160px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col"
              >
                {/* Quote Text */}
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed italic font-normal mb-8">
                  &ldquo;{list[activeIdx].quote}&rdquo;
                </p>

                {/* Author Info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-slate-100 dark:border-navy-800/80">
                  <div>
                    <h4 className="text-sm sm:text-base font-sora font-extrabold text-navy-900 dark:text-white">
                      {list[activeIdx].author}
                    </h4>
                    <p className="text-xs font-semibold text-slate-400 dark:text-slate-500">
                      {list[activeIdx].organization}
                    </p>
                  </div>
                  
                  {/* Context Badge */}
                  <span className="inline-flex self-start sm:self-center px-2.5 py-1 rounded bg-gold-500/10 border border-gold-500/20 text-[10px] font-bold uppercase tracking-wider text-gold-600 dark:text-gold-400 shrink-0">
                    {list[activeIdx].context}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slider Controls */}
          <div className="flex items-center gap-3 justify-end mt-8">
            <button
              onClick={handlePrev}
              className="p-2 rounded bg-slate-100 hover:bg-slate-200 dark:bg-navy-950 dark:hover:bg-navy-800 text-slate-600 dark:text-slate-400 hover:text-navy-900 dark:hover:text-gold-400 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={16} />
            </button>
            
            <button
              onClick={handleNext}
              className="p-2 rounded bg-slate-100 hover:bg-slate-200 dark:bg-navy-950 dark:hover:bg-navy-800 text-slate-600 dark:text-slate-400 hover:text-navy-900 dark:hover:text-gold-400 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={16} />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
