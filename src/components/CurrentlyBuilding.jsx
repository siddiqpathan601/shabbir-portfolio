import { motion } from "framer-motion";
import { Layers, Cpu, Sparkles, GitBranch } from "lucide-react";

export default function CurrentlyBuilding() {
  const items = [
    {
      title: "Advanced MERN Applications",
      description: "Developing highly scalable, real-time web applications with full authentication and caching.",
      icon: <Layers className="w-6 h-6 text-color2" />,
    },
    {
      title: "Machine Learning Solutions",
      description: "Training advanced classification, regression, and gradient boosting models using Scikit-Learn.",
      icon: <Cpu className="w-6 h-6 text-color2" />,
    },
    {
      title: "AI Powered Web Platforms",
      description: "Integrating intelligent API prediction systems with custom web interfaces using Flask/Node.js.",
      icon: <Sparkles className="w-6 h-6 text-color2" />,
    },
    {
      title: "Open Source Contributions",
      description: "Actively contributing to git repositories and building reusable developer modules.",
      icon: <GitBranch className="w-6 h-6 text-color2" />,
    },
  ];

  return (
    <div className="flex justify-center py-12 bg-deepBlue">
      <div className="w-full px-5 max-w-[60rem] relative">
        <div className="bg-color1/30 rounded-full absolute size-60 blur-[100px] -left-10 top-10 z-0"></div>
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-white mb-2">
              Currently <span className="text-color2">Building</span>
            </h2>
            <p className="text-[#989898] text-sm md:text-base">
              Here are some of the key areas I am actively developing, optimizing, and experimenting with.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="card-glass p-6 rounded-2xl flex items-start gap-4 border border-white/5 bg-white/5 hover:bg-white/10 transition-all duration-300"
              >
                <div className="p-3 bg-white/5 rounded-xl flex items-center justify-center border border-white/10">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                  <p className="text-[#989898] text-xs leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
