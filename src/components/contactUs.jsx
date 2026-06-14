import { motion } from "motion/react";
import { useState } from "react";
import msgIcon from "../assets/icons/mail.png";
import { Footer } from "./footer";
import { Phone, Mail, MapPin } from "lucide-react";

export const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const response = await fetch("/api/server", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("Failed to send the message.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("Error occurred. Try again.");
    }
  };

  return (
    <>
      <div id="Contact" className="min-h-screen pt-16 bg-deepBlue">
        <div className="project-title text-5xl md:text-8xl h-[40vh] tracking-wide font-extrabold leading-snug uppercase text-white flex items-center justify-center">
          <div className="bg-color1/40 rounded-full absolute size-80 blur-[100px] z-10"></div>
          <div className="z-30 pl-5 flex max-md:flex-col gap-x-8">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
              className="will-change-transform will-change-opacity"
            >
              Get
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4, ease: "easeInOut" }}
              className="will-change-transform will-change-opacity"
            >
              in
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6, ease: "easeInOut" }}
              className="will-change-transform will-change-opacity"
            >
              Touch
            </motion.div>
          </div>
        </div>

        <div className="max-w-[60rem] mx-auto px-5 py-10 flex flex-col md:flex-row mt-5 gap-10">
          {/* Contact Details sidebar */}
          <div className="w-full md:w-1/2 flex flex-col justify-center gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="card-glass p-6 rounded-2xl border border-white/5 bg-white/5 flex flex-col gap-5 shadow-xl"
            >
              <h3 className="text-white font-bold text-xl mb-2 text-color2">Contact Information</h3>
              
              <div className="flex items-center gap-4 text-white">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-color2" />
                </div>
                <div>
                  <p className="text-white/60 text-xs uppercase font-bold tracking-wider">Phone</p>
                  <a href="tel:+919603894297" className="text-white hover:text-color2 text-sm font-semibold transition">
                    +91 9603894297
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 text-white">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-color2" />
                </div>
                <div>
                  <p className="text-white/60 text-xs uppercase font-bold tracking-wider">Email</p>
                  <a href="mailto:shaikarif1801@gmail.com" className="text-white hover:text-color2 text-sm font-semibold transition break-all">
                    shaikarif1801@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 text-white">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-color2" />
                </div>
                <div>
                  <p className="text-white/60 text-xs uppercase font-bold tracking-wider">Location</p>
                  <span className="text-white text-sm font-semibold">
                    India
                  </span>
                </div>
              </div>
            </motion.div>

            <div className="flex justify-center items-center">
              <motion.img
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-1/2 max-w-[12rem] opacity-40 filter invert brightness-200"
                src={msgIcon}
                alt="Message Icon"
              />
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 p-6 w-full md:w-1/2 rounded-2xl card-glass border border-white/5 bg-white/5"
          >
            <h3 className="text-white font-bold text-xl mb-2">Send a Message</h3>
            <div className="input-name w-full">
              <motion.input
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                autoComplete="off"
                className="bg-transparent border-color2/30 border-b py-3 px-1 w-full placeholder:text-white/40 pl-3 focus:outline-none focus:border-color2 text-white text-sm duration-200 transition-colors"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
            </div>
            <div className="input-name w-full">
              <motion.input
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                autoComplete="off"
                className="bg-transparent border-color2/30 border-b py-3 px-1 w-full placeholder:text-white/40 pl-3 focus:outline-none focus:border-color2 text-white text-sm duration-200 transition-colors"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email Address"
                required
              />
            </div>
            <div className="input-name w-full">
              <motion.input
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                autoComplete="off"
                className="bg-transparent border-color2/30 border-b py-3 px-1 w-full placeholder:text-white/40 pl-3 focus:outline-none focus:border-color2 text-white text-sm duration-200 transition-colors"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your Phone Number"
                required
              />
            </div>
            <div className="input-name w-full">
              <motion.textarea
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                rows={4}
                autoComplete="off"
                className="bg-transparent border-color2/30 border-b rounded-none py-3 px-1 w-full placeholder:text-white/40 pl-3 focus:outline-none focus:border-color2 text-white text-sm resize-none duration-200 transition-colors"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message / Inquiry"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-color2 text-color3 hover:bg-color2/85 hover:scale-105 duration-200 transition-all rounded-xl text-center font-bold cursor-pointer w-full py-3.5 text-xs tracking-wider uppercase mt-4"
            >
              {status === "Sending..." ? "Sending..." : "Send Message"}
            </button>
            {status && <p className="text-color2 text-center text-xs mt-2">{status}</p>}
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
};