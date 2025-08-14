import React from 'react';
import { Link } from 'react-router-dom';
import '/Components/Hero.jsx';

const Hero = () => {
  return (
    <div id="hero" className="hero">
      {/* <h1>Welcome to My Portfolio</h1> */}
      {/*----- Hero Section ---------------------------------------------------------------------------------------*/}
      <section
        id="hero"
        className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-slate-900 text-white"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center motion-safe:animate-fadeInUp">
            <h1 className="text-4xl md:text-6xl font-bold mb-6" >
              Frontend Developer <br />& Web Designer
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 mb-8">Turn ideas into beautiful designs, responsive websites, and impactful logos.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="#projects"
                className="bg-stone-500 hover:bg-stone-700 text-white py-3 px-8 rounded-lg transition-colors duration-300 text-lg font-medium !rounded-button cursor-pointer"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="bg-transparent border-2 border-white hover:bg-white/10 text-white py-3 px-8 rounded-lg transition-colors duration-300 hover:scale-105 text-lg font-medium !rounded-button cursor-pointer"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
        <div className="mt-16 flex justify-center">
          <a
            href="#projects"
            className="text-white/70 hover:text-white transition-colors duration-300 animate-bounce"
          >
            <i className="fas fa-chevron-down text-2xl"></i>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Hero;