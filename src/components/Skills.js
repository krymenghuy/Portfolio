import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaGitAlt,
  FaGithub
} from 'react-icons/fa';
import { SiTailwindcss, SiBootstrap, SiLaravel, SiPhp, SiMysql } from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      description: "Modern web technologies and frameworks",
      gradient: "from-blue-500 to-purple-600",
      skills: [
        { name: 'React.js', icon: <FaReact />, color: '#61DAFB', bgColor: '#61DAFB20', hoverColor: '#61DAFB' },
        { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E', bgColor: '#F7DF1E20', hoverColor: '#F7DF1E' },
        { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26', bgColor: '#E34F2620', hoverColor: '#E34F26' },
        { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6', bgColor: '#1572B620', hoverColor: '#1572B6' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06B6D4', bgColor: '#06B6D420', hoverColor: '#06B6D4' },
        { name: 'Bootstrap', icon: <SiBootstrap />, color: '#7952B3', bgColor: '#7952B320', hoverColor: '#7952B3' },
      ]
    },
    {
      title: "Backend Development",
      description: "Server-side technologies and databases",
      gradient: "from-green-500 to-teal-600",
      skills: [
        { name: 'Laravel', icon: <SiLaravel />, color: '#FF2D20', bgColor: '#FF2D2020', hoverColor: '#FF2D20' },
        { name: 'PHP', icon: <SiPhp />, color: '#777BB4', bgColor: '#777BB420', hoverColor: '#777BB4' },
        { name: 'MySQL', icon: <SiMysql />, color: '#4479A1', bgColor: '#4479A120', hoverColor: '#4479A1' },
      ]
    },
    {
      title: "Version Control",
      description: "Collaboration and code management",
      gradient: "from-orange-500 to-red-600",
      skills: [
        { name: 'Git', icon: <FaGitAlt />, color: '#F05032', bgColor: '#F0503220', hoverColor: '#F05032' },
        { name: 'GitHub', icon: <FaGithub />, color: '#181717', bgColor: '#18171720', hoverColor: '#181717' },
      ]
    }
  ];

  return (
    <section id="skills" className="relative section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <motion.h2 
            className="mb-4 text-4xl font-bold text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text"
            animate={{ 
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            My Skills
          </motion.h2>
          <div className="w-24 h-1 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-300">
            I've worked with a variety of technologies and frameworks. Here are the tools and languages I use to bring ideas to life.
          </p>
        </motion.div>

        {/* Frontend Level (Total) */}
        <div className="relative p-8 mb-12 overflow-hidden border shadow-xl bg-gray-900/50 backdrop-blur-sm rounded-2xl border-blue-500/20">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-10"></div>
          <div className="relative z-10">
            <h3 className="mb-2 text-2xl font-bold text-center text-white">Frontend Level</h3>
            <div className="flex flex-col items-center mb-6">
              <span className="mb-2 text-lg font-bold text-blue-200">Frontend Level</span>
              <div className="relative w-full h-6 max-w-md overflow-hidden rounded-full shadow bg-blue-900/30">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '70%' }}
                  transition={{ duration: 1.2 }}
                  className="absolute top-0 left-0 h-6 rounded-full bg-gradient-to-r from-blue-400 to-purple-500"
                  style={{ width: '70%' }}
                />
                <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-blue-100">70%</span>
              </div>
            </div>
            <ul className="flex flex-wrap justify-center gap-6">
              {skillCategories[0].skills.map((skill, idx) => (
                <li key={skill.name} className="flex flex-col items-center">
                  <div className="relative flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      whileHover={{
                        scale: 1.4,
                        opacity: 1,
                        boxShadow: `0 0 24px 8px ${skill.color}55`
                      }}
                      transition={{ duration: 0.5, type: "tween", ease: "easeInOut" }}
                      className="absolute w-16 h-16 rounded-full pointer-events-none"
                      style={{ border: `2px solid ${skill.color}`, boxShadow: `0 0 0 0 ${skill.color}00` }}
                    />
                    <motion.span
                      whileHover={{
                        scale: 1.18,
                        y: -10,
                        rotate: [0, -8, 8, 0],
                        boxShadow: [
                          `0px 0px 0px 0px ${skill.color}00`,
                          `0px 4px 24px 0px ${skill.color}88`,
                          `0px 4px 32px 0px ${skill.color}cc`,
                          `0px 0px 0px 0px ${skill.color}00`
                        ]
                      }}
                      transition={{
                        duration: 0.6,
                        times: [0, 0.3, 0.7, 1],
                        type: "tween",
                        ease: "easeInOut"
                      }}
                      className="relative z-10 flex items-center justify-center w-12 h-12 mb-2 rounded-lg"
                      style={{ backgroundColor: skill.bgColor }}
                    >
                      <span className="text-2xl" style={{ color: skill.color }}>{skill.icon}</span>
                    </motion.span>
                  </div>
                  <span className="text-base font-semibold text-white">{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Backend Level (Total) */}
        <div className="relative p-8 mb-12 overflow-hidden border shadow-xl bg-gray-900/50 backdrop-blur-sm rounded-2xl border-green-500/20">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-teal-600 opacity-10"></div>
          <div className="relative z-10">
            <h3 className="mb-2 text-2xl font-bold text-center text-white">Backend Level</h3>
            <div className="flex flex-col items-center mb-6">
              <span className="mb-2 text-lg font-bold text-green-200">Backend Level</span>
              <div className="relative w-full h-6 max-w-md overflow-hidden rounded-full shadow bg-green-900/30">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '50%' }}
                  transition={{ duration: 1.2 }}
                  className="absolute top-0 left-0 h-6 rounded-full bg-gradient-to-r from-green-400 to-teal-500"
                  style={{ width: '50%' }}
                />
                <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-green-100">50%</span>
              </div>
            </div>
            <ul className="flex flex-wrap justify-center gap-6">
              {skillCategories[1].skills.map((skill, idx) => (
                <li key={skill.name} className="flex flex-col items-center">
                  <motion.span
                    whileHover={{ 
                      scale: 1.25, 
                      y: -8, 
                      boxShadow: `0px 4px 24px 0px ${skill.color}55` 
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 18 }}
                    className="flex items-center justify-center w-12 h-12 mb-2 rounded-lg"
                    style={{ backgroundColor: skill.bgColor }}
                  >
                    <span className="text-2xl" style={{ color: skill.color }}>{skill.icon}</span>
                  </motion.span>
                  <span className="text-base font-semibold text-white">{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tools & Others (unchanged) */}
        <div className="relative p-8 mb-12 overflow-hidden border shadow-xl bg-gray-900/50 backdrop-blur-sm rounded-2xl border-orange-500/20">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-600 opacity-10"></div>
          <div className="relative z-10">
            <h3 className="mb-6 text-2xl font-bold text-center text-white">Tools & Others</h3>
            <ul className="flex flex-wrap justify-center gap-6">
              {skillCategories[2].skills.map((skill, idx) => (
                <li key={skill.name} className="flex flex-col items-center">
                  <motion.span
                    whileHover={{ 
                      scale: 1.25, 
                      y: -8, 
                      boxShadow: `0px 4px 24px 0px ${skill.color}55` 
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 18 }}
                    className="flex items-center justify-center w-12 h-12 mb-2 rounded-lg"
                    style={{ backgroundColor: skill.bgColor }}
                  >
                    <span className="text-2xl" style={{ color: skill.color }}>{skill.icon}</span>
                  </motion.span>
                  <span className="text-base font-semibold text-white">{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 