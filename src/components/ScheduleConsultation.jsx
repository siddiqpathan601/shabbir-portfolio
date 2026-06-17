import { useState, useEffect } from "react";
import { 
  motion, 
  AnimatePresence 
} from "framer-motion";
import { 
  User, 
  Mail, 
  Phone, 
  Building, 
  Briefcase, 
  Calendar, 
  Clock, 
  FileText, 
  ChevronRight, 
  ShieldCheck, 
  MapPin, 
  Linkedin, 
  Send, 
  Loader2, 
  CheckCircle2, 
  AlertCircle, 
  ArrowLeft,
  Sparkles,
  Award,
  Globe,
  Star
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export const ScheduleConsultation = ({ theme }) => {
  const navigate = useNavigate();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    role: "",
    industryType: "",
    businessSize: "Small Business",
    serviceRequired: "Internal Audit",
    consultationMode: "Online Meeting",
    preferredDate: "",
    preferredTime: "",
    requirementDescription: "",
    currentChallenges: "",
    additionalNotes: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'
  const [submitError, setSubmitError] = useState("");

  const services = [
    "Internal Audit",
    "GST Compliance",
    "Taxation Advisory",
    "Financial Reporting",
    "Risk Assessment",
    "Business Advisory",
    "Accounts & Compliance",
    "Other"
  ];

  const businessSizes = [
    "Startup",
    "Small Business",
    "Medium Enterprise",
    "Large Enterprise"
  ];

  const consultationModes = [
    "Online Meeting",
    "Phone Call",
    "In-Person Meeting"
  ];

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Mobile number is required";
    } else if (!/^\+?[0-9\s-]{10,14}$/.test(formData.phone.replace(/\s+/g, ""))) {
      newErrors.phone = "Please enter a valid mobile number";
    }
    if (!formData.serviceRequired) newErrors.serviceRequired = "Please select a service";
    if (!formData.requirementDescription.trim()) newErrors.requirementDescription = "Please describe your requirements";
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
      // Scroll to first error
      const firstErrorKey = Object.keys(validationErrors)[0];
      const errorEl = document.getElementById(firstErrorKey);
      if (errorEl) {
        errorEl.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);
    setSubmitError("");

    // Format the email message body with all custom consultation details
    const messageContent = `
=== NEW CONSULTATION REQUEST ===
Full Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company || "N/A"}
Designation/Role: ${formData.role || "N/A"}

--- Business Profile ---
Industry Type: ${formData.industryType || "N/A"}
Business Size: ${formData.businessSize}

--- Consultation Requirements ---
Service Required: ${formData.serviceRequired}
Consultation Mode: ${formData.consultationMode}
Preferred Date: ${formData.preferredDate || "N/A"}
Preferred Time: ${formData.preferredTime || "N/A"}

--- Project Details ---
Requirement Description:
${formData.requirementDescription}

Current Challenges:
${formData.currentChallenges || "None provided"}

Additional Notes:
${formData.additionalNotes || "None provided"}
`;

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
          message: messageContent
        })
      });

      // Save request structure in localStorage for future CRM integration
      const savedRequests = JSON.parse(localStorage.getItem("consultation_requests") || "[]");
      savedRequests.push({
        id: `req_${Date.now()}`,
        timestamp: new Date().toISOString(),
        status: "pending",
        ...formData
      });
      localStorage.setItem("consultation_requests", JSON.stringify(savedRequests));

      const data = await response.json().catch(() => ({}));

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          role: "",
          industryType: "",
          businessSize: "Small Business",
          serviceRequired: "Internal Audit",
          consultationMode: "Online Meeting",
          preferredDate: "",
          preferredTime: "",
          requirementDescription: "",
          currentChallenges: "",
          additionalNotes: ""
        });
      } else {
        setSubmitError(data.error || "Failed to submit booking request.");
        setSubmitStatus("error");
      }
    } catch (err) {
      setSubmitError("Could not connect to the mail server. Please try again later.");
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`min-h-screen pt-28 pb-20 relative overflow-hidden ${
      theme === "dark" ? "mesh-gradient-bg text-slate-100" : "light-theme-mesh text-slate-900"
    }`}>
      {/* Background Grids */}
      <div className="absolute inset-0 grid-pattern pointer-events-none z-0" />
      
      {/* Decorative Blur elements */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-gold-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-navy-500/15 dark:bg-navy-400/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Back navigation */}
        <div className="mb-8">
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-navy-900 dark:hover:text-gold-400 transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Home
          </button>
        </div>

        {/* 1. Hero Section */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-gold-500/10 dark:bg-gold-500/15 text-gold-600 dark:text-gold-400 text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles size={12} />
            Consultation Booking
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-sora font-extrabold text-navy-900 dark:text-white leading-[1.2] tracking-tight mb-6">
            Schedule a Professional Financial Consultation
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal mb-8">
            Book a one-on-one consultation to discuss audit requirements, GST compliance, taxation, risk assessment, financial reporting, and business advisory services.
          </p>

          {/* Quick Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { label: "15+ Years Experience", icon: Award },
              { label: "100+ Audit Assignments", icon: ShieldCheck },
              { label: "Multi-Industry Expertise", icon: Globe },
              { label: "GST & Tax Specialist", icon: FileText }
            ].map((stat, i) => (
              <div 
                key={i} 
                className="bg-white/80 dark:bg-navy-900/60 border border-slate-200/50 dark:border-navy-800 p-4 rounded shadow-sm text-center flex flex-col items-center gap-2"
              >
                <div className="p-2 rounded bg-gold-500/10 text-gold-500 dark:text-gold-400 shrink-0">
                  <stat.icon size={18} />
                </div>
                <span className="text-xs sm:text-sm font-bold text-navy-950 dark:text-slate-200">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Layout: Main Form & Why Book Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto">
          
          {/* Why Book & Contact Sidebar (Desktop Order 2) */}
          <div className="lg:col-span-4 lg:order-2 flex flex-col gap-8">
            
            {/* 3. Why Book a Consultation Section */}
            <div className="bg-white/80 dark:bg-navy-900/40 border border-slate-200/50 dark:border-navy-850 p-6 sm:p-8 rounded shadow-sm">
              <h2 className="text-base sm:text-lg font-sora font-extrabold text-navy-900 dark:text-white tracking-tight mb-6 flex items-center gap-2">
                <div className="w-1.5 h-6 bg-gold-500 rounded" />
                Why Book a Consultation?
              </h2>

              <div className="flex flex-col gap-6">
                {[
                  {
                    title: "Confidential Financial Assessment",
                    desc: "All financial data, audit frameworks, and company documentation remain fully secure under client-consultant confidentiality standards.",
                    icon: ShieldCheck
                  },
                  {
                    title: "Expert Tax & GST Guidance",
                    desc: "Navigate complex tax regulations, GST reconciliation disputes, and receive accurate filing strategies customized for your operations.",
                    icon: FileText
                  },
                  {
                    title: "Risk Management Strategy",
                    desc: "Identify controls gaps, operational compliance vulnerabilities, and design protocols to mitigate regulatory and financial risks.",
                    icon: Award
                  },
                  {
                    title: "Industry-Specific Advisory",
                    desc: "Whether in Healthcare, Manufacturing, Banking, or Insurance, get targeted advisory based on 15+ years of sector expertise.",
                    icon: Globe
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="p-2 rounded bg-slate-100 dark:bg-navy-800 text-gold-600 dark:text-gold-400 shrink-0 h-10 w-10 flex items-center justify-center">
                      <item.icon size={18} />
                    </div>
                    <div>
                      <h3 className="text-xs sm:text-sm font-bold text-navy-950 dark:text-slate-200 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 6. Contact Information Section */}
            <div className="bg-white/80 dark:bg-navy-900/40 border border-slate-200/50 dark:border-navy-850 p-6 sm:p-8 rounded shadow-sm">
              <h2 className="text-base sm:text-lg font-sora font-extrabold text-navy-900 dark:text-white tracking-tight mb-6 flex items-center gap-2">
                <div className="w-1.5 h-6 bg-gold-500 rounded" />
                Contact Information
              </h2>

              <div className="flex flex-col gap-5">
                {[
                  { label: "Email Address", val: "shabbirmsb@gmail.com", href: "mailto:shabbirmsb@gmail.com", icon: Mail },
                  { label: "Phone Number", val: "+91 9182674949", href: "tel:+919182674949", icon: Phone },
                  { label: "LinkedIn Profile", val: "Noor Basha Shabbir Mohammed", href: "https://linkedin.com", icon: Linkedin },
                  { label: "Office Location", val: "Guntur, Andhra Pradesh, India", href: null, icon: MapPin }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="p-2 rounded bg-gold-500/10 text-gold-500 shrink-0">
                      <item.icon size={16} />
                    </div>
                    <div>
                      <span className="block text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider">
                        {item.label}
                      </span>
                      {item.href ? (
                        <a 
                          href={item.href} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-xs sm:text-sm font-bold text-navy-900 dark:text-white hover:text-gold-500 dark:hover:text-gold-400 transition-colors break-all"
                        >
                          {item.val}
                        </a>
                      ) : (
                        <span className="text-xs sm:text-sm font-bold text-navy-900 dark:text-white">
                          {item.val}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Form Column (Desktop Order 1) */}
          <div className="lg:col-span-8 lg:order-1 flex flex-col gap-8">
            
            {/* 2. Consultation Request Form Section */}
            <form 
              onSubmit={handleSubmit} 
              className="bg-white/80 dark:bg-navy-900/40 border border-slate-200/50 dark:border-navy-850 p-6 sm:p-8 rounded shadow-sm flex flex-col gap-6 sm:gap-8"
            >
              <div>
                <h2 className="text-lg sm:text-xl font-sora font-extrabold text-navy-900 dark:text-white tracking-tight mb-2">
                  Consultation Request Form
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                  Please provide your request details. Fields marked with (*) are required.
                </p>
              </div>

              {/* Status Notifications */}
              <AnimatePresence>
                {submitStatus === "success" && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-start gap-3 p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs sm:text-sm rounded"
                  >
                    <CheckCircle2 size={18} className="shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold block mb-1">Booking Request Received!</span>
                      <span>Your consultation request was submitted successfully. Noor Basha Shabbir Mohammed will contact you shortly to confirm the scheduled slot.</span>
                    </div>
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-start gap-3 p-4 bg-red-500/10 border border-red-500/20 text-red-700 dark:text-red-400 text-xs sm:text-sm rounded"
                  >
                    <AlertCircle size={18} className="shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold block mb-1">Submission Failed</span>
                      <span>{submitError || "There was a problem sending your request. Please check your network and try again."}</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* SECTION: Personal Information */}
              <div className="flex flex-col gap-5">
                <h3 className="text-xs uppercase font-extrabold text-gold-500 tracking-widest pb-2 border-b border-slate-100 dark:border-navy-800">
                  Personal Information
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div className="flex flex-col" id="name">
                    <label htmlFor="name-input" className="text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wider">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500" size={16} />
                      <input
                        type="text"
                        id="name-input"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full pl-10 pr-4 py-2.5 rounded bg-white dark:bg-navy-950 border ${
                          errors.name ? "border-red-500 focus:ring-red-500" : "border-slate-200 dark:border-navy-800 focus:border-gold-500 dark:focus:border-gold-400"
                        } text-xs sm:text-sm text-slate-800 dark:text-white focus:outline-none focus:ring-1 focus:ring-gold-500 transition-all`}
                        placeholder="e.g. John Doe"
                      />
                    </div>
                    {errors.name && (
                      <span className="flex items-center gap-1 text-[11px] text-red-500 mt-1 font-medium">
                        <AlertCircle size={10} />
                        {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Email */}
                  <div className="flex flex-col" id="email">
                    <label htmlFor="email-input" className="text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wider">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500" size={16} />
                      <input
                        type="email"
                        id="email-input"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full pl-10 pr-4 py-2.5 rounded bg-white dark:bg-navy-950 border ${
                          errors.email ? "border-red-500 focus:ring-red-500" : "border-slate-200 dark:border-navy-800 focus:border-gold-500 dark:focus:border-gold-400"
                        } text-xs sm:text-sm text-slate-800 dark:text-white focus:outline-none focus:ring-1 focus:ring-gold-500 transition-all`}
                        placeholder="john@company.com"
                      />
                    </div>
                    {errors.email && (
                      <span className="flex items-center gap-1 text-[11px] text-red-500 mt-1 font-medium">
                        <AlertCircle size={10} />
                        {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  {/* Phone */}
                  <div className="flex flex-col" id="phone">
                    <label htmlFor="phone-input" className="text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wider">
                      Mobile Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500" size={16} />
                      <input
                        type="tel"
                        id="phone-input"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full pl-10 pr-4 py-2.5 rounded bg-white dark:bg-navy-950 border ${
                          errors.phone ? "border-red-500 focus:ring-red-500" : "border-slate-200 dark:border-navy-800 focus:border-gold-500 dark:focus:border-gold-400"
                        } text-xs sm:text-sm text-slate-800 dark:text-white focus:outline-none focus:ring-1 focus:ring-gold-500 transition-all`}
                        placeholder="e.g. +91 98765 43210"
                      />
                    </div>
                    {errors.phone && (
                      <span className="flex items-center gap-1 text-[11px] text-red-500 mt-1 font-medium">
                        <AlertCircle size={10} />
                        {errors.phone}
                      </span>
                    )}
                  </div>

                  {/* Company */}
                  <div className="flex flex-col">
                    <label htmlFor="company-input" className="text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wider">
                      Company Name
                    </label>
                    <div className="relative">
                      <Building className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500" size={16} />
                      <input
                        type="text"
                        id="company-input"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-2.5 rounded bg-white dark:bg-navy-955 border border-slate-200 dark:border-navy-800 focus:border-gold-500 dark:focus:border-gold-400 text-xs sm:text-sm text-slate-800 dark:text-white focus:outline-none focus:ring-1 focus:ring-gold-500 transition-all"
                        placeholder="Company name"
                      />
                    </div>
                  </div>

                  {/* Designation */}
                  <div className="flex flex-col">
                    <label htmlFor="role-input" className="text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wider">
                      Designation / Role
                    </label>
                    <div className="relative">
                      <Briefcase className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500" size={16} />
                      <input
                        type="text"
                        id="role-input"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-2.5 rounded bg-white dark:bg-navy-955 border border-slate-200 dark:border-navy-800 focus:border-gold-500 dark:focus:border-gold-400 text-xs sm:text-sm text-slate-800 dark:text-white focus:outline-none focus:ring-1 focus:ring-gold-500 transition-all"
                        placeholder="e.g. Director, Partner"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* SECTION: Business Profile */}
              <div className="flex flex-col gap-5">
                <h3 className="text-xs uppercase font-extrabold text-gold-500 tracking-widest pb-2 border-b border-slate-100 dark:border-navy-800">
                  Business Information
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Industry Type */}
                  <div className="flex flex-col">
                    <label htmlFor="industry-input" className="text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wider">
                      Industry Type
                    </label>
                    <input
                      type="text"
                      id="industry-input"
                      name="industryType"
                      value={formData.industryType}
                      onChange={handleChange}
                      className="px-4 py-2.5 rounded bg-white dark:bg-navy-950 border border-slate-200 dark:border-navy-800 focus:border-gold-500 dark:focus:border-gold-400 text-xs sm:text-sm text-slate-800 dark:text-white focus:outline-none focus:ring-1 focus:ring-gold-500 transition-all"
                      placeholder="e.g. Healthcare, Manufacturing, Banking"
                    />
                  </div>

                  {/* Business Size */}
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-slate-700 dark:text-slate-300 mb-2.5 uppercase tracking-wider">
                      Business Size
                    </span>
                    <div className="grid grid-cols-2 gap-2">
                      {businessSizes.map((size) => (
                        <label
                          key={size}
                          className={`flex items-center justify-center border px-3 py-2 rounded text-xs font-semibold cursor-pointer transition-all ${
                            formData.businessSize === size
                              ? "bg-gold-500/10 border-gold-500 text-gold-600 dark:text-gold-400 shadow-sm"
                              : "bg-white dark:bg-navy-950 border-slate-200 dark:border-navy-800 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-navy-700"
                          }`}
                        >
                          <input
                            type="radio"
                            name="businessSize"
                            value={size}
                            checked={formData.businessSize === size}
                            onChange={handleChange}
                            className="sr-only"
                          />
                          {size}
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* SECTION: Consultation Requirements */}
              <div className="flex flex-col gap-5">
                <h3 className="text-xs uppercase font-extrabold text-gold-500 tracking-widest pb-2 border-b border-slate-100 dark:border-navy-800">
                  Consultation Requirements
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Service Required */}
                  <div className="flex flex-col">
                    <label htmlFor="service-input" className="text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wider">
                      Service Required *
                    </label>
                    <select
                      id="service-input"
                      name="serviceRequired"
                      value={formData.serviceRequired}
                      onChange={handleChange}
                      className="px-4 py-2.5 rounded bg-white dark:bg-navy-950 border border-slate-200 dark:border-navy-800 focus:border-gold-500 dark:focus:border-gold-400 text-xs sm:text-sm text-slate-800 dark:text-white focus:outline-none focus:ring-1 focus:ring-gold-500 transition-all cursor-pointer"
                    >
                      {services.map((svc) => (
                        <option key={svc} value={svc} className="bg-white dark:bg-navy-900 text-slate-800 dark:text-white">
                          {svc}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Mode */}
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-slate-700 dark:text-slate-300 mb-2.5 uppercase tracking-wider">
                      Preferred Consultation Mode
                    </span>
                    <div className="grid grid-cols-3 gap-2">
                      {consultationModes.map((mode) => (
                        <label
                          key={mode}
                          className={`flex items-center justify-center border px-2 py-2 rounded text-[10px] sm:text-xs font-bold cursor-pointer text-center transition-all ${
                            formData.consultationMode === mode
                              ? "bg-gold-500/10 border-gold-500 text-gold-600 dark:text-gold-400 shadow-sm"
                              : "bg-white dark:bg-navy-950 border-slate-200 dark:border-navy-800 text-slate-500 dark:text-slate-400 hover:border-slate-300 dark:hover:border-navy-700"
                          }`}
                        >
                          <input
                            type="radio"
                            name="consultationMode"
                            value={mode}
                            checked={formData.consultationMode === mode}
                            onChange={handleChange}
                            className="sr-only"
                          />
                          {mode.split(" ")[0]}
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Preferred Date */}
                  <div className="flex flex-col">
                    <label htmlFor="date-input" className="text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wider">
                      Preferred Date
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500" size={16} />
                      <input
                        type="date"
                        id="date-input"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-2.5 rounded bg-white dark:bg-navy-950 border border-slate-200 dark:border-navy-800 focus:border-gold-500 dark:focus:border-gold-400 text-xs sm:text-sm text-slate-800 dark:text-white focus:outline-none focus:ring-1 focus:ring-gold-500 transition-all"
                      />
                    </div>
                  </div>

                  {/* Preferred Time */}
                  <div className="flex flex-col">
                    <label htmlFor="time-input" className="text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wider">
                      Preferred Time
                    </label>
                    <div className="relative">
                      <Clock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500" size={16} />
                      <input
                        type="time"
                        id="time-input"
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-2.5 rounded bg-white dark:bg-navy-950 border border-slate-200 dark:border-navy-800 focus:border-gold-500 dark:focus:border-gold-400 text-xs sm:text-sm text-slate-800 dark:text-white focus:outline-none focus:ring-1 focus:ring-gold-500 transition-all"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* SECTION: Project details */}
              <div className="flex flex-col gap-5">
                <h3 className="text-xs uppercase font-extrabold text-gold-500 tracking-widest pb-2 border-b border-slate-100 dark:border-navy-800">
                  Project Details
                </h3>

                {/* Brief description */}
                <div className="flex flex-col" id="requirementDescription">
                  <label htmlFor="requirement-input" className="text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wider">
                    Brief Description of Requirement *
                  </label>
                  <textarea
                    id="requirement-input"
                    name="requirementDescription"
                    rows={4}
                    value={formData.requirementDescription}
                    onChange={handleChange}
                    className={`px-4 py-2.5 rounded bg-white dark:bg-navy-950 border ${
                      errors.requirementDescription ? "border-red-500 focus:ring-red-500" : "border-slate-200 dark:border-navy-800 focus:border-gold-500 dark:focus:border-gold-400"
                    } text-xs sm:text-sm text-slate-800 dark:text-white focus:outline-none focus:ring-1 focus:ring-gold-500 transition-all resize-none`}
                    placeholder="Provide context regarding your audit schedules, compliance gap analysis, GST reconciliation, or tax filings..."
                  />
                  {errors.requirementDescription && (
                    <span className="flex items-center gap-1 text-[11px] text-red-500 mt-1 font-medium">
                      <AlertCircle size={10} />
                      {errors.requirementDescription}
                    </span>
                  )}
                </div>

                {/* Challenges */}
                <div className="flex flex-col">
                  <label htmlFor="challenges-input" className="text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wider">
                    Current Challenges
                  </label>
                  <input
                    type="text"
                    id="challenges-input"
                    name="currentChallenges"
                    value={formData.currentChallenges}
                    onChange={handleChange}
                    className="px-4 py-2.5 rounded bg-white dark:bg-navy-950 border border-slate-200 dark:border-navy-800 focus:border-gold-500 dark:focus:border-gold-400 text-xs sm:text-sm text-slate-800 dark:text-white focus:outline-none focus:ring-1 focus:ring-gold-500 transition-all"
                    placeholder="e.g. Audit backlog, GST matching discrepancies, tax notices"
                  />
                </div>

                {/* Notes */}
                <div className="flex flex-col">
                  <label htmlFor="notes-input" className="text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wider">
                    Additional Notes
                  </label>
                  <input
                    type="text"
                    id="notes-input"
                    name="additionalNotes"
                    value={formData.additionalNotes}
                    onChange={handleChange}
                    className="px-4 py-2.5 rounded bg-white dark:bg-navy-950 border border-slate-200 dark:border-navy-800 focus:border-gold-500 dark:focus:border-gold-400 text-xs sm:text-sm text-slate-800 dark:text-white focus:outline-none focus:ring-1 focus:ring-gold-500 transition-all"
                    placeholder="Any other comments or instructions"
                  />
                </div>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center bg-navy-900 hover:bg-navy-800 dark:bg-gold-500 dark:hover:bg-gold-600 disabled:bg-slate-300 dark:disabled:bg-navy-850 text-white dark:text-navy-950 py-3.5 rounded text-xs font-bold uppercase tracking-wider transition-all duration-200 gap-2 cursor-pointer shadow hover:shadow-lg disabled:cursor-not-allowed border border-transparent dark:border-gold-400/20 group"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={14} className="animate-spin" />
                    Submitting Consultation Request...
                  </>
                ) : (
                  <>
                    Book Consultation Session
                    <Send size={12} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                  </>
                )}
              </button>

            </form>

            {/* 4. Consultation Process Section */}
            <div className="bg-white/80 dark:bg-navy-900/40 border border-slate-200/50 dark:border-navy-850 p-6 sm:p-8 rounded shadow-sm">
              <h2 className="text-base sm:text-lg font-sora font-extrabold text-navy-900 dark:text-white tracking-tight mb-8 text-center sm:text-left flex items-center justify-center sm:justify-start gap-2">
                <div className="w-1.5 h-6 bg-gold-500 rounded animate-pulse" />
                Consultation Request Process
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
                {/* Horizontal progress bar for desktop */}
                <div className="hidden md:block absolute top-[21px] left-[12%] right-[12%] h-[1px] bg-slate-200 dark:bg-navy-800 z-0" />

                {[
                  { step: "01", name: "Submit Request", desc: "Fill in requirement description, business size, preferred slots, and details." },
                  { step: "02", name: "Review Requirements", desc: "Noor Basha analyzes the operational context and notes files or points of discussion." },
                  { step: "03", name: "Confirmation", desc: "Confirming meeting details, agenda checklist, and date/time coordination." },
                  { step: "04", name: "Strategic Action", desc: "Execute 1-on-1 meeting. Discuss operational challenges, regulatory gaps, and outline advisory roadmaps." }
                ].map((p, i) => (
                  <div key={i} className="flex md:flex-col items-center md:items-start text-left gap-4 md:gap-3 relative z-10">
                    <div className="w-11 h-11 rounded-full bg-slate-100 dark:bg-navy-800 border border-slate-200 dark:border-navy-700 flex items-center justify-center shrink-0 text-navy-900 dark:text-gold-400 text-xs font-extrabold shadow-sm font-sora hover:border-gold-500/50 transition-colors">
                      {p.step}
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-extrabold text-navy-950 dark:text-slate-200 mb-1">
                        {p.name}
                      </h4>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-normal font-normal">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 5. Trust & Credibility Section */}
            <div className="bg-white/80 dark:bg-navy-900/40 border border-slate-200/50 dark:border-navy-850 p-6 sm:p-8 rounded shadow-sm">
              <h2 className="text-base sm:text-lg font-sora font-extrabold text-navy-900 dark:text-white tracking-tight mb-6 flex items-center gap-2">
                <div className="w-1.5 h-6 bg-gold-500 rounded" />
                Auditing Standards & Compliance Quality
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[
                  {
                    quote: "Mr. Noor Basha Shabbir Mohammed streamlined our internal financial reporting cycle and reconciled years of complex GST discrepancy balances. Absolutely trust his statutory audit expertise.",
                    author: "Partner, Manufacturing Enterprise",
                    rating: 5
                  },
                  {
                    quote: "Exceptional vigilance during our bank branch audit assignment. His inspection of loans, NPAs, and statutory ratios met absolute regulatory guidelines.",
                    author: "Chief Audit Executive, Banking & Financial Institution",
                    rating: 5
                  }
                ].map((item, idx) => (
                  <div 
                    key={idx} 
                    className="p-5 rounded bg-slate-50 dark:bg-navy-950/60 border border-slate-200/50 dark:border-navy-800 flex flex-col justify-between"
                  >
                    <div className="flex gap-0.5 text-gold-500 mb-3">
                      {Array.from({ length: item.rating }).map((_, rIdx) => (
                        <Star key={rIdx} size={12} fill="currentColor" />
                      ))}
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium italic mb-4">
                      "{item.quote}"
                    </p>
                    <span className="text-[10px] font-bold text-gold-600 dark:text-gold-500 tracking-wide uppercase">
                      - {item.author}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
