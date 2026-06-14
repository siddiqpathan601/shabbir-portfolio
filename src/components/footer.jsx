import github from "../assets/icons/github.svg";
import linkedin from "../assets/icons/linkedin.svg";

export const Footer = () => {
  return (
    <>
      <div className="flex flex-col w-full my-16 bg-deepBlue">
        <div className="w-full h-[1px] bg-white/10"></div>
        <div className="nav-items w-full flex justify-center gap-6 text-white text-center text-xs font-semibold uppercase mt-8">
          <a href="#Home" className="nav-option cursor-pointer hover:text-color2 transition">
            Home
          </a>
          <a href="#About" className="nav-option cursor-pointer hover:text-color2 transition">
            About
          </a>
          <a href="#Skills" className="nav-option cursor-pointer hover:text-color2 transition">
            Skills
          </a>
          <a href="#Experience" className="nav-option cursor-pointer hover:text-color2 transition">
            Experience
          </a>
          <a href="#Projects" className="nav-option cursor-pointer hover:text-color2 transition">
            Projects
          </a>
          <a href="#Education" className="nav-option cursor-pointer hover:text-color2 transition">
            Education
          </a>
        </div>
        <div className="icons w-full flex justify-center mt-6 items-center gap-6">
          <div className="icon">
            <a
              href="https://github.com/Shaikarif11"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="cursor-pointer hover:scale-125 duration-200 transition-all w-[28px] h-[28px] object-contain filter invert brightness-200"
                src={github}
                alt="GitHub"
              />
            </a>
          </div>
          <div className="icon">
            <a
              href="https://www.linkedin.com/in/shaik-arif-91509225a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="cursor-pointer hover:scale-125 duration-200 transition-all w-[28px] h-[28px] object-contain filter invert brightness-200"
                src={linkedin}
                alt="LinkedIn"
              />
            </a>
          </div>
        </div>
        <div className="text-white/60 font-medium text-xs text-center my-6 flex flex-col gap-1">
          <div className="title text-white font-bold text-sm">Shaik Arif</div>
          <div className="title">Building scalable web applications and intelligent machine learning solutions.</div>
          <div className="title text-white/40 text-[10px] mt-2">&copy; {new Date().getFullYear()} Shaik Arif. All rights reserved.</div>
        </div>
      </div>
    </>
  );
};
