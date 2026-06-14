import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const roles = [
  {
    title: "Software Developer",
    description:
      "Designing and developing scalable applications, clean architectures, and user-focused digital products that solve real-world problems.",
    gradient: "linear-gradient(to right, #60a5fa, #c084fc)", // Blue + Purple
  },
  {
    title: "Frontend Developer",
    description:
      "Building fast, responsive, and visually engaging user interfaces using React, JavaScript, Tailwind CSS, and modern frontend technologies.",
    gradient: "linear-gradient(to right, #22d3ee, #3b82f6)", // Cyan + Blue
  },
  {
    title: "MERN Stack Developer",
    description:
      "Creating full-stack web applications using MongoDB, Express.js, React, and Node.js with scalable APIs and modern development practices.",
    gradient: "linear-gradient(to right, #c084fc, #f472b6)", // Purple + Pink
  },
];

export const HeroRoles = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 5000); // 5000ms duration per role

    return () => clearInterval(timer);
  }, []);

  // Framer Motion transition variants for smooth crossfade, slide-up, and blur-in
  const animationVariants = {
    initial: {
      opacity: 0,
      y: 15,
      filter: "blur(6px)",
    },
    animate: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1], // Custom easeOutExpo-like transition
      },
    },
    exit: {
      opacity: 0,
      y: -15,
      filter: "blur(6px)",
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const currentRole = roles[index];

  return (
    <div className="min-h-[180px] md:min-h-[200px] flex flex-col justify-start select-none relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          variants={animationVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="flex flex-col text-left"
        >
          {/* Dynamic Role Title with customized gradient text */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight leading-[1.15] mt-4 whitespace-nowrap"
            style={{
              backgroundImage: currentRole.gradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {currentRole.title}
          </motion.h1>

          {/* Dynamic Description matching original typography */}
          <motion.p className="text-[#989898] text-sm md:text-base leading-relaxed mt-4 max-w-[620px]">
            {currentRole.description}
          </motion.p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
