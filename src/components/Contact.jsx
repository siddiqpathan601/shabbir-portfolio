import { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[0-9\s-]{10,14}$/.test(formData.phone.replace(/\s+/g, ""))) {
      newErrors.phone = "Please enter a valid phone number";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError("");

    try {
      const response = await fetch("/api/consultation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.company 
            ? `Company: ${formData.company}\n\n${formData.message}`
            : formData.message
        })
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          message: ""
        });
        setTimeout(() => setSubmitSuccess(false), 5000);
      } else {
        setSubmitError(data.error || "Failed to send your message. Please try again.");
      }
    } catch (err) {
      setSubmitError("Could not connect to the mail server. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-white dark:bg-navy-900 transition-colors duration-300 relative">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="text-xs font-bold uppercase tracking-widest text-gold-500 mb-3">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-sora font-extrabold text-navy-900 dark:text-white tracking-tight mb-4">
            Let's Strengthen Your Financial Operations
          </h2>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-normal">
            Reach out to discuss audit schedules, compliance assessments, GST reconciliations, or ongoing accounts consulting agreements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 max-w-6xl mx-auto items-start">
          
          {/* Left: Contact Info Sidebar */}
          <div className="lg:col-span-5 flex flex-col gap-6 sm:gap-8">
            <div className="bg-slate-50 dark:bg-navy-950 border border-slate-200/50 dark:border-navy-800 p-6 sm:p-8 rounded shadow-sm">
              <h3 className="text-base sm:text-lg font-sora font-extrabold text-navy-900 dark:text-white tracking-tight mb-6">
                Consulting Office
              </h3>
              
              <div className="flex flex-col gap-6">
                
                {/* Phone */}
                <a
                  href="tel:+919182674949"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded bg-white dark:bg-navy-900 border border-slate-200/50 dark:border-navy-800 flex items-center justify-center text-slate-600 dark:text-slate-400 group-hover:text-gold-500 group-hover:border-gold-500/30 transition-all shadow-sm shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider">
                      Call Direct
                    </span>
                    <span className="text-sm sm:text-base font-bold text-navy-900 dark:text-white group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors">
                      +91 9182674949
                    </span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:shabbirmsb@gmail.com"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded bg-white dark:bg-navy-900 border border-slate-200/50 dark:border-navy-800 flex items-center justify-center text-slate-600 dark:text-slate-400 group-hover:text-gold-500 group-hover:border-gold-500/30 transition-all shadow-sm shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider">
                      Email Address
                    </span>
                    <span className="text-sm sm:text-base font-bold text-navy-900 dark:text-white group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors break-all">
                      shabbirmsb@gmail.com
                    </span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded bg-white dark:bg-navy-900 border border-slate-200/50 dark:border-navy-800 flex items-center justify-center text-slate-600 dark:text-slate-400 shadow-sm shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider">
                      Location
                    </span>
                    <span className="text-sm sm:text-base font-bold text-navy-900 dark:text-white">
                      Guntur, Andhra Pradesh, India
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Advisory Note */}
            <div className="p-5 sm:p-6 border border-dashed border-slate-300 dark:border-navy-800 rounded bg-slate-50/50 dark:bg-navy-950/20">
              <h4 className="text-xs uppercase font-bold text-navy-900 dark:text-slate-200 tracking-wider mb-2">
                Advisory Standards
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-normal">
                Consultations are governed by the highest auditing standards, keeping corporate finance structures confidential and compliant with statutory oversight regulations.
              </p>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 sm:gap-6 bg-slate-50 dark:bg-navy-950 border border-slate-200/50 dark:border-navy-800 p-6 sm:p-8 rounded shadow-sm">
              <h3 className="text-base sm:text-lg font-sora font-extrabold text-navy-900 dark:text-white tracking-tight mb-2">
                Consultation Request Form
              </h3>

              {submitSuccess && (
                <div className="flex items-center gap-3 p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs sm:text-sm rounded">
                  <CheckCircle2 size={18} className="shrink-0" />
                  <span>Your request was sent successfully. I will get back to you shortly.</span>
                </div>
              )}

              {submitError && (
                <div className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/20 text-red-700 dark:text-red-400 text-xs sm:text-sm rounded">
                  <AlertCircle size={18} className="shrink-0" />
                  <span>{submitError}</span>
                </div>
              )}

              {/* Grid 2 Columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                
                {/* Name */}
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wider">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`px-4 py-2.5 rounded bg-white dark:bg-navy-900 border ${
                      errors.name ? "border-red-500 focus:ring-red-500" : "border-slate-200 dark:border-navy-800 focus:border-gold-500 dark:focus:border-gold-400"
                    } text-xs sm:text-sm text-slate-800 dark:text-white focus:outline-none focus:ring-1 focus:ring-gold-500 transition-all`}
                    placeholder="Enter your name"
                  />
                  {errors.name && (
                    <span className="flex items-center gap-1 text-[11px] text-red-500 mt-1 font-medium">
                      <AlertCircle size={10} />
                      {errors.name}
                    </span>
                  )}
                </div>

                {/* Company */}
                <div className="flex flex-col">
                  <label htmlFor="company" className="text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wider">
                    Company / Firm
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="px-4 py-2.5 rounded bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 focus:border-gold-500 dark:focus:border-gold-400 text-xs sm:text-sm text-slate-800 dark:text-white focus:outline-none focus:ring-1 focus:ring-gold-500 transition-all"
                    placeholder="Enter organization name"
                  />
                </div>

              </div>

              {/* Grid 2 Columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                
                {/* Email */}
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wider">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`px-4 py-2.5 rounded bg-white dark:bg-navy-900 border ${
                      errors.email ? "border-red-500 focus:ring-red-500" : "border-slate-200 dark:border-navy-800 focus:border-gold-500 dark:focus:border-gold-400"
                    } text-xs sm:text-sm text-slate-800 dark:text-white focus:outline-none focus:ring-1 focus:ring-gold-500 transition-all`}
                    placeholder="name@company.com"
                  />
                  {errors.email && (
                    <span className="flex items-center gap-1 text-[11px] text-red-500 mt-1 font-medium">
                      <AlertCircle size={10} />
                      {errors.email}
                    </span>
                  )}
                </div>

                {/* Phone */}
                <div className="flex flex-col">
                  <label htmlFor="phone" className="text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wider">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`px-4 py-2.5 rounded bg-white dark:bg-navy-900 border ${
                      errors.phone ? "border-red-500 focus:ring-red-500" : "border-slate-200 dark:border-navy-800 focus:border-gold-500 dark:focus:border-gold-400"
                    } text-xs sm:text-sm text-slate-800 dark:text-white focus:outline-none focus:ring-1 focus:ring-gold-500 transition-all`}
                    placeholder="+91 XXXXX XXXXX"
                  />
                  {errors.phone && (
                    <span className="flex items-center gap-1 text-[11px] text-red-500 mt-1 font-medium">
                      <AlertCircle size={10} />
                      {errors.phone}
                    </span>
                  )}
                </div>

              </div>

              {/* Message */}
              <div className="flex flex-col">
                <label htmlFor="message" className="text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wider">
                  Brief Inquiry / Requirements *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className={`px-4 py-2.5 rounded bg-white dark:bg-navy-900 border ${
                    errors.message ? "border-red-500 focus:ring-red-500" : "border-slate-200 dark:border-navy-800 focus:border-gold-500 dark:focus:border-gold-400"
                  } text-xs sm:text-sm text-slate-800 dark:text-white focus:outline-none focus:ring-1 focus:ring-gold-500 transition-all resize-none`}
                  placeholder="Describe your tax, compliance, or audit advisory requirements..."
                />
                {errors.message && (
                  <span className="flex items-center gap-1 text-[11px] text-red-500 mt-1 font-medium">
                    <AlertCircle size={10} />
                    {errors.message}
                  </span>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center bg-navy-900 hover:bg-navy-800 dark:bg-gold-500 dark:hover:bg-gold-600 disabled:bg-slate-300 dark:disabled:bg-navy-850 text-white dark:text-navy-950 py-3 rounded text-xs font-bold uppercase tracking-wider transition-all duration-200 gap-2 cursor-pointer shadow hover:shadow-lg disabled:cursor-not-allowed group border border-transparent dark:border-gold-400/20"
              >
                {isSubmitting ? (
                  "Sending Request..."
                ) : (
                  <>
                    Send Message
                    <Send size={12} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                  </>
                )}
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};
