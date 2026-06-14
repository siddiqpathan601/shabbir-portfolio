import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import doc from "../assets/doc/ShaikArifResume.pdf";
import devCharacter from "../assets/images/3d_developer_character.png";
import scrollIcon from "../assets/icons/scroll-animation.svg";
import { Github, Linkedin, Mail } from "lucide-react";

// Sub-components
import OrbitSkills from "./OrbitSkills";
import FloatingParticles from "./FloatingParticles";
import { HeroRoles } from "./HeroRoles";

// CountUp helper component for statistics row
const CountUp = ({ to, label, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(to, 10);
    if (isNaN(end)) return;
    
    const duration = 1200; // 1.2s count duration
    const frameRate = 1000 / 60; // 60fps
    const totalFrames = Math.round(duration / frameRate);
    const increment = end / totalFrames;
    
    let frame = 0;
    const timer = setInterval(() => {
      frame++;
      start += increment;
      if (frame >= totalFrames) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.floor(start));
      }
    }, frameRate);

    return () => clearInterval(timer);
  }, [to]);

  return (
    <div className="flex flex-col">
      <span className="text-2xl md:text-3xl font-extrabold text-color2 drop-shadow-[0_0_8px_rgba(128,255,210,0.3)]">
        {count}{suffix}
      </span>
      <span className="text-white/60 text-[10px] md:text-xs uppercase tracking-wider font-semibold mt-1">
        {label}
      </span>
    </div>
  );
};

CountUp.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  suffix: PropTypes.string,
};

