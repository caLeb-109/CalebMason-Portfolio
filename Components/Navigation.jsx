import React from "react";
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";


const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div id="navigation" className="navigation">
      {/* <h2>About Me</h2> */}
      {/* ----------- Navigation ------------------------------------------------------------------------- */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "text-slate-800 bg-slate-900/90 backdrop-blur-md shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#" className="text-xl font-bold text-stone-400">
            CalebMason.
          </a>
          {/*-------- Desktop Navigation ----------------------------------------------------------*/}
          <div className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="text-stone-500 hover:text-stone-700 transition-colors"
            >
              Home
            </a>
            <a
              href="#projects"
              className="text-stone-500 hover:text-stone-700 transition-colors"
            >
              Projects
            </a>
            <a
              href="#about"
              className="text-stone-500 hover:text-stone-700 transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-stone-500 hover:text-stone-700 transition-colors"
            >
              Contact
            </a>
          </div>
          {/*-------- Mobile Menu Button -----------------------------------------------------------------------*/}
          <button
            className="md:hidden text-stone-500 focus:outline-none cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {" "}
            <div class="w-9 h-10 cursor-pointer flex flex-col items-center justify-center">
              <input class="hidden peer" type="checkbox" />
              <div class="w-[50%] h-[2px] bg-stone-500 rounded-sm transition-all duration-300 origin-left translate-y-[0.45rem] peer-checked:rotate-[-45deg]"></div>
              <div class="w-[50%] h-[2px] bg-stone-500 rounded-md transition-all duration-300 origin-center peer-checked:hidden"></div>
              <div class="w-[50%] h-[2px] bg-stone-500 rounded-md transition-all duration-300 origin-left -translate-y-[0.45rem] peer-checked:rotate-[45deg]"></div>
            </div>
            <i
              className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"} text-xl`}
            ></i>
          </button>
        </div>
        {/*------- Mobile Menu --------------------------------------------------------------------------------------*/}
        <div
          className={`md:hidden bg-blur/90 backdrop-blur-md shadow-lg transition-all duration-300 overflow-hidden ${
            isMenuOpen ? "max-h-60" : "max-h-0"
          }`}
        >
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-4">
            <a
              href="#home"
              className="text-stone-500 hover:text-stone-700transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#projects"
              className="text-stone-500 hover:text-stone-700 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="#about"
              className="text-stone-500 hover:text-stone-700 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#contact"
              className="text-stone-500 hover:text-stone-700 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
