import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaReact, FaVuejs, FaLaravel, FaNodeJs, FaJs, FaBootstrap } from 'react-icons/fa';
import { BsBootstrap } from 'react-icons/bs';
import { SiTailwindcss, SiMongodb, SiMysql, SiHtml5, SiCss3 } from 'react-icons/si';
import ccmImage from '../asset/cc.png';
import document from '../asset/document.png'
import restroom from '../asset/restroom.png';
import shopmart from '../asset/shopmart.png';
import kmh from '../asset/kmh.png'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "ccmcambodia Website",
      description: "CCMCambodia.org is the official site of Cambodia’s Country Coordinating Committee, supporting national efforts to combat HIV, TB, and malaria through Global Fund programs.",
      image: ccmImage,
      technologies: ["Web Design", "Responsive"],
      icons: [
        <span className="text-orange-500"><SiHtml5 /></span>,
        <span className="text-blue-500"><SiCss3 /></span>,
        <span className="text-yellow-500"><FaJs /></span>,
        <span className="text-purple-600"><FaBootstrap /></span>
      ],
      category: "Frontend",
      github: "https://github.com",
      live: "https://cc-project-theta.vercel.app",
      featured: true
    },
    {
      id: 2,
      title: "Management Document",
      description: "System management includes overseeing the storage, access, security, and lifecycle of various file types such as PDF, Word (DOC/DOCX), Excel (XLS/XLSX), and image files (JPG, PNG, etc.).",
      image: document,
      technologies: ["laravel", "Bootstrap", "Mysql"],
      icons: [
        <span className="text-purple-600"><FaBootstrap /></span>,
        <span className="text-red-600"><FaLaravel /></span>,
        <span className="text-yellow-500"><SiMysql /></span>
      ],
      category: "frontend,Backend",
      github: "https://github.com/krymenghuy/system-document",
      live: "https://github.com/krymenghuy/system-document",
      featured: true
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React, Tailwind CSS, and Framer Motion for smooth animations. Features a clean design with dark mode and interactive elements.",
      image: kmh,
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      icons: [
        <span className="text-cyan-400"><FaReact /></span>,
        <span className="text-blue-400"><SiTailwindcss /></span>
      ],
      category: "frontend",
      github: "https://github.com/krymenghuy/portfolio",
      live: "https://krymenghuy.vercel.app",
      featured: true
    },
    {
      id: 4,
      title: "RestRoom Dashboard",
      description: "A restroom dashboard that displays the status of the restrooms and the number of people using them.",
      image: restroom,
      technologies: ["Boostrap", "Laravel", "Mysql"],
      technologies: ["laravel", "Bootstrap", "Mysql"],
      icons: [
        <span className="text-purple-600"><FaBootstrap /></span>,
        <span className="text-red-600"><FaLaravel /></span>,
        <span className="text-yellow-500"><SiMysql /></span>
      ],
      category: "Dashboard",
      github: "https://github.com/krymenghuy/laravelhotal",
      live: "https://github.com/krymenghuy/laravelhotal",
      featured: false
    },
 
    {
      id: 5,
      title: "Shop Mart",
      description: "E-commerce site that sells security cameras, gaming gear, and camera lenses.",
      image: shopmart,
      technologies: ["React", "tailwindcss"],
      icons: [
        <span className="text-cyan-400"><FaReact /></span>,
        <span className="text-blue-400"><SiTailwindcss /></span>
      ],
      category: " Frontend",
      github: "https://github.com/krymenghuy/tronmart",
      live: "https://github.com/krymenghuy/tronmart",
      featured: false
    },
 
  ];

  const filters = [
    { name: 'All', value: 'all' },
    { name: 'Frontend', value: 'frontend' },
    { name: 'Backend', value: 'backend' },
    { name: 'Full Stack', value: 'fullstack' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="relative pb-4">
      {/* Section Heading */}
      <motion.h2
         className="p-2 text-4xl font-bold text-center text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text"
         animate={{ 
           backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
         }}
         transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
      Projects
      </motion.h2>
      <motion.div
        className="h-1 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-600 via-pink-400 to-pink-600"
        initial={{ width: 0 }}
        animate={{ width: '6rem' }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      />
      <p className="mb-8 text-lg text-center text-white">
        Here are some of the projects I've worked on.
      </p>
      {/* Remove all custom background and overlays */}
      <div className="relative z-10 grid grid-cols-1 gap-12 mx-auto sm:grid-cols-2 lg:grid-cols-3 max-w-7xl">
        {filteredProjects.map((project) => (
          <div key={project.id} className="flex flex-col p-6 border shadow-2xl bg-white/10 backdrop-blur-lg rounded-3xl border-white/10">
            <div className="relative mb-6 overflow-hidden border shadow-xl group rounded-2xl border-white/20">
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-48 transition-transform duration-500 group-hover:scale-110 group-hover:shadow-2xl"
              />
              {/* Glassy overlay with gradient and blur */}
              <div className="absolute inset-0 transition-all duration-500 opacity-0 pointer-events-none rounded-2xl group-hover:backdrop-blur-md group-hover:bg-gradient-to-tr group-hover:from-blue-400/40 group-hover:to-pink-400/40 group-hover:opacity-100" />
              {/* Centered 'View Project' text on hover, clickable */}
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-10 flex items-center justify-center transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                style={{ textDecoration: 'none' }}
              >
                <span className="px-4 py-2 text-xl font-bold text-white shadow-lg bg-black/40 rounded-xl">
                  View Project
                </span>
              </a>
            </div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-bold tracking-widest uppercase text-cyan-400">{project.title}</span>
              {project.featured && (
                <span className="px-3 py-1 text-xs font-bold text-white rounded-full bg-gradient-to-r from-green-400 to-emerald-500">LIVE</span>
              )}
            </div>
            <h3 className="mb-2 text-2xl font-extrabold text-white">{project.title}</h3>
            <p className="mb-4 text-gray-300">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className={
                  tech === 'Laravel' || tech === 'Vue.js' || tech === 'Laravel Modules'
                    ? 'px-3 py-1 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold text-xs'
                    : 'px-3 py-1 rounded-full bg-black/60 text-white font-semibold text-xs border border-white/10'
                }>
                  {tech}
                </span>
              ))}
              {project.category && (
                <span className="px-3 py-1 text-xs font-semibold text-white border rounded-full bg-black/60 border-white/10">{project.category}</span>
              )}
            </div>
            {/* Render icons if present */}
            {project.icons && (
              <div className="flex gap-2 mb-4">
                {project.icons.map((icon, idx) => (
                  <span key={idx} className="text-2xl">{icon}</span>
                ))}
              </div>
            )}
            <div className="flex items-center justify-between mt-auto">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 text-lg font-bold text-black transition-all shadow-lg rounded-xl bg-cyan-400 hover:bg-cyan-500"
              >
                VIEW PROJECT <span>↗</span>
              </a>
              <button className="flex items-center justify-center w-12 h-12 text-2xl text-black transition-all rounded-full shadow-lg bg-cyan-400 hover:bg-cyan-500">
                ↑
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects; 