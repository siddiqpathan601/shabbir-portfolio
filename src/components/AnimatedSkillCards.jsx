import { motion } from "framer-motion";

export default function AnimatedSkillCards() {
  const cards = [
    {
      title: "Frontend",
      skills: ["React.js", "Next.js", "Tailwind CSS"],
      positionClass: "absolute top-[10%] left-[-15%] max-md:left-[-5%]",
      floatDuration: 6,
      borderColor: "border-color2/30",
      glowColor: "shadow-color2/10",
      bulletColor: "bg-color2",
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "REST APIs"],
      positionClass: "absolute top-[35%] right-[-15%] max-md:right-[-5%]",
      floatDuration: 7.5,
      borderColor: "border-color1/30",
      glowColor: "shadow-color1/10",
      bulletColor: "bg-color1",
    },
    {
      title: "Machine Learning",
      skills: ["Python", "Scikit Learn", "Data Preprocessing"],
      positionClass: "absolute bottom-[10%] left-[-10%] max-md:left-[0%]",
      floatDuration: 6.8,
      borderColor: "border-[#f97316]/30",
      glowColor: "shadow-[#f97316]/10",
      bulletColor: "bg-[#f97316]",
    },
  ];

  return (
    <div className="absolute inset-0 z-20 pointer-events-none scale-[0.8] sm:scale-[0.9] md:scale-100">
      {cards.map((card, index) => (
        <motion.div
          key={card.title}
          className={`${card.positionClass} pointer-events-auto`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 15,
            delay: 0.6 + index * 0.2,
          }}
        >
          <motion.div
            animate={{
              y: [0, -10, 0, 10, 0],
            }}
            transition={{
              duration: card.floatDuration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
            className={`card-glass p-4 rounded-xl border ${card.borderColor} bg-deepBlue/80 backdrop-blur-md shadow-lg ${card.glowColor} w-48`}
          >
            <h4 className="text-white font-bold text-sm mb-2 pb-1 border-b border-white/5 flex items-center justify-between">
              {card.title}
              <span className={`w-1.5 h-1.5 rounded-full ${card.bulletColor}`} />
            </h4>
            <ul className="space-y-1">
              {card.skills.map((skill) => (
                <li key={skill} className="text-white/70 text-[11px] font-medium flex items-center gap-1.5">
                  <span className="text-white/30 text-[9px]">&#9670;</span> {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
