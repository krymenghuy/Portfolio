import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaPalette, FaLightbulb } from 'react-icons/fa';

const About = () => {
  const features = [
    {
      icon: <FaCode className="text-3xl text-blue-400" />,
      title: "Clean Code",
      description: "Writing maintainable, well-documented code that follows best practices and industry standards."
    },
    {
      icon: <FaPalette className="text-3xl text-purple-400" />,
      title: "Responsive Design",
      description: "Creating beautiful interfaces that work seamlessly across all devices and screen sizes."
    },
    {
      icon: <FaLightbulb className="text-3xl text-pink-400" />,
      title: "Problem Solving",
      description: "Approaching challenges with creativity and technical expertise to deliver optimal solutions."
    }
  ];

  // Floating animation variants
  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Stats counter animation
  const statsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section id="about" className="relative pt-0 pb-16 overflow-hidden md:pb-20 lg:pb-24">
      {/* Animated Background Elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute w-20 h-20 border rounded-full top-10 right-10 border-blue-500/20"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute w-16 h-16 border rounded-full bottom-20 left-10 border-purple-500/20"
      />
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute w-12 h-12 rounded-full top-1/2 left-1/4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-xl"
      />

      <div className="relative z-10 px-2 container-custom sm:px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <motion.h2 
            className="mb-4 text-4xl font-bold text-white"
            animate={{ 
              textShadow: [
                "0 0 20px rgba(59, 130, 246, 0.5)",
                "0 0 40px rgba(147, 51, 234, 0.8)",
                "0 0 20px rgba(59, 130, 246, 0.5)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            About Me
          </motion.h2>
          <motion.div 
            className="w-24 h-1 mx-auto bg-gradient-to-r from-blue-400 to-purple-400"
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            transition={{ duration: 1.0, delay: 0.3 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <div className="grid items-center gap-8 md:gap-10 lg:gap-12 lg:grid-cols-2">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.0, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.h3 
              className="mb-6 text-2xl font-bold text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Passionate Web Developer
            </motion.h3>
            
            <div className="text-gray-300 space-y-4leading-relaxed sm:text-lg">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
              A dedicated Full-Stack Web Developer with a passion for crafting clean, efficient, and user-centric digital solutions. Currently pursuing my Bachelor’s in Computer Science at Norton University, I complement my academic knowledge with hands-on experience gained from Sunrise Institute’s intensive web development program and real-world projects.
              </motion.p>
              
            </div>
            <div className="text-gray-300 space-y-4leading-relaxed sm:text-lg">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
             🎓 Formally Trained: Certified in Web Development from Sunrise Institute (2023-2024), mastering modern frameworks and best practices.
              </motion.p>
              
            </div>
            <div className="text-gray-300 space-y-4leading-relaxed sm:text-lg">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
            💻 Practical Builder: Developed full-stack projects including e-commerce platforms, document management systems, and rental solutions using PHP, Laravel, JavaScript (React.js), and MySQL.
              </motion.p>
              
            </div>
            <div className="text-gray-300 space-y-4leading-relaxed sm:text-lg">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
            🏢 Professional Experience: Applied my skills in a professional setting web design role at PHSARTECH company, delivering client-focused solutions.
              </motion.p>
              
            </div>
          </motion.div>

          {/* Enhanced Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.0, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, x: 20 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 * index }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02,
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                className="p-6 transition-all duration-500 border rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 border-white/10 hover:border-white/20"
              >
                <div className="flex items-start space-x-4">
                  <motion.div 
                    className="flex-shrink-0"
                    whileHover={{ 
                      rotate: 360,
                      scale: 1.1,
                      transition: { duration: 0.6 }
                    }}
                  >
                    {feature.icon}
                  </motion.div>
                  <div>
                    <motion.h4 
                      className="mb-2 text-lg font-semibold text-white"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      {feature.title}
                    </motion.h4>
                    <p className="text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 