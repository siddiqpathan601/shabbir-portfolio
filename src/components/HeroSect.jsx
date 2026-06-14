import { motion } from "motion/react";
import { useState, useEffect } from "react";
import heroIllustration from "../assets/images/Hero-illustrations.png";
import linkedin from "../assets/icons/linkedin.svg";
import github from "../assets/icons/github.svg";
import scrollIcon from "../assets/icons/scroll-animation.svg";

export const HeroSect = () => {
  // Cycle titles relevant to Shaik Arif
  const words = ["Full Stack", "MERN Stack", "Machine Learning", "Software"];
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const word = words[index];

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
      <div id="Home" className="flex justify-center min-h-[85vh] items-center pt-8">
        <div className="hero-section w-full flex flex-col md:flex-row justify-between relative max-w-[60rem] px-5">
          <div className="heroText h-full w-full z-30 flex flex-col justify-center">
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

              <h2 className="text-xl md:text-2xl font-medium text-white/90 max-w-[90%]">
                Building scalable web applications and intelligent machine learning solutions.
              </h2>

              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="text-[#989898] font-normal text-xs md:text-base md:w-[85%] leading-relaxed mt-2"
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

          <div className="heroIllustration hidden md:flex flex-col items-center w-[45%] h-full relative">
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="w-full object-contain relative will-change-transform will-change-opacity"
              src={heroIllustration}
              alt="Hero Illustration"
            />
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
          alt="Scroll"
        />
      </div>
    </>
  );
};
