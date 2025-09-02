import React from "react";
import { Link } from "react-router-dom";
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
      {/* ----------- Navigation ------------------------------------------------------------------------- */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "text-white-800 bg-stone-900/90 backdrop-blur-md shadow-md"
            : ""
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a
            href="#"
            className="text-xl font-bold text-white hover:text-stone-400 hover:border-amber-100"
          >
            CalebMason.
          </a>
          {/*-------- Desktop Navigation ----------------------------------------------------------*/}
          <div className="hidden md:flex space-x-8">
            <a
              href="#hero"
              className="text-white hover:text-stone-300 transition-colors"
            >
              Home
            </a>
            <a
              href="#projects"
              className="text-white hover:text-stone-300 transition-colors"
            >
              Projects
            </a>
            <a
              href="#about"
              className="text-white hover:text-stone-300 transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-white hover:text-stone-300 transition-colors"
            >
              Contact
            </a>
          </div>
          {/*-------- Mobile Menu Button -----------------------------------------------------------------------*/}
          <button
            className="md:hidden text-white focus:outline-none cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
           
            <div class="w-9 h-10 cursor-pointer flex flex-col items-center justify-center">
              <input class="hidden peer" type="checkbox" />
              <div class="w-[50%] h-[2px] bg-white rounded-sm transition-all duration-300 origin-left translate-y-[0.45rem] peer-checked:rotate-[-45deg]"></div>
              <div class="w-[50%] h-[2px] bg-white rounded-md transition-all duration-300 origin-center peer-checked:hidden"></div>
              <div class="w-[50%] h-[2px] bg-white rounded-md transition-all duration-300 origin-left -translate-y-[0.45rem] peer-checked:rotate-[45deg]"></div>
            </div>
           
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
              className="text-white hover:text-stone-400 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#projects"
              className="text-white hover:text-stone-400 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="#about"
              className="text-white hover:text-stone-400 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#contact"
              className="text-white hover:text-stone-400 transition-colors py-2"
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
