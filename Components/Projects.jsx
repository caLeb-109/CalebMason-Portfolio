import React from 'react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const [activeTab, setActiveTab] = useState("all");
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
      title: "AfroTech Flow Café",
      category: "UI Mockup/Designs",
      description:
        "",
      image:
        "/AfroTech.png",
    },
    {
      id: 8,
      title: "International Film Festival",
      category: "UI Mockup/Designs",
      description:
        "Bold and dynamic poster design for an international film festival, featuring innovative typography and visual storytelling.",
      video:
        "/MovieFestival.png",
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

  return (
    <div id="projects" className="projects">
      <h2>My Projects</h2>   

      {/*------- Projects Section ----------------------------------------------------------------------*/}
      <div className="projects-section"></div>
      <div id="projects" className="py-20 bg-slate-800 ">
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
            <div className="projects-grid"></div>
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
            <button
              className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition-colors duration-300 !rounded-button cursor-pointer ${activeTab === "all"
                ? "bg-stone-500 text-white"
                : "bg-slate-100 text-slate-700 "
                }`}
              onClick={() => setActiveTab("all")}
            >
              All Projects
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
      </div>
    </div>
  );
};

export default Projects;