import React, { useState, useEffect } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("all");
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
  const projects = [
    {
      id: 1,
      title: "Travel Landing Page",
      category: "Code",
      // link: "https://travel-landing-page-johqw53xy-caleb-mason-s-projects.vercel.app",
      description:
        "A visually captivating and user-friendly landing page for a travel booking platform. Built with React and Tailwind CSS, it features a responsive design and intuitive search functionality to inspire users to book their next adventure.",
      image: "/project1.png",
    },
    {
      id: 2,
      title: "Finance App Interface",
      category: "UI Mockup/Designs",
      description:
        "A sleek and modern UI design for a mobile finance application, focusing on a clean user experience. This concept features a comprehensive dashboard for at-a-glance financial overviews, detailed transaction history.",
      image:
        "https://readdy.ai/api/search-image?query=Professional%20UI%20mockup%20of%20finance%20mobile%20application%20interface%20with%20dashboard%2C%20transaction%20history%2C%20and%20investment%20tracking%20features%2C%20displayed%20on%20smartphone%20device%20frame%2C%20clean%20modern%20design%20with%20blue%20accent%20colors%2C%20isolated%20on%20soft%20gradient%20background%2C%20high-quality%20UI%20design%20portfolio&width=600&height=400&seq=2&orientation=landscape",
    },
    {
      id: 3,
      title: "Weather App",
      category: "Code",
      description:
        "Clean and Complete Weather app with user-friendly features , coded with HTML , CSS , and JavaScript and fetch API used to get the current weather data.",
      image: "/Weatherapp.png",
    },
    {
      id: 4,
      title: "",
      category: "UI Mockup/Designs",
      description:
        "",
      image:
        "",
    },
    {
      id: 5,
      title: "Clone Moviebox App",
      category: "Code",
      description:
        "A vibrant and well responsive moviebox app , cloned and edited to user's taste...Built with React.jsx and Tailwind.",
      image: "/Movieapp.png",
    },
    {
      id: 6,
      title: "Health Tracking Dashboard",
      category: "UI Mockup/Designs",
      description:
        "Comprehensive health tracking application interface with intuitive data visualization and personalized insights for users.",
      image:
        "https://readdy.ai/api/search-image?query=Professional%20UI%20mockup%20of%20health%20tracking%20dashboard%20with%20fitness%20metrics%2C%20nutrition%20tracking%2C%20sleep%20analysis%2C%20and%20goal%20setting%20features%2C%20displayed%20on%20multiple%20device%20frames%2C%20clean%20modern%20design%20with%20teal%20accent%20colors%2C%20isolated%20on%20soft%20gradient%20background%2C%20high-quality%20UI%20design%20portfolio&width=600&height=400&seq=6&orientation=landscape",
    },
    {
      id: 7,
      title: "",
      category: "UI Mockup/Designs",
      description:
        "",
      image:
        "",
    },
    {
      id: 8,
      title: "International Film Festival",
      category: "UI Mockup/Designs",
      description:
        "Bold and dynamic poster design for an international film festival, featuring innovative typography and visual storytelling.",
      video:
        "./CIRCLE design CapCut Video_20250721_edit.mp4",
    },
  ];
  const filteredProjects = projects.filter((project) => {
    if (activeTab === "all") return true;
    if (activeTab === "Code") {
      return project.category === "Code";
    }
    if (activeTab === "UI Mockup/Designs") {
      return project.category === "UI Mockup/Designs";
    }
    return false;
  });
  const linkedinUrl = "https://www.linkedin.com/in/caleb-mason-44786028b/";
  const XUrl = "https://x.com/caleb36811/";
  const whatsappUrl = "https://whatsapp.com/+2349152300181/";
  const facebookUrl = "https://web.facebook.com/profile.php?id=61575761327047";
  const instagramUrl = "https://www.instagram.com/caleb36811/";
  return (
    <div className="min-h-screen bg-black text-slate-800">
      {/*----------- Navigation -------------------------------------------------------------------------*/}
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
      {/*----- Hero Section ---------------------------------------------------------------------------------------*/}
      <section
        id="home"
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
      {/*------- Projects Section ----------------------------------------------------------------------*/}
      <section id="projects" className="py-20 bg-slate-800 ">
        <div className="container  bg-slate-800 mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-white font-bold mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-white max-w-2xl mx-auto">
              Explore my diverse portfolio showcasing a range of creative
              projects across different disciplines.
            </p>
          </div>
          {/*----------- Project Filters ------------------------------------------------------------------*/}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
            <button
              className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition-colors duration-300 !rounded-button cursor-pointer ${
                activeTab === "all"
                  ? "bg-stone-500 text-white"
                  : "bg-slate-100 text-slate-700 "
              }`}
              onClick={() => setActiveTab("all")}
            >
              All Projects
            </button>
            <button
              className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition-colors duration-300 !rounded-button cursor-pointer ${
                activeTab === "social"
                  ? "bg-stone-500 text-white"
                  : "bg-slate-100 text-slate-700 "
              }`}
              onClick={() => setActiveTab("social")}
            >
              Codes
            </button>
            <button
              className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition-colors duration-300 !rounded-button cursor-pointer ${
                activeTab === "ui"
                  ? "bg-stone-500 text-white"
                  : "bg-slate-100 text-slate-700 "
              }`}
              onClick={() => setActiveTab("ui")}
            >
              UI Mockup/Designs
            </button>
          </div>
          {/*------------- Projects Grid -----------------------------------------------------------------------------*/}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl duration-300 group transform hover:scale-105 hover:-translate-y-1 transition-all ease-in-out"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-stone-600/90 text-white text-xs font-medium px-3 py-1 rounded-full backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-2 text-slate-800 motion-safe:animate-fadeInUp" style={{ animationDelay: `${index * 0.15}s` }}>
                    {project.title}
                  </h3>
                  <p className="text-slate-600 mb-4 text-sm">
                    {project.description}
                  </p>
                  {/* <button className="text-stone-600 font-medium flex items-center group-hover:text-stone-800 transition-colors cursor-pointer !rounded-button">
                    View Project{project.link}
                    <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
                  </button> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
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
                      <h4 className="font-bold text-white mb-2">Skills</h4>
                      <ul className="text-white space-y-1">
                        <li>Front-end Development</li>
                        <li>UI Web Design</li>
                        <li>React.js</li>
                        <li>Tailwind CSS</li>
                        <li>Logo Designing</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-2">Tools</h4>
                      <ul className="text-white space-y-1">
                        <li>VS Code</li>
                        <li>Canva Editor</li>
                        <li>Figma</li>
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
      {/*----- Contact Section ---------------------------------------------------------------------*/}
      <section id="contact" className="py-20 bg-slate-800 text-white motion-safe:animate-slideInLeft">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Let's Work Together
              </h2>
              <p className="text-xl text-indigo-200">
                Have a project in mind? I'd love to hear about it.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-indigo-100 mb-2 font-medium"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full bg-white/5 border border-indigo-300/30 rounded-lg px-4 py-3 text-white placeholder-indigo-200/70 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all border-none"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-indigo-100 mb-2 font-medium"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full bg-white/5 border border-indigo-300/30 rounded-lg px-4 py-3 text-white placeholder-indigo-200/70 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all border-none"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-indigo-100 mb-2 font-medium"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full bg-white/5 border border-indigo-300/30 rounded-lg px-4 py-3 text-white placeholder-indigo-200/70 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all border-none"
                    placeholder="Project in Mind?"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-indigo-100 mb-2 font-medium"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full bg-white/5 border border-indigo-300/30 rounded-lg px-4 py-3 text-white placeholder-indigo-200/70 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all border-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-stone-500 hover:bg-stone-700 text-white font-medium py-3 px-6 rounded-lg duration-300 !rounded-button cursor-pointer transition-all transform hover:scale-105 hover:brightness-110"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div className="mt-12 flex md:flex-row justify-center items-center gap-6 md:gap-12">
              <a
                href={linkedinUrl}
                className="text-indigo-200 hover:text-white transition-colors flex items-center gap-2 cursor-pointer"
              >
                <BsLinkedin />
              </a>
              <a
                href={facebookUrl}
                className="text-indigo-200 hover:text-white transition-colors flex items-center gap-2 cursor-pointer"
              >
                <FaFacebook />
              </a>
              <a
                href={whatsappUrl}
                className="text-indigo-200 hover:text-white transition-colors flex items-center gap-2 cursor-pointer"
              >
                <FaWhatsapp />
              </a>
              <a
                href={instagramUrl}
                className="text-indigo-200 hover:text-white transition-colors flex items-center gap-2 cursor-pointer"
              >
                <FaInstagram />
              </a>
              <a
                href={XUrl}
                className="text-indigo-200 hover:text-white transition-colors flex items-center gap-2 cursor-pointer"
              >
                {/* <i className="fab fa-twitter text-xl"></i>
                <span>Twitter(X)</span> */}
                <FaXTwitter />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/*---- Footer -------------------------------------------------------------------------*/}
      <footer className="py-8 bg-slate-900 text-slate-400 animate-fade-in">
        <div className="container mx-auto px-4 motion-safe:animate-fadeIn">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© 2025 CalebMason™ All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors mx-2 cursor-pointer"
              >
                Privacy Policy
              </a>
              <span className="mx-2">|</span>
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors mx-2 cursor-pointer"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default App;