export const HeroSect = () => {
  // Mouse tilt tracking states for right-side illustration
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    
    // Maximum tilt constraint: 8 degrees
    const rX = (mouseY / (height / 2)) * -8;
    const rY = (mouseX / (width / 2)) * 8;
    
    setTilt({ rotateX: rX, rotateY: rY });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  // Staggered entry animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 90,
        damping: 14
      }
    }
  };

  const badges = [
    { text: "MERN Stack Developer", icon: "🚀" },
    { text: "Machine Learning Engineer", icon: "🧠" },
    { text: "Problem Solver", icon: "⚡" }
  ];

  return (
    <>
      <div 
        id="Home" 
        className="flex justify-center min-h-[92vh] items-center pt-6 bg-deepBlue relative overflow-hidden"
      >
        {/* Floating tech background particles */}
        <FloatingParticles />

        {/* Subtle moving lines/grid pattern in background */}
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

        <div className="hero-section w-full flex flex-col md:flex-row justify-between items-center relative max-w-[72rem] px-6 z-10 gap-x-12 gap-y-12">
          
          {/* Left Text Content (50% Width) */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="heroText h-full w-full md:w-[50%] flex flex-col justify-center text-left"
          >
            {/* 1. Greeting */}
            <motion.div variants={itemVariants}>
              <span className="font-bold text-sm md:text-base uppercase tracking-wider text-color2 px-3 py-1.5 bg-color2/5 border border-color2/15 rounded-full inline-block">
                Hi, I&apos;m Shaik Arif 👋
              </span>
            </motion.div>

            {/* 2. Dynamic Rotating Heading & Subtitle */}
            <motion.div variants={itemVariants}>
              <HeroRoles />
            </motion.div>

            {/* 4. Achievement Badges */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-2 mt-6"
            >
              {badges.map((badge, idx) => (
                <div 
                  key={idx}
                  className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-white/90 text-xs flex items-center gap-1.5 backdrop-blur-sm hover:border-color2/40 hover:bg-white/10 duration-200 transition-all cursor-default"
                >
                  <span>{badge.icon}</span>
                  <span>{badge.text}</span>
                </div>
              ))}
            </motion.div>

            {/* 5. Statistics Row */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-4 gap-4 mt-8 pt-6 border-t border-white/5 max-w-[550px]"
            >
              <CountUp to="2" label="Internships" suffix="+" />
              <CountUp to="5" label="Projects" suffix="+" />
              <CountUp to="2025" label="Graduate" />
              <CountUp to="100" label="Passionate" suffix="%" />
            </motion.div>

            {/* 6. CTA Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4 mt-8"
            >
              <a href="#Projects">
                <button
                  className="bg-color1 hover:bg-color1Hover text-white px-6 py-3 rounded-xl font-bold text-sm tracking-wider uppercase transition duration-300 shadow-lg shadow-color1/30 hover:scale-[1.03]"
                >
                  View Projects
                </button>
              </a>

              <a href={doc} target="_blank" rel="noreferrer">
                <button
                  className="text-color2 border border-color2 hover:bg-color2 hover:text-color3 px-6 py-3 rounded-xl font-bold text-sm tracking-wider uppercase transition duration-300 hover:scale-[1.03]"
                >
                  Download Resume
                </button>
              </a>
            </motion.div>

            {/* 7. Social Links */}
            <motion.div 
              variants={itemVariants}
              className="flex items-center gap-3 mt-6"
            >
              <a 
                href="https://github.com/Shaikarif11" 
                target="_blank" 
                rel="noreferrer"
                className="p-2.5 rounded-xl border border-white/10 bg-white/5 text-white/70 hover:text-color2 hover:border-color2 hover:bg-white/10 transition duration-300 shadow-sm"
                title="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/shaik-arif-91509225a/" 
                target="_blank" 
                rel="noreferrer"
                className="p-2.5 rounded-xl border border-white/10 bg-white/5 text-white/70 hover:text-color2 hover:border-color2 hover:bg-white/10 transition duration-300 shadow-sm"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:shaikarif1801@gmail.com"
                className="p-2.5 rounded-xl border border-white/10 bg-white/5 text-white/70 hover:text-color2 hover:border-color2 hover:bg-white/10 transition duration-300 shadow-sm"
                title="Send Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Interactive Animated Developer Scene (50% Width) */}
          <div 
            className="heroIllustration flex flex-col items-center justify-center w-full md:w-[50%] h-[480px] md:h-[550px] relative pointer-events-auto"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: 1000 }}
          >
            {/* Soft background glows behind character */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.div 
                animate={{ 
                  opacity: [0.3, 0.45, 0.3],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute w-[240px] md:w-[320px] h-[240px] md:h-[320px] rounded-full bg-color1/25 blur-[100px] z-0" 
              />
              <motion.div 
                animate={{ 
                  opacity: [0.25, 0.4, 0.25],
                  scale: [1, 1.15, 1]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute w-[200px] md:w-[280px] h-[200px] md:h-[280px] rounded-full bg-color2/20 blur-[90px] z-0" 
              />
            </div>

            {/* Orbiting skill icons */}
            <OrbitSkills />

            {/* Floating character wrapper with parallax tilt */}
            <motion.div
              style={{
                rotateX: tilt.rotateX,
                rotateY: tilt.rotateY,
                transformStyle: "preserve-3d"
              }}
              animate={{
                y: [0, -15, 0, 15, 0]
              }}
              transition={{
                y: {
                  duration: 6.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                },
                rotateX: { type: "spring", stiffness: 120, damping: 20 },
                rotateY: { type: "spring", stiffness: 120, damping: 20 }
              }}
              className="relative z-10 w-full h-full flex items-center justify-center pointer-events-auto"
            >
              <img
                src={devCharacter}
                alt="3D Developer Character typing on Laptop"
                className="w-[75%] md:w-[85%] max-w-[280px] md:max-w-[340px] object-contain drop-shadow-[0_15px_35px_rgba(128,255,210,0.15)] will-change-transform"
              />
            </motion.div>
          </div>

        </div>
      </div>
      <div className="flex justify-center items-center w-full py-4 bg-deepBlue">
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-5"
          src={scrollIcon}
          alt="Scroll Indicator"
        />
      </div>
    </>
  );
};
