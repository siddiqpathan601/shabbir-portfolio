import { easeInOut, motion } from "framer-motion";
import doc from "../assets/doc/ShaikArifResume.pdf";
import css from "../assets/icons/skills-icon/css.svg";
import HTML from "../assets/icons/skills-icon/html.svg";
import js from "../assets/icons/skills-icon/javascript.svg";
import React from "../assets/icons/skills-icon/react-js.svg";
import tailwind from "../assets/icons/skills-icon/tailwindcss.svg";
import Restapis from "../assets/icons/skills-icon/Rest-apis.png";
import Github from "../assets/icons/skills-icon/github.png";
import node from "../assets/icons/skills-icon/nodejs.svg";
import mongodb from "../assets/icons/skills-icon/mongodb.svg";
import python from "../assets/icons/skills-icon/python.svg";
import ml from "../assets/icons/skills-icon/ml.png";
import character from "../assets/images/character-removebg-preview.png";
import { RadarChart } from "./radarChart";

export const AboutMe = () => {
  const skillIcons = [
    React,
    HTML,
    css,
    js,
    tailwind,
    node,
    mongodb,
    python,
    ml,
    Restapis,
    Github,
  ];

  return (
    <>
      <div id="About" className="flex justify-center py-12 bg-deepBlue">
        <div className="w-full px-5 max-w-[60rem] h-full">
          <div className="project-title text-5xl md:text-8xl h-[50vh] tracking-wide font-extrabold leading-snug uppercase text-white flex max-md:justify-center items-center">
            <div className="bg-color1/40 rounded-full absolute size-80 blur-[100px] z-10"></div>
            <motion.div className="z-30">
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="will-change-transform will-change-opacity"
              >
                The
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                className="will-change-transform will-change-opacity"
              >
                developer
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
                className="will-change-transform will-change-opacity"
              >
                behind
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
                className="will-change-transform will-change-opacity"
              >
                the code
              </motion.div>
            </motion.div>
          </div>

          <div className="Me min-h-[50vh] relative flex flex-col md:flex-row items-center py-5 md:mt-20 gap-8">
            <div className="w-full md:w-1/2 flex justify-center">
              <motion.div
                initial={{ opacity: 0, filter: "blur(50px)", scale: 0 }}
                whileInView={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ amount: 0.7 }}
                className="image w-full max-w-[20rem] flex justify-center z-20 relative will-change-transform will-change-opacity"
              >
                <img
                  className="w-2/3 max-w-[18rem] z-20"
                  src={character}
                  alt="Shaik Arif Profile Illustration"
                />
                <div className="absolute w-full h-full z-10 bg-color1 custom-radius"></div>
              </motion.div>
            </div>
            <div className="AboutMeText flex flex-col gap-y-4 md:w-1/2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: easeInOut }}
                viewport={{ amount: 0.7 }}
                className="text-white text-3xl font-semibold text-color2"
              >
                About Me
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7, ease: easeInOut }}
                viewport={{ amount: 0.7 }}
                className="about-me text-white text-sm md:text-base leading-relaxed text-justify"
              >
                Hi, I&apos;m Shaik Arif! I&apos;m a Computer Science (AI & DS) graduate with hands-on experience in full-stack web development and machine learning.
                <br /><br />
                I specialize in building scalable MERN stack applications, REST APIs, and predictive machine learning models. I am passionate about writing clean, modular code and combining technology with creative logic to solve real-world problems.
              </motion.div>
              <a href={doc} target="_blank" rel="noreferrer">
                <button className="bg-color1 text-white hover:bg-color1Hover rounded-3xl text-center font-semibold cursor-pointer w-48 h-[5vh] tracking-widest text-xs mt-3 duration-200 transition-all shadow-lg hover:shadow-color1/30">
                  Download Resume
                </button>
              </a>
            </div>
          </div>

          <div id="Skills" className="project-title h-[40vh] flex justify-center items-center mt-20">
            <div className="bg-color1/40 rounded-full absolute size-80 blur-[100px] z-10"></div>
            <div className="z-30 font-extrabold uppercase text-white leading-snug md:leading-snug text-5xl md:text-8xl tracking-wide">
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
                className="will-change-transform will-change-opacity"
              >
                My
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4, ease: "easeInOut" }}
                className="will-change-transform will-change-opacity"
              >
                Tech
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6, ease: "easeInOut" }}
                className="will-change-transform will-change-opacity"
              >
                Stack
              </motion.div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-10 mt-10">
            <div className="flex flex-col md:w-1/2">
              <div className="flex flex-col justify-center p-5 max-md:items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ amount: 0.7 }}
                  className="text-white text-3xl tracking-wide font-semibold self-start text-color2"
                >
                  Skills Overview
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ amount: 0.7 }}
                  className="about-me text-white/80 text-sm md:text-base leading-relaxed mt-4 text-justify"
                >
                  I build functional, scalable applications by leveraging modern web methodologies and machine learning models. I specialize in MERN stack development for interfaces & web logic, and Scikit-Learn for training robust ML pipelines.
                </motion.div>
              </div>
              <div className="skill-icons flex justify-center items-center px-5 mt-4">
                <div className="grid grid-cols-6 gap-6 w-full justify-items-center">
                  {skillIcons.map((icon, index) => (
                    <motion.img
                      initial={{ rotate: 360, opacity: 0 }}
                      whileInView={{ rotate: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      key={index}
                      className="size-12 hover:scale-110 duration-200 transition-all cursor-pointer p-1 bg-white/5 border border-white/10 rounded-xl"
                      src={icon}
                      alt="Tech icon"
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center md:w-1/2 w-full h-[350px]">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-color3 px-4 py-1.5 text-xs font-bold tracking-wider bg-color2 rounded-3xl"
              >
                Proficiency Chart
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ amount: 0.7 }}
                className="w-full h-full flex justify-center items-center will-change-transform will-change-opacity"
              >
                <RadarChart />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
