import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';
import { KMHLogo } from './CustomIcons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative pb-8 border-t bg-black/30 backdrop-blur-md border-white/10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-8 border-t border-white/10"
      >
        <div className="flex flex-col items-center justify-center w-full gap-4">
          <p className="text-lg font-semibold text-center text-gray-300">
            © {currentYear} Menghuy Kry. All rights reserved.
          </p>
          <p className="flex items-center text-lg font-semibold text-center text-gray-300">
            <span className="mr-3"><KMHLogo size={36} /></span>
            | <span className="ml-1 text-blue-400">Happy</span> <FaHeart className="mx-2 text-2xl text-red-400" /> <span className="text-purple-400">coding</span>
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer; 