import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div id="about" className="about">
      <h2>About Me</h2>
      {/*-------- About Section -------------------------------------------------------------------*/}
        <section id="about" className="py-20 bg-slate-900 motion-safe:animate-fadeIn">
          <div className="container bg-slate-900 mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl text-white font-bold mb-4">
                  About Me
                </h2>
                <p className="text-lg text-white">
                  Passionate designer with a focus on creating meaningful digital
                  experiences , Design clean UIs and build them into sleek,
                  working websites. <b>Hire me.</b>
                </p>
              </div>
              <div className="bg-slate-100/10 rounded-3xl shadow-md overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 relative h-64 md:h-auto overflow-hidden object-cover object-top transition-transform duration-500 ease-in-out group-hover:scale-110">
                    <img
                      src="/about.jpg"
                      alt="Designer portrait"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6 md:p-8">
                    <h3 className="text-2xl font-bold mb-4 text-white underline-offset-4 underline">
                      Creative Designer & Frontend Developer
                    </h3>
                    <p className="text-white mb-4">
                      I'm a passionate and creative professional with less than a
                      year of experience in logo design, web design and front-end
                      development. I specialize in crafting visually appealing,
                      memorable logos that capture brand identity and resonate
                      with target audiences. In front-end development, I most time
                      use HTML , CSS and JavaScript and also leverage modern
                      frameworks and libraries like React.js and Tailwind CSS to
                      build responsive, user-friendly, and dynamic web interfaces.
                      My work blends design aesthetics with technical precision,
                      ensuring seamless user experiences and pixel-perfect
                      results. I thrive on turning ideas into impactful digital
                      solutions, staying updated with industry trends, and
                      delivering projects that align with client goals. Let's
                      create something amazing together!
                    </p>
                    <p className="text-white mb-6">
                      I believe in the power of design to solve problems, and
                      create meaningful connections between brands and their
                      audiences. Every project is an opportunity to craft
                      something unique that resonates with viewers and drives
                      results.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <h4 className="font-bold text-white mb-2 underline-offset-3 underline">Skills</h4>
                        <ul className="text-white space-y-1">
                          <li>Front-end Development</li>
                          <li>UI Web Design</li>
                          <li>Logo Designs</li>
                          <li>WordPress Developer & Designer</li>
                          <li>Brand Design</li>
                          <li>Social Media Content Creation</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-white mb-2 underline-offset-3 underline">Tools</h4>
                        <ul className="text-white space-y-1">
                          <li>VS Code</li>
                          <li>Figma</li>
                          <li>Canva </li>
                          <li>Framer</li>
                          <li>Webflow</li>
                        </ul>
                      </div>
                    </div>
                    <a
                      href="#contact"
                      className="inline-block bg-stone-500 hover:bg-stone-700 text-white py-2 px-6 rounded-lg transition-colors duration-300 font-medium !rounded-button cursor-pointer"
                    >
                      Get in Touch
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  );
};

export default About;