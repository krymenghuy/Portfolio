import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaReact, FaLaravel, FaJs, FaBootstrap } from 'react-icons/fa';
import { SiTailwindcss, SiMysql, SiHtml5, SiCss3 } from 'react-icons/si';
import ccmImage from '../asset/cc.png';
import documentImage from '../asset/document.png';
import restroomImage from '../asset/restroom.png';
import shopmartImage from '../asset/shopmart.png';
import kmhImage from '../asset/kmh.png';
import useIsMobile from '../hooks/useIsMobile';

const Projects = () => {
  const isMobile = useIsMobile();
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "CCMCambodia Website",
      description: "Official site for Cambodia's Country Coordinating Committee, supporting efforts against HIV, TB, and malaria.",
      image: ccmImage,
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      icons: [
        <SiHtml5 className="text-orange-500" />,
        <SiCss3 className="text-blue-500" />,
        <FaJs className="text-yellow-500" />,
        <FaBootstrap className="text-purple-600" />
      ],
      category: "Frontend",
      github: "https://github.com/krymenghuy/cc-project",
      live: "https://cc-project-theta.vercel.app",
      featured: true
    },
    {
      id: 2,
      title: "Document Management System",
      description: "A system for managing documents, including storage, access, and security for various file types.",
      image: documentImage,
      technologies: ["Laravel", "Bootstrap", "MySQL"],
      icons: [
        <FaLaravel className="text-red-600" />,
        <FaBootstrap className="text-purple-600" />,
        <SiMysql className="text-blue-400" />
      ],
      category: "Full Stack",
      github: "https://github.com/krymenghuy/system-document",
      live: "https://github.com/krymenghuy/system-document",
      featured: true
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio built with React, Tailwind CSS, and Framer Motion for smooth animations.",
      image: kmhImage,
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      icons: [
        <FaReact className="text-cyan-400" />,
        <SiTailwindcss className="text-blue-400" />
      ],
      category: "Frontend",
      github: "https://github.com/krymenghuy/portfolio",
      live: "https://krymenghuy.vercel.app",
      featured: true
    },
    {
      id: 4,
      title: "Restroom Dashboard",
      description: "A dashboard displaying real-time restroom status and occupancy.",
      image: restroomImage,
      technologies: ["Laravel", "Bootstrap", "MySQL"],
      icons: [
        <FaLaravel className="text-red-600" />,
        <FaBootstrap className="text-purple-600" />,
        <SiMysql className="text-blue-400" />
      ],
      category: "Full Stack",
      github: "https://github.com/krymenghuy/laravelhotal",
      live: "https://github.com/krymenghuy/laravelhotal",
      featured: false
    },
    {
      id: 5,
      title: "Shop Mart",
      description: "E-commerce site for security cameras, gaming gear, and camera lenses.",
      image: shopmartImage,
      technologies: ["React", "Tailwind CSS"],
      icons: [
        <FaReact className="text-cyan-400" />,
        <SiTailwindcss className="text-blue-400" />
      ],
      category: "Frontend",
      github: "https://github.com/krymenghuy/tronmart",
      live: "https://tronmart.vercel.app",
      featured: false
    },
  ];

  const filters = [
    { name: 'All', value: 'all' },
    { name: 'Frontend', value: 'frontend' },
    { name: 'Full Stack', value: 'fullstack' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category.toLowerCase().includes(activeFilter.toLowerCase()));

  return (
    <section id="projects" className="relative py-12 text-white sm:py-24">
      <div className="container px-4 mx-auto">
        {/* Section Heading */}
        <motion.h2
           className="text-3xl font-bold text-center text-transparent sm:text-5xl bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text"
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true }}
        >
          My Projects
        </motion.h2>
        <motion.div
          className="h-1 mx-auto mt-4 mb-12 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400"
          initial={{ width: 0 }}
          whileInView={{ width: '8rem' }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          viewport={{ once: true }}
        />

        {/* Description Sentence */}
        <p className="mb-10 text-base text-center text-gray-300 sm:text-lg">
          Here are some of the projects I’ve built, showcasing my skills and experience.
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="flex flex-col overflow-hidden transition-all duration-300 transform border shadow-2xl bg-gray-800/50 backdrop-blur-sm rounded-2xl border-white/10 hover:shadow-cyan-400/20 hover:-translate-y-2"
              layout={!isMobile}
              initial={!isMobile ? { opacity: 0, scale: 0.9 } : {}}
              animate={!isMobile ? { opacity: 1, scale: 1 } : {}}
              exit={!isMobile ? { opacity: 0, scale: 0.9 } : {}}
              transition={!isMobile ? { duration: 0.5 } : {}}
            >
              <div className="relative overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-48 transition-all duration-500 group-hover:scale-110 group-hover:blur-sm group-hover:brightness-75"
                />
                <div className="absolute inset-0 transition-all duration-300 opacity-0 bg-gradient-to-t from-black/80 via-transparent to-transparent group-hover:opacity-100" />
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-10 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100"
                >
                  <span className="px-4 py-2 text-lg font-bold text-white transition-all duration-300 transform scale-90 rounded-lg bg-black/50 group-hover:scale-100">
                    View Live
                  </span>
                </a>
              </div>
              <div className="flex flex-col flex-grow p-4 sm:p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-white sm:text-2xl">{project.title}</h3>
                  {project.featured && (
                    <span className="px-3 py-1 text-xs font-bold text-white rounded-full bg-gradient-to-r from-green-400 to-emerald-500">
                      LIVE
                    </span>
                  )}
                </div>
                <p className="flex-grow mb-4 text-sm text-gray-400 sm:text-base">
                  {project.description}
                </p>
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  {project.icons.map((icon, idx) => (
                    <span key={idx} className="text-2xl" title={project.technologies[idx]}>{icon}</span>
                  ))}
                </div>
                <div className="flex items-center justify-between mt-auto">
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-white transition-all duration-300 rounded-lg sm:px-5 sm:py-2.5 bg-cyan-600 hover:bg-cyan-700"
                    whileHover={!isMobile ? { scale: 1.05 } : {}}
                  >
                    View Project
                  </motion.a>
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 transition-colors duration-300 hover:text-cyan-400"
                    whileHover={!isMobile ? { scale: 1.2 } : {}}
                  >
                    <FaGithub size={24} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 