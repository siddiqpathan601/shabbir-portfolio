import { Linkedin, Mail, Phone, ArrowUp, Shield } from "lucide-react";
import resumePdf from "../assets/doc/Shabbir_Mohammed_Resume.pdf";

export const FooterSection = () => {
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Journey", href: "#journey" },
    { name: "Audits", href: "#audits" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="bg-navy-950 text-slate-400 border-t border-navy-800 transition-colors duration-300 relative z-10">
      
      {/* Top Footer Panel */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12">
        
        {/* Left Brand Column */}
        <div className="md:col-span-5 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-gold-500 rounded flex items-center justify-center text-navy-950">
              <Shield size={16} />
            </div>
            <span className="text-white font-sora font-bold text-sm tracking-tight">
              Noor Basha Shabbir Mohammed
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 font-semibold leading-relaxed max-w-sm">
            Senior Finance & Accounts Professional | Internal Auditor | GST & Tax Consultant | Financial Compliance Specialist
          </p>
          <p className="text-xs text-slate-500 font-normal leading-relaxed max-w-sm">
            Providing audit clarity, statutory tax reconciliations, risk assessment reports, and ledger compliance oversight to companies nationwide.
          </p>
        </div>

        {/* Center Links Column */}
        <div className="md:col-span-3 flex flex-col gap-4">
          <h4 className="text-xs uppercase font-extrabold text-white tracking-widest">
            Sitemap Index
          </h4>
          <nav className="grid grid-cols-2 gap-x-4 gap-y-2.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs text-slate-400 hover:text-gold-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="mt-1 pt-3 border-t border-navy-800">
            <a
              href={resumePdf}
              download="Shabbir_Mohammed_Resume.pdf"
              className="text-xs text-gold-500 hover:text-gold-400 font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-1"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Right Contact Details Column */}
        <div className="md:col-span-4 flex flex-col gap-4">
          <h4 className="text-xs uppercase font-extrabold text-white tracking-widest">
            Direct Contacts
          </h4>
          <div className="flex flex-col gap-2.5 text-xs">
            <a href="tel:+919182674949" className="hover:text-gold-400 transition-colors">
              +91 9182674949
            </a>
            <a href="mailto:shabbirmsb@gmail.com" className="hover:text-gold-400 transition-colors break-all">
              shabbirmsb@gmail.com
            </a>
            <span className="text-slate-500">
              Guntur, Andhra Pradesh, India
            </span>
          </div>

          {/* Social Row */}
          <div className="flex items-center gap-3 mt-4">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded bg-navy-900 border border-navy-850 hover:border-gold-500/40 text-slate-400 hover:text-gold-400 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={14} />
            </a>
            <a
              href="mailto:shabbirmsb@gmail.com"
              className="p-2 rounded bg-navy-900 border border-navy-850 hover:border-gold-500/40 text-slate-400 hover:text-gold-400 transition-colors"
              aria-label="Email Client"
            >
              <Mail size={14} />
            </a>
            <a
              href="tel:+919182674949"
              className="p-2 rounded bg-navy-900 border border-navy-850 hover:border-gold-500/40 text-slate-400 hover:text-gold-400 transition-colors"
              aria-label="Call Mobile"
            >
              <Phone size={14} />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Legal Panel */}
      <div className="border-t border-navy-900/60 bg-navy-950/60 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-normal">
          <span>
            Copyright &copy; {new Date().getFullYear()} Noor Basha Shabbir Mohammed. All rights reserved.
          </span>
          <div className="flex items-center gap-6">
            <span className="text-slate-600">ICAI Member Oversight Compliant</span>
            <button
              onClick={handleScrollTop}
              className="inline-flex items-center gap-1.5 text-slate-400 hover:text-gold-400 transition-colors group cursor-pointer"
            >
              Back to Top
              <ArrowUp size={12} className="transition-transform group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </div>

    </footer>
  );
};
