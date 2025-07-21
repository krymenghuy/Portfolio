import React from 'react';
import { motion } from 'framer-motion';

const Background = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Simple Base Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800"></div>
      
      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-purple-900/20"></div>
      
      {/* Minimal Animated Elements */}
      <div className="absolute inset-0">
        {/* Simple Floating Orbs */}
        <motion.div
          className="absolute w-[400px] h-[400px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
          style={{ top: '-10%', left: '-10%' }}
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div
          className="absolute w-[300px] h-[300px] bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
          style={{ top: '70%', right: '-5%' }}
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 35, repeat: Infinity, ease: "easeInOut", delay: 15 }}
        />

        {/* Simple Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-blue-400/30"
            style={{
              left: `${10 + i * 5}%`,
              top: `${15 + i * 5}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.1, 0.5, 0.1],
              scale: [1, 2, 1],
            }}
            transition={{
              duration: 20 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}

        {/* Simple Geometric Shapes */}
        <motion.div
          className="absolute w-48 h-48 rotate-45 border border-blue-500/20"
          style={{ top: '30%', right: '40%' }}
          animate={{
            rotate: [45, 225, 405],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        />

        <motion.div
          className="absolute w-32 h-32 border border-purple-500/20"
          style={{ bottom: '40%', left: '30%' }}
          animate={{
            rotate: [0, 360],
            scale: [1, 0.8, 1],
          }}
          transition={{ duration: 40, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Simple Animated Lines */}
        <motion.div
          className="absolute w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"
          style={{ top: '25%' }}
          animate={{
            opacity: [0.02, 0.3, 0.02],
            scaleX: [0.3, 1.5, 0.3],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"
          style={{ bottom: '35%' }}
          animate={{
            opacity: [0.02, 0.3, 0.02],
            scaleX: [0.3, 1.5, 0.3],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut", delay: 10 }}
        />

        {/* Simple Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-full h-px bg-gradient-to-r from-transparent via-blue-500/15 to-transparent"
              style={{ top: `${i * 12}%` }}
              animate={{
                opacity: [0, 0.2, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            />
          ))}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i + 8}
              className="absolute w-px h-full bg-gradient-to-b from-transparent via-purple-500/15 to-transparent"
              style={{ left: `${i * 12}%` }}
              animate={{
                opacity: [0, 0.2, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                delay: i * 0.5 + 8,
              }}
            />
          ))}
        </div>

        {/* Simple Floating Text */}
        <motion.div
          className="absolute text-6xl font-bold tracking-wider text-blue-400/8"
          style={{ top: '5%', left: '5%' }}
          animate={{
            opacity: [0.01, 0.1, 0.01],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        >
          DEVELOPER
        </motion.div>

        <motion.div
          className="absolute text-4xl font-bold text-purple-400/8"
          style={{ bottom: '10%', right: '10%' }}
          animate={{
            opacity: [0.01, 0.1, 0.01],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut", delay: 10 }}
        >
          CODE
        </motion.div>

        {/* Simple Animated Dots */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"
            style={{
              left: `${20 + i * 12}%`,
              top: `${25 + i * 10}%`,
            }}
            animate={{
              scale: [1, 2, 1],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              delay: i * 1,
            }}
          />
        ))}

        {/* Simple Glow Effect */}
        <motion.div
          className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-blue-600/5 to-purple-600/5 blur-2xl"
          style={{ top: '40%', left: '50%', transform: 'translate(-50%, -50%)' }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.02, 0.1, 0.02],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      {/* Animated Stars */}
      {[...Array(100)].map((_, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute bg-white rounded-full"
          style={{
            width: `${Math.random() * 2 + 1}px`,
            height: `${Math.random() * 2 + 1}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
};

export default Background; 