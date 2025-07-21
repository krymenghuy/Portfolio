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
    <section id="about" className="relative pt-0 pb-10 md:pb-20 lg:pb-24">
      {/* Animated Background Elements */}
      {/* Removed animated background elements */}

      <div className="relative z-10 px-2 container-custom sm:px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0 }}
          viewport={{ once: true }}
          className="mb-8 text-center sm:mb-12"
        >
          <motion.h2 
            className="mb-3 text-3xl font-bold text-white sm:mb-4 sm:text-4xl"
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
            className="w-16 h-1 mx-auto bg-gradient-to-r from-blue-400 to-purple-400 sm:w-24"
            initial={{ width: 0 }}
            whileInView={{ width: "4rem" }}
            transition={{ duration: 1.0, delay: 0.3 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <div className="flex flex-col gap-8 md:gap-10 lg:gap-12 lg:grid lg:grid-cols-2">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.0, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.h3 
              className="mb-4 text-xl font-bold text-white sm:mb-6 sm:text-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Passionate Web Developer
            </motion.h3>
            <div className="space-y-3 text-sm leading-relaxed text-gray-300 sm:text-base">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
              A dedicated Full-Stack Web Developer with a passion for crafting clean, efficient, and user-centric digital solutions. Currently pursuing my Bachelor’s in Computer Science at Norton University, I complement my academic knowledge with hands-on experience gained from Sunrise Institute’s intensive web development program and real-world projects.
              </motion.p>
            </div>
            <div className="space-y-3 text-sm leading-relaxed text-gray-300 sm:text-base">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
             🎓 Formally Trained: Certified in Web Development from Sunrise Institute (2023-2024), mastering modern frameworks and best practices.
              </motion.p>
            </div>
            <div className="space-y-3 text-sm leading-relaxed text-gray-300 sm:text-base">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
            💻 Practical Builder: Developed full-stack projects including e-commerce platforms, document management systems, and rental solutions using PHP, Laravel, JavaScript (React.js), and MySQL.
              </motion.p>
            </div>
            <div className="space-y-3 text-sm leading-relaxed text-gray-300 sm:text-base">
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
            className="flex flex-col gap-4 sm:gap-6"
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
                className="p-4 transition-all duration-500 border rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 border-white/10 hover:border-white/20"
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
                      className="mb-1 text-base font-semibold text-white sm:mb-2 sm:text-lg"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      {feature.title}
                    </motion.h4>
                    <p className="text-sm text-gray-300 sm:text-base">
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