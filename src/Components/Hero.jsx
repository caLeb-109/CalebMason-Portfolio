import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  const roles = ["Frontend Developer", "WordPress Web Dev", "Web Designer"];
  const [currentRole, setCurrentRole] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div id="hero" className="hero">
      {/*----- Hero Section ---------------------------------------------------------------------------------------*/}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-stone-800 to-stone-900 text-white"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center motion-safe:animate-fadeInUp">
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6 text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {" "}
                {roles[currentRole]}
              </h1>
              <div className="h-1 w-20 bg-stone-500 mx-auto mt-2"></div>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-slate-200 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Crafting digital experiences that combine creativity with
              technical excellence.
            </motion.p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="#projects"
                className="bg-stone-500 hover:bg-stone-700 text-white py-3 px-8 rounded-lg transition-colors duration-300 hover:scale-105 text-lg font-medium !rounded-button cursor-pointer"
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
        <div className="mt-16 flex justify-center"></div>
      </section>
    </div>
  );
};

export default Hero;
