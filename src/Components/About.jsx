import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div id="about" className="about">
      {/*-------- About Section -------------------------------------------------------------------*/}
      <section
        id="about"
        className="py-20 bg-stone-900 motion-safe:animate-fadeIn"
      >
        <div className="container bg-stone-900 mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl text-white font-bold mb-4">
                About Me
                <div className="h-1 w-20 bg-stone-500 mx-auto mt-2"></div>
              </h2>
              <p className="text-lg text-white">
                Passionate designer with a focus on creating meaningful digital
                experiences , Design clean UIs and build them into sleek,
                working websites.{" "}
                <a href="#Contact">
                  <b>Hire me.</b>
                </a>
              </p>
            </div>
            <div className="bg-stone-400/10 rounded-3xl shadow-md overflow-hidden">
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
                    Frontend Developer | Web Designer
                  </h3>
                  <p className="text-white mb-4">
                    I'm Caleb Mason, a passionate frontend developer and
                    designer with A Year of experience crafting responsive,
                    secure web experiences. Specializing in React and Tailwind
                    CSS, I build intuitive UIs that prioritize user engagement.
                    As a logo designer, I've created brand identities for
                    startups using tools like Figma and Canva Editor. My
                    WordPress expertise includes custom themes, plugins, and
                    security implementations such as HTTPS enforcement, secure
                    authentication, and vulnerability scanning with tools like
                    Wordfence. <br />
                    <h4 className="font-bold underline-offset-2 underline">
                      Key Achievements:
                    </h4>
                    <ul className="text-white space-x-1">
                      <li>
                        • Developed 15+ responsive sites, reducing load times by
                        40% via optimization.
                      </li>
                      <li>
                        • Designed logos for just 3 clients, enhancing brand
                        visibility.{" "}
                      </li>
                      <li>
                        • Secured WordPress sites against common threats,
                        ensuring 100% uptime for e-commerce clients!.
                      </li>
                    </ul>
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
                      <h4 className="font-bold text-white mb-2 underline-offset-3 underline">
                        Skills
                      </h4>
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
                      <h4 className="font-bold text-white mb-2 underline-offset-3 underline">
                        Tools
                      </h4>
                      <ul className="text-white space-y-1">
                        <li>VS Code</li>
                        <li>Canva </li>
                        <li>Figma</li>
                        <li>Framer</li>
                        <li>Webflow</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 items-center justify-start">
                    <a
                      href="#contact"
                      className="group w-full sm:w-auto bg-stone-500 hover:bg-stone-700 text-white py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105 text-base font-medium flex items-center justify-center gap-2"
                    >
                      Get in Touch
                      <i className="fas fa-arrow-right transition-transform group-hover:translate-x-1"></i>
                    </a>
                    <a
                      href="/Caleb-Mason-Portfolio.pdf"
                      download
                      className="group w-full sm:w-auto border-2 border-stone-500 hover:bg-stone-500/10 text-white py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105 text-base font-medium flex items-center justify-center gap-2"
                    >
                      Download CV
                      <i className="fas fa-download transition-transform group-hover:translate-y-1"></i>
                    </a>
                  </div>
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
