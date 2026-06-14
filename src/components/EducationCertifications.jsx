import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar, BookOpen } from "lucide-react";

export default function EducationCertifications() {
  const certifications = [
    {
      title: "MERN Stack Development",
      provider: "Apna College",
      description: "Successfully completed Delta (Full Stack Web Development) course covering HTML, CSS, JavaScript, Node.js, React.js, and MongoDB.",
      link: "https://drive.google.com/file/d/1prsH7CfTLJV8tiNv6WElcHLiO9zubYuA/view",
    },
    {
      title: "Data Structures and Algorithms using Java",
      provider: "Apna College",
      description: "Successfully completed Alpha (DSA with Java) course covering fundamental data structures, algorithms, recursion, trees, graphs, and optimization.",
      link: "https://drive.google.com/file/d/1M4lX_cPBzQVwQa9Uv7JZDEelSM-YZwcS/view",
    },
  ];

  return (
    <section id="Education" className="py-16 md:py-24 bg-deepBlue relative overflow-hidden">
      <div className="bg-color2/20 rounded-full absolute size-80 blur-[100px] -right-10 top-1/3 z-0"></div>
      <div className="bg-color1/20 rounded-full absolute size-60 blur-[100px] -left-10 bottom-10 z-0"></div>

      <div className="w-full px-5 max-w-[60rem] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Education & <span className="text-color2">Certifications</span>
          </h2>
          <p className="text-[#989898] text-sm md:text-base max-w-xl mx-auto">
            Academic foundation and specialized certifications that fuel my engineering skill set
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Education Column */}
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-bold text-white flex items-center gap-3 border-b border-white/10 pb-3">
              <GraduationCap className="w-7 h-7 text-color2" /> Academic Profile
            </h3>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="card-glass p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-color1/30 transition-all duration-300 relative shadow-xl"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="bg-color1 text-white text-[10px] md:text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                  B.Tech Graduate
                </span>
                <span className="flex items-center gap-1.5 text-xs text-[#989898]">
                  <Calendar className="w-3.5 h-3.5 text-color2" /> 2021 - 2025
                </span>
              </div>
              <h4 className="text-white font-bold text-lg md:text-xl mb-2">
                Computer Science (Artificial Intelligence & Data Science)
              </h4>
              <p className="text-color2 font-semibold text-sm mb-4">
                Kallam Haranadhareddy Institute of Technology
              </p>
              <p className="text-white/60 text-xs md:text-sm leading-relaxed">
                Core coursework included Data Structures, Database Management Systems, Machine Learning Algorithms, Python Programming, and Web Architectures. Built functional group projects and gained strong theoretical and practical knowledge in intelligent systems and data engineering.
              </p>
            </motion.div>
          </div>

          {/* Certifications Column */}
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-bold text-white flex items-center gap-3 border-b border-white/10 pb-3">
              <Award className="w-7 h-7 text-color2" /> Certifications
            </h3>

            <div className="flex flex-col gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -3 }}
                  className="card-glass p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-color2/35 transition-all duration-300 flex items-start gap-4 shadow-md"
                >
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center mt-1">
                    <BookOpen className="w-5 h-5 text-color2" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-bold text-base md:text-lg mb-1">
                      {cert.title}
                    </h4>
                    <p className="text-color2 text-xs font-semibold mb-2">{cert.provider}</p>
                    <p className="text-white/60 text-xs leading-relaxed mb-4">{cert.description}</p>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-color2 hover:text-white text-xs font-bold transition-all duration-200 border-b border-color2 hover:border-white pb-0.5"
                    >
                      View Certificate &rarr;
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
