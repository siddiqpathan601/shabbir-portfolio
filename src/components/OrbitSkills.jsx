import { motion } from "framer-motion";

// Import SVGs/PNGs from project assets
import ReactIcon from "../assets/icons/skills-icon/react-js.svg";
import NextIcon from "../assets/icons/skills-icon/nextjs.svg";
import JsIcon from "../assets/icons/skills-icon/javascript.svg";
import TsIcon from "../assets/icons/skills-icon/TS.png";
import NodeIcon from "../assets/icons/skills-icon/nodejs.svg";
import MongoIcon from "../assets/icons/skills-icon/mongodb.svg";
import PythonIcon from "../assets/icons/skills-icon/python.svg";
import GithubIcon from "../assets/icons/skills-icon/github.png";
import TailwindIcon from "../assets/icons/skills-icon/tailwindcss.svg";
import MLIcon from "../assets/icons/skills-icon/ml.png";
import FigmaIcon from "../assets/icons/skills-icon/figma.svg";
import APIIcon from "../assets/icons/skills-icon/Rest-apis.png";

export default function OrbitSkills() {
  const innerSkills = [
    { name: "React", icon: ReactIcon },
    { name: "Next.js", icon: NextIcon },
    { name: "JavaScript", icon: JsIcon },
    { name: "TypeScript", icon: TsIcon },
    { name: "Tailwind CSS", icon: TailwindIcon },
    { name: "MongoDB", icon: MongoIcon },
  ];

  const outerSkills = [
    { name: "Node.js", icon: NodeIcon },
    { name: "Python", icon: PythonIcon },
    { name: "Git & GitHub", icon: GithubIcon },
    { name: "Machine Learning", icon: MLIcon },
    { name: "Figma", icon: FigmaIcon },
    { name: "REST APIs", icon: APIIcon },
  ];

  const getPosition = (index, total, radius) => {
    const angle = (index * 2 * Math.PI) / total;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    return { x, y };
  };

  const innerRadius = 140;
  const outerRadius = 220;

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 scale-[0.75] sm:scale-[0.85] md:scale-100">
      
      {/* Inner Orbit Circle Line */}
      <div 
        className="absolute rounded-full border border-white/5"
        style={{ width: innerRadius * 2, height: innerRadius * 2 }}
      />
      
      {/* Inner Orbit Ring Container */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute w-full h-full flex items-center justify-center"
      >
        {innerSkills.map((skill, index) => {
          const { x, y } = getPosition(index, innerSkills.length, innerRadius);
          return (
            <div
              key={skill.name}
              className="absolute"
              style={{
                left: `calc(50% + ${x}px - 20px)`,
                top: `calc(50% + ${y}px - 20px)`,
              }}
            >
              {/* Counter-rotate icon container to keep them upright */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 22,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="w-10 h-10 bg-deepBlue/90 backdrop-blur-md rounded-xl border border-white/10 flex items-center justify-center p-2 shadow-lg shadow-black/40 cursor-pointer pointer-events-auto hover:border-color2/50 transition-colors"
                title={skill.name}
              >
                <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
              </motion.div>
            </div>
          );
        })}
      </motion.div>

      {/* Outer Orbit Circle Line */}
      <div 
        className="absolute rounded-full border border-white/5"
        style={{ width: outerRadius * 2, height: outerRadius * 2 }}
      />

      {/* Outer Orbit Ring Container */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 38,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute w-full h-full flex items-center justify-center"
      >
        {outerSkills.map((skill, index) => {
          const { x, y } = getPosition(index, outerSkills.length, outerRadius);
          return (
            <div
              key={skill.name}
              className="absolute"
              style={{
                left: `calc(50% + ${x}px - 20px)`,
                top: `calc(50% + ${y}px - 20px)`,
              }}
            >
              {/* Counter-rotate icon container to keep them upright */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 38,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="w-10 h-10 bg-deepBlue/90 backdrop-blur-md rounded-xl border border-white/10 flex items-center justify-center p-2 shadow-lg shadow-black/40 cursor-pointer pointer-events-auto hover:border-color1/50 transition-colors"
                title={skill.name}
              >
                <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
              </motion.div>
            </div>
          );
        })}
      </motion.div>

    </div>
  );
}
