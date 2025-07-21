import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaFacebook, FaFilePdf } from 'react-icons/fa';
import { CustomArrowIcon } from './CustomIcons';
import profileImage from '../asset/IMG_3341 copy.jpg';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Floating animation variants
  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Text typing effect variants
  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  // Staggered children animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  return (
    <section id="home" className="relative flex items-center justify-center h-screen overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute hidden w-20 h-20 border rounded-full sm:block md:w-28 md:h-28 lg:w-32 lg:h-32 top-10 left-6 md:top-20 md:left-20 border-blue-500/20"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute hidden w-16 h-16 border rounded-full sm:block md:w-20 md:h-20 lg:w-24 lg:h-24 bottom-10 right-6 md:bottom-20 md:right-20 border-purple-500/20"
      />
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute hidden w-10 h-10 rounded-full sm:block md:w-14 md:h-14 lg:w-16 lg:h-16 top-1/3 right-1/4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-xl"
      />
      <motion.div
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: '1s' }}
        className="absolute hidden w-12 h-12 rounded-full sm:block md:w-16 md:h-16 lg:w-20 lg:h-20 bottom-1/3 left-1/4 bg-gradient-to-r from-green-500/10 to-blue-500/10 blur-xl"
      />

      <div className="relative z-10 px-2 lg:px:0 sm:px-4 md:px-8 container-custom">
        <div className="flex flex-col items-center justify-center max-w-6xl mx-auto md:flex-row md:gap-8 lg:gap-12">
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex-1 text-center md:text-left"
          >
            {/* Greeting */}
            <motion.p
              variants={textVariants}
              className="mb-3 text-base font-semibold text-blue-400 sm:text-lg"
            >
              Hello, I'm
            </motion.p>

            {/* Name with enhanced animation */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 1.2, 
                delay: 0.4,
                type: "spring",
                stiffness: 100
              }}
              className="mb-4 text-4xl font-bold text-white sm:text-5xl md:text-5xl lg:text-7xl"
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="inline-block"
              >
                Kry
              </motion.span>{" "}
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="inline-block tracking-tight text-cyan-200"
                style={{ textShadow: '0 2px 16px rgba(186,230,253,0.7), 0 1px 0 #bfefff' }}
              >
                Meng Huy
              </motion.span>
            </motion.h1>

            {/* Title with typing effect */}
            <motion.h2
              variants={textVariants}
              className="mb-6 text-lg text-gray-300 sm:text-xl md:text-2xl lg:text-3xl"
            >
              {/* <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.0, duration: 0.5 }}
              >
                Frontend
              </motion.span>{" "} */}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                Web
              </motion.span>{" "}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4, duration: 0.5 }}
              >
                Developer
              </motion.span>
            </motion.h2>

            {/* Description with fade in */}
            <motion.p
              variants={textVariants}
              className="max-w-2xl mx-auto mb-8 text-base leading-relaxed text-gray-400 sm:text-lg md:mx-0"
            >
            Experienced in building responsive web applications using React.js, Tailwind CSS, Laravel, and MySQL. Focused on clean design, good performance, and real-world functionality.
            </motion.p>

            {/* CTA Buttons with enhanced hover effects */}
            <motion.div
              variants={textVariants}
              className="flex flex-col justify-center gap-3 mb-8 sm:gap-4 sm:flex-row md:justify-start"
            >
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToAbout}
                className="px-4 py-2 font-semibold text-white transition-all duration-300 rounded-lg shadow-lg sm:px-6 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                View My Work
              </motion.button>
              <motion.a
                href="https://drive.google.com/file/d/17X7T-M0s7Y6SkBDWtIpc3iFf2IiHdR2l/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 0.2)"
                }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 font-semibold text-center text-white transition-all duration-300 border rounded-lg sm:px-6 sm:py-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 border-white/20"
              >
                Download Resume
              </motion.a>
            </motion.div>

            {/* Social Links with enhanced animations */}
            <motion.div
              variants={textVariants}
              className="flex justify-center mb-6 space-x-4 sm:space-x-6 md:justify-start"
            >
              <motion.a
                whileHover={{ 
                  scale: 1.3, 
                  y: -5,
                  rotate: 360,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.9 }}
                href="https://github.com/krymenghuy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors duration-300 hover:text-blue-400"
              >
                <FaGithub size={24} />
              </motion.a>
              <motion.a
                whileHover={{ 
                  scale: 1.3, 
                  y: -5,
                  rotate: 360,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.9 }}
                href="https://web.facebook.com/menghuy.kry.7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors duration-300 hover:text-blue-400"
              >
                <FaLinkedin size={24} />
              </motion.a>
              <motion.a
                whileHover={{ 
                  scale: 1.3, 
                  y: -5,
                  rotate: 360,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.9 }}
                href="https://drive.google.com/file/d/17X7T-M0s7Y6SkBDWtIpc3iFf2IiHdR2l/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors duration-300 hover:text-blue-400"
              >
                <FaFilePdf size={24} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Profile Picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ 
              duration: 1.2, 
              delay: 0.6,
              type: "spring",
              stiffness: 100
            }}
            className="flex justify-center flex-1 mt-8 md:justify-end md:mt-0"
          >
            <div className="relative">
              {/* Animated gradient border */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 p-1 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
              />
              
              {/* Profile image container with better styling */}
              <div className="relative w-40 h-40 overflow-hidden bg-gray-900 rounded-full md:w-60 md:h-60 lg:w-80 lg:h-80">
                {/* Profile image with improved styling */}
                <img
                  src={profileImage}
                  alt="Kry Meng Huy - Web Developer"
                  className="object-cover w-full h-full border-4 border-gray-900 rounded-full shadow-2xl"
                  style={{
                    filter: 'contrast(1.1) brightness(1.05)',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                  }}
                />
                
                {/* Subtle overlay for better contrast */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-60"></div>
              </div>

              {/* Enhanced floating elements */}
              <motion.div
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute w-4 h-4 bg-blue-400 rounded-full shadow-lg sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 -top-3 -right-3"
                style={{ boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)' }}
              />
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.6, 0.9, 0.6]
                }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute w-3 h-3 bg-purple-400 rounded-full shadow-lg sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 -bottom-3 -left-3"
                style={{ boxShadow: '0 0 20px rgba(147, 51, 234, 0.5)' }}
              />
              
              {/* Additional decorative elements */}
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 8, repeat: Infinity }}
                className="absolute w-2 h-2 rounded-full bg-cyan-400 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 top-1/2 -right-6"
                style={{ boxShadow: '0 0 15px rgba(34, 211, 238, 0.4)' }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 