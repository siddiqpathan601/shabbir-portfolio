import menu from "../assets/icons/menu.svg";
import close from "../assets/icons/close.svg";
import { useState } from "react";

export const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className="flex w-full justify-center sticky top-0 z-50 bg-deepBlue/80 backdrop-blur-md border-b border-white/5">
        <nav className="flex h-[12vh] w-full justify-between items-center px-5 py-6 max-w-[60rem]">
          <div className="logo">
            <a href="#Home">
              <h1
                className="text-2xl font-bold text-white tracking-wider cursor-pointer"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                arif
                <span className="bg-gradient-to-r from-[#80FFD2] to-[#6A57E0] bg-clip-text text-transparent">
                  .dev
                </span>
              </h1>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="menu-items hidden md:flex items-center gap-6 text-xs text-white uppercase font-semibold">
            <a href="#Home" className="menu-item cursor-pointer hover:text-color2 transition duration-200">
              Home
            </a>
            <a href="#About" className="menu-item cursor-pointer hover:text-color2 transition duration-200">
              About
            </a>
            <a href="#Skills" className="menu-item cursor-pointer hover:text-color2 transition duration-200">
              Skills
            </a>
            <a href="#Experience" className="menu-item cursor-pointer hover:text-color2 transition duration-200">
              Experience
            </a>
            <a href="#Projects" className="menu-item cursor-pointer hover:text-color2 transition duration-200">
              Projects
            </a>
            <a href="#Education" className="menu-item cursor-pointer hover:text-color2 transition duration-200">
              Education
            </a>
            <a href="#Contact" className="menu-item cursor-pointer hover:text-color2 transition duration-200">
              Contact
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <div onClick={() => setToggle(!toggle)} className="menu md:hidden cursor-pointer">
            <img className="w-8" src={menu} alt="Open Menu" />
          </div>
        </nav>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`${
          toggle ? "translate-x-0" : "translate-x-full"
        } fixed inset-y-0 right-0 w-full sm:w-80 bg-black/95 z-50 backdrop-blur-xl flex flex-col justify-center items-center gap-y-8 transition-transform duration-300 ease-in-out`}
      >
        <div className="close">
          <img
            onClick={() => setToggle(!toggle)}
            className="w-10 absolute right-4 top-8 cursor-pointer"
            src={close}
            alt="Close Menu"
          />
        </div>
        <div className="text text-white uppercase text-3xl font-light flex flex-col gap-6 items-center">
          <a
            onClick={() => setToggle(!toggle)}
            href="#Home"
            className="menu-item cursor-pointer hover:text-color2 transition duration-200"
          >
            Home
          </a>
          <a
            onClick={() => setToggle(!toggle)}
            href="#About"
            className="menu-item cursor-pointer hover:text-color2 transition duration-200"
          >
            About
          </a>
          <a
            onClick={() => setToggle(!toggle)}
            href="#Skills"
            className="menu-item cursor-pointer hover:text-color2 transition duration-200"
          >
            Skills
          </a>
          <a
            onClick={() => setToggle(!toggle)}
            href="#Experience"
            className="menu-item cursor-pointer hover:text-color2 transition duration-200"
          >
            Experience
          </a>
          <a
            onClick={() => setToggle(!toggle)}
            href="#Projects"
            className="menu-item cursor-pointer hover:text-color2 transition duration-200"
          >
            Projects
          </a>
          <a
            onClick={() => setToggle(!toggle)}
            href="#Education"
            className="menu-item cursor-pointer hover:text-color2 transition duration-200"
          >
            Education & Certs
          </a>
          <a
            onClick={() => setToggle(!toggle)}
            href="#Contact"
            className="menu-item cursor-pointer hover:text-color2 transition duration-200"
          >
            Contact
          </a>
        </div>
      </div>
    </>
  );
};
