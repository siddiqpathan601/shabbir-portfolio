import { motion } from "motion/react";
import PropTypes from "prop-types";
import closeBtn from "../assets/icons/close.svg";

export const ProjectInsights = ({
  stopScroll,
  handleInsightPanel,
  title,
  desc,
  category,
  techstack,
  reportLink,
}) => {
  return (
    <>
      <div
        className={`"project-insights will-change-transform will-change-opacity ${
          stopScroll ? "flex" : "hidden"
        } fixed top-0 w-full h-full justify-center items-center z-[100] bg-black/20 backdrop-blur-sm overflow-hidden"`}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="bg-deepBlue backdrop-blur-md rounded-2xl h-fit w-[20rem] z-[101] relative text-white font-semibold border-2 border-white py-3"
        >
          <div className="absolute right-3 top-3 border-2 border-white rounded-full p-1">
            <img
              onClick={() => handleInsightPanel(false)}
              className="w-6 cursor-pointer"
              src={closeBtn}
              alt=""
            />
          </div>
          <div className="project-insight-text flex flex-col h-full p-4 gap-y-5 mt-5">
            <div className="Project-name text-3xl">{title}</div>
            <div className="Project-overview flex flex-col">
              <span className="text-lg">Overview</span>
              <span className="text-xs text-justify">{desc}</span>
            </div>
            <div className="category text-lg flex flex-col">
              Category <span className="font-light text-xs">{category}</span>
            </div>
            <div className="project-tech-stack flex flex-col gap-1">
              <div className="title text-lg">Tech Stack</div>
              <div className="tech-icons grid grid-cols-4 gap-5">
                {techstack.map((item, index) => (
                  <img key={index} className="w-10" src={item} alt="" />
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3 mt-2">
              <span className="text-white text-xs">
                Get the detailed Report
              </span>
              <a
                onClick={() =>
                  reportLink == "" &&
                  alert("Sorry! Currently Report is not available")
                }
                href={reportLink}
              >
                <button className="border-2 border-color2 text-color2 rounded-full w-1/2 py-2 text-xs hover:bg-color2 hover:text-color3">
                  Download Now
                </button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

ProjectInsights.propTypes = {
  stopScroll: PropTypes.bool,
  handleInsightPanel: PropTypes.func,
  title: PropTypes.string,
  desc: PropTypes.string,
  category: PropTypes.string,
  techstack: PropTypes.array,
  reportLink: PropTypes.string,
};
