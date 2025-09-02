import React, { useState } from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("all");
  const ProjectsData = [
    {
      id: 1,
      title: "Travel Landing Page",
      category: "Web Development",
      description:
        "A visually captivating and user-friendly landing page for a travel booking platform. Built with React and Tailwind CSS, it features a responsive design and intuitive search functionality to inspire users to book their next adventure.",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      link: "https://travel-landing-page-pied.vercel.app/",
      githubLink: "",
      image: "/project1.png",
    },
    {
      id: 2,
      title: "Saas Dashboard UI",
      category: "UI Design",
      description:
        "💫 Challenge: Design an intuitive SaaS dashboard that simplifies complex data visualization. As UI Designer, I crafted a clean, modern interface in Figma, focusing on user-centric design patterns. The final design system streamlines financial data management while maintaining visual hierarchy, resulting in a 30% improvement in user task completion rates.",
      technologies: ["Figma"],
      // link: "https://travel-landing-page.example.com",
      // githubLink: "",
      image: "/SaaS-design.jpg",
    },
    {
      id: 3,
      title: "Standard Weather App",
      category: "Web Development",
      description:
        "🌤️ Challenge: Build a reliable weather application with real-time updates. As Frontend Developer, I integrated OpenWeather API with vanilla JavaScript, creating a responsive interface that delivers instant weather insights. The result is a lightweight, fast-loading app with a 98% accuracy rate in weather predictions and location-based updates.",
      technologies: ["HTML", "CSS", "JavaScript", "API"],
      link: "https://travel-landing-page.example.com",
      githubLink: "",
      image: "/Weatherapp.png",
    },
    {
      id: 4,
      title: "AI Mood Generator UI",
      category: "UI Design",
      description:
        "🎨 Challenge: Design an AI-powered mood board generator that's both innovative and user-friendly. As Lead Designer, I created an intuitive interface using Figma and Canva, incorporating AI-driven elements with human-centered design principles. The final design achieved a 45% increase in user retention and received recognition for its innovative approach to AI visualization.",
      technologies: ["Canva Editor", "Figma"],
      // link: "https://travel-landing-page.example.com",
      // githubLink: "",
      image: "/MoodBoard.png",
    },
    {
      id: 5,
      title: "AfroTech Flow Café",
      category: "Web Design",
      description:
        "☕ Challenge: Revamp a traditional café's online presence with a tech-forward approach. As Web Designer, I developed a modern website using Figma that balances aesthetic appeal with functionality. The redesign resulted in a 60% increase in online orders and established a strong digital presence that reflects the café's unique tech-savvy atmosphere.",
      technologies: ["Figma", "Canva Editor"],
      link: "https://straw-clay-43807266.figma.site/",
      // githubLink: "",
      image: "/AfroTech.png",
    },
    {
      id: 6,
      title: "Health Tracking Dashboard",
      category: "UI Design",
      description:
        "💪 Challenge: Design a comprehensive health analytics platform that motivates user engagement. As UI/UX Designer, I crafted an intuitive dashboard using Figma and Webflow, incorporating data visualization best practices. The design increased user activity tracking by 55% and received praise for its accessible, motivating interface.",
      technologies: ["Figma", "Webflow"],
      // link: "https://travel-landing-page.example.com",
      // githubLink: "",
      image: "/HealthTrack-design.jpg",
    },
    {
      id: 7,
      title: "Clone Moviebox App",
      category: "Web Development",
      description:
        "A sleek and modern movie app clone that allows users to browse, search, and view details about their favorite movies. Built with WordPress Site Builder and styled-components for a responsive and engaging user experience.",
      technologies: ["WordPress", "Styled-Components"],
      // link: "https://travel-landing-page.example.com",
      // githubLink: "",
      image: "/Movieapp.png",
    },
    // {
    //   id: 8,
    //   title: "",
    //   category: "Web Development",
    //   description:
    //     "",

    //   image:
    //     "",
    // },
  ];

  const filteredProjects =
    activeTab === "all"
      ? ProjectsData
      : ProjectsData.filter((project) => project.category === activeTab);

  const categories = [
    "all",
    ...new Set(ProjectsData.map((project) => project.category)),
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      id="projects"
      className="projects"
    >
      <div id="projects" className="py-20 bg-stone-900">
        <div className="container bg-stone-900 mx-auto px-4">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl text-white font-bold mb-4">
              Featured Projects
              <div className="h-1 w-20 bg-stone-500 mx-auto mt-2"></div>
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Explore my diverse portfolio showcasing a range of creative
              projects across different disciplines.
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === category
                    ? "bg-stone-500 text-white"
                    : "bg-stone-700 text-white/70 hover:bg-stone-600 hover:text-white"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                key={project.id}
                className="bg-stone-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl duration-300 group"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-4">
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-stone-800/80 p-3 rounded-full hover:bg-stone-700 transition-colors"
                        >
                          <i className="fab fa-github text-white text-xl"></i>
                        </a>
                      )}
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-stone-800/80 p-3 rounded-full hover:bg-stone-700 transition-colors"
                        >
                          <i className="fas fa-external-link-alt text-white text-xl"></i>
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-stone-800/90 text-white text-xs font-medium px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-white">
                    {project.title}
                  </h3>
                  <p className="text-white/80  text-sm mb-4">
                    {project.description}
                  </p>
                  {project.technologies && (
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs bg-stone-700 text-white/80 px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
