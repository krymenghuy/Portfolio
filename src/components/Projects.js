import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaReact, FaLaravel, FaJs, FaBootstrap, FaTimes, FaChevronLeft, FaChevronRight, FaServer } from 'react-icons/fa';
import { SiTailwindcss, SiMysql, SiHtml5, SiCss3 } from 'react-icons/si';
import ccmImage from '../asset/cc.png';
import documentImage from '../asset/document.png';
import restroomImage from '../asset/restroom.png';
import shopmartImage from '../asset/shopmart.png';
import kmhImage from '../asset/kmh.png';
import metaTower1 from '../asset/meta-tower-1.png';
import metaTower2 from '../asset/meta-tower-2.png';
import metaTower3 from '../asset/meta-tower-3.png';
import metaTower4 from '../asset/meta-tower-4.png';
import metaTower5 from '../asset/meta-tower-5.png';
import useIsMobile from '../hooks/useIsMobile';

const Projects = () => {
  const isMobile = useIsMobile();
  const [galleryProject, setGalleryProject] = useState(null);
  const [galleryIndex, setGalleryIndex] = useState(0);

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
      title: "Meta Tower",
      description: "Business platform for Meta Tower with Estate, Authorization Manager, HR, and Client modules. Built with Laravel, Bootstrap, JavaScript, and REST API.",
      image: metaTower1,
      gallery: [metaTower1, metaTower2, metaTower3, metaTower4, metaTower5],
      technologies: ["Laravel", "Bootstrap", "JavaScript", "REST API"],
      icons: [
        <FaLaravel className="text-red-600" />,
        <FaBootstrap className="text-purple-600" />,
        <FaJs className="text-yellow-500" />,
        <FaServer className="text-green-400" />
      ],
      category: "Full Stack",
      github: "https://meta.vectoranet.com/landingpoint",
      live: "https://meta.vectoranet.com/landingpoint",
      featured: true
    },
    {
      id: 4,
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
      id: 5,
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
      id: 6,
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

  const filteredProjects = projects;

  const openGallery = (project) => {
    if (!project.gallery?.length) return;
    setGalleryProject(project);
    setGalleryIndex(0);
  };

  const closeGallery = () => {
    setGalleryProject(null);
    setGalleryIndex(0);
  };

  const showPrev = () => {
    if (!galleryProject?.gallery) return;
    setGalleryIndex((prev) =>
      prev === 0 ? galleryProject.gallery.length - 1 : prev - 1
    );
  };

  const showNext = () => {
    if (!galleryProject?.gallery) return;
    setGalleryIndex((prev) =>
      prev === galleryProject.gallery.length - 1 ? 0 : prev + 1
    );
  };

  useEffect(() => {
    if (!galleryProject) return;

    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        setGalleryProject(null);
        setGalleryIndex(0);
      }
      if (e.key === 'ArrowLeft') {
        setGalleryIndex((prev) =>
          prev === 0 ? galleryProject.gallery.length - 1 : prev - 1
        );
      }
      if (e.key === 'ArrowRight') {
        setGalleryIndex((prev) =>
          prev === galleryProject.gallery.length - 1 ? 0 : prev + 1
        );
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [galleryProject]);

  const handleProjectClick = (project, e) => {
    if (project.gallery?.length) {
      e.preventDefault();
      openGallery(project);
    }
  };

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
              <div className="relative overflow-hidden group bg-gray-950">
              <img
                src={project.image}
                alt={project.title}
                  className={
                    project.gallery?.length
                      ? "object-contain object-top w-full h-56 transition-all duration-500 group-hover:brightness-75 sm:h-64"
                      : "object-cover w-full h-48 transition-all duration-500 group-hover:scale-110 group-hover:blur-sm group-hover:brightness-75"
                  }
              />
                <div className="absolute inset-0 transition-all duration-300 opacity-0 bg-gradient-to-t from-black/80 via-transparent to-transparent group-hover:opacity-100" />
              {project.gallery?.length ? (
                <button
                  type="button"
                  onClick={(e) => handleProjectClick(project, e)}
                  className="absolute inset-0 z-10 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100"
                >
                  <span className="px-4 py-2 text-lg font-bold text-white transition-all duration-300 transform scale-90 rounded-lg bg-black/50 group-hover:scale-100">
                    View Gallery
                  </span>
                </button>
              ) : (
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
              )}
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
                  {project.gallery?.length ? (
                    <motion.button
                      type="button"
                      onClick={() => openGallery(project)}
                      className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-white transition-all duration-300 rounded-lg sm:px-5 sm:py-2.5 bg-cyan-600 hover:bg-cyan-700"
                      whileHover={!isMobile ? { scale: 1.05 } : {}}
                    >
                      View Project
                    </motion.button>
                  ) : (
                  <motion.a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-white transition-all duration-300 rounded-lg sm:px-5 sm:py-2.5 bg-cyan-600 hover:bg-cyan-700"
                    whileHover={!isMobile ? { scale: 1.05 } : {}}
                  >
                    View Project
                  </motion.a>
                  )}
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

      {/* Image Gallery Modal */}
      <AnimatePresence>
        {galleryProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-2 bg-black/90 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeGallery}
          >
            <motion.div
              className="relative flex flex-col w-full max-w-6xl max-h-[95vh] overflow-hidden bg-gray-900 border shadow-2xl rounded-xl border-white/10 sm:rounded-2xl"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between flex-shrink-0 px-4 py-3 border-b border-white/10 sm:px-6">
                <div>
                  <h3 className="text-lg font-bold text-white sm:text-xl">{galleryProject.title}</h3>
                  <p className="text-xs text-gray-400 sm:text-sm">
                    Screenshot {galleryIndex + 1} of {galleryProject.gallery.length}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={closeGallery}
                  className="p-2 text-gray-300 transition-colors rounded-lg hover:bg-white/10 hover:text-white"
                  aria-label="Close gallery"
                >
                  <FaTimes size={20} />
                </button>
              </div>

              <div className="relative flex items-center justify-center flex-1 min-h-0 px-10 py-3 bg-gray-950 sm:px-14 sm:py-4">
                <button
                  type="button"
                  onClick={showPrev}
                  className="absolute z-10 p-2.5 text-white transition-colors rounded-full left-2 sm:left-3 bg-black/60 hover:bg-cyan-600"
                  aria-label="Previous image"
                >
                  <FaChevronLeft size={18} />
                </button>
                <img
                  src={galleryProject.gallery[galleryIndex]}
                  alt={`${galleryProject.title} screenshot ${galleryIndex + 1}`}
                  className="object-contain w-full h-auto max-h-[72vh] rounded-md shadow-lg"
                />
                <button
                  type="button"
                  onClick={showNext}
                  className="absolute z-10 p-2.5 text-white transition-colors rounded-full right-2 sm:right-3 bg-black/60 hover:bg-cyan-600"
                  aria-label="Next image"
                >
                  <FaChevronRight size={18} />
                </button>
              </div>

              <div className="flex justify-center flex-shrink-0 gap-2 px-4 py-3 overflow-x-auto border-t border-white/10 sm:px-6">
                {galleryProject.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setGalleryIndex(idx)}
                    className={`flex-shrink-0 overflow-hidden rounded-md border-2 bg-gray-950 transition-all ${
                      idx === galleryIndex
                        ? 'border-cyan-400 opacity-100'
                        : 'border-white/10 opacity-50 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      className="object-contain w-20 h-14 sm:w-24 sm:h-16"
                    />
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
