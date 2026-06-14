import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import devCharacter from "../assets/images/3d_developer_character.png";
import linkedin from "../assets/icons/linkedin.svg";
import github from "../assets/icons/github.svg";
import scrollIcon from "../assets/icons/scroll-animation.svg";

// New high-fidelity interactive sub-components
import OrbitSkills from "./OrbitSkills";
import FloatingParticles from "./FloatingParticles";
import AnimatedSkillCards from "./AnimatedSkillCards";

export const HeroSect = () => {
  // Cycle titles relevant to Shaik Arif
  const words = ["Full Stack", "MERN Stack", "Machine Learning", "Software"];
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const word = words[index];

  // Mouse tilt tracking states
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

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => {
        const next = i + dir;
        if (next >= words.length || next < 0) {
          setDir((d) => -d);
          return i + -dir;
        }
        return next;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [dir, words.length]);

  return (
    <>
      <div 
        id="Home" 
        className="flex justify-center min-h-[90vh] items-center pt-8 bg-deepBlue relative overflow-hidden"
      >
        {/* Floating tech background particles */}
        <FloatingParticles />

        {/* Subtle moving lines/grid pattern in background */}
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

        <div className="hero-section w-full flex flex-col md:flex-row justify-between items-center relative max-w-[60rem] px-5 z-10 gap-y-12">
          
          {/* Left Text Content (45% Width) */}
          <div className="heroText h-full w-full md:w-[45%] flex flex-col justify-center text-left">
            <div className="flex flex-col text-white tracking-wide gap-3">
              <span className="font-semibold text-2xl md:text-4xl text-color2">
                Hi! I&apos;m Shaik Arif,
              </span>

              {/* Title line: animated word + sticky "Developer" */}
              <span className="font-bold text-3xl md:text-5xl flex items-baseline flex-wrap">
                A&nbsp;
                <motion.span
                  key={word}
                  initial={{ width: "fit-content", opacity: 0 }}
                  animate={{ width: "auto", opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 0.8,
                    ease: "easeInOut",
                  }}
                  className="bg-fontBlue text-transparent bg-clip-text overflow-hidden mr-1 whitespace-nowrap"
                >
                  {word}
                </motion.span>
                &nbsp;Developer
                <motion.span
                  className="h-8 w-[2px] bg-color2 ml-1 self-center"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                />
              </span>

              <h2 className="text-xl md:text-2xl font-medium text-white/90 max-w-[95%]">
                Building scalable web applications and intelligent machine learning solutions.
              </h2>

              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="text-[#989898] font-normal text-xs md:text-base md:w-[95%] leading-relaxed mt-2"
              >
                Computer Science (AI & DS) graduate with hands-on experience in full-stack web development and machine learning. Passionate about solving real-world problems using technology.
              </motion.span>
            </div>

            <div className="buttons flex flex-wrap gap-4 text-xs tracking-widest mt-8">
              <motion.a
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                href="#Projects"
              >
                <button
                  className="bg-color1 hover:bg-color1Hover text-white w-[14rem] md:w-[12rem] rounded-3xl uppercase text-center font-bold cursor-pointer py-3 transition duration-300 shadow-lg shadow-color1/30"
                >
                  Explore Projects
                </button>
              </motion.a>

              <motion.a
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                href="#Contact"
              >
                <button
                  className="text-color2 border-2 border-color2 hover:bg-color2 hover:text-color3 w-[14rem] md:w-[12rem] uppercase text-center font-bold cursor-pointer py-3 transition duration-300"
                >
                  Get in Touch
                </button>
              </motion.a>
            </div>

            <div className="social-icons flex items-center gap-4 mt-8">
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                href="https://www.linkedin.com/in/shaik-arif-91509225a/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="w-8 cursor-pointer hover:scale-125 duration-200 transition-all filter invert brightness-200"
                  src={linkedin}
                  alt="LinkedIn"
                />
              </motion.a>
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                href="https://github.com/Shaikarif11"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="w-8 cursor-pointer hover:scale-125 duration-200 transition-all filter invert brightness-200"
                  src={github}
                  alt="GitHub"
                />
              </motion.a>
            </div>
          </div>

          {/* Right Interactive Animated Developer Scene (55% Width) */}
          <div 
            className="heroIllustration flex flex-col items-center justify-center w-full md:w-[55%] h-[480px] md:h-[550px] relative pointer-events-auto"
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

            {/* Floating glassmorphism skill cards */}
            <AnimatedSkillCards />

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
      <div className="flex justify-center items-center w-full py-4">
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
