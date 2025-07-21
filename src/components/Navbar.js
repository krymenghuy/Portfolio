import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const NAV_ITEMS = [
  { name: 'Home', href: '#home', id: 'home' },
  { name: 'About', href: '#about', id: 'about' },
  { name: 'Skills', href: '#skills', id: 'skills' },
  { name: 'Projects', href: '#projects', id: 'projects' },
  { name: 'Contact', href: '#contact', id: 'contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const menuRef = useRef(null);

  // Highlight active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = NAV_ITEMS.map(item => item.id);
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY + 80 >= el.offsetTop) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Trap focus in mobile menu
  useEffect(() => {
    if (!isOpen || !menuRef.current) return;
    const focusable = menuRef.current.querySelectorAll('button, [tabindex]:not([tabindex="-1"])');
    if (focusable.length) focusable[0].focus();
    const handleKeyDown = (e) => {
      if (e.key === 'Tab') {
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      } else if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    menuRef.current.addEventListener('keydown', handleKeyDown);
    return () => menuRef.current && menuRef.current.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      const isMobile = window.innerWidth < 640;
      const yOffset = isMobile ? -50 : -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      // Auto-close dropdown after click on mobile
      if (isMobile) setTimeout(() => setIsOpen(false), 350);
    } else {
      setIsOpen(false);
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target.id === 'navbar-backdrop') setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 h-25 transition-all duration-300 ${
        scrolled ? 'bg-white/10 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center w-full px-2 py-4 sm:py-5 sm:px-4 md:py-6 md:px-8 lg:px-16 md:justify-between">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => scrollToSection('#home')}
              className="flex items-center justify-center px-[1px] py-1 text-2xl font-bold text-blue-400 select-none sm:text-3xl md:text-4xl lg:text-5xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              tabIndex={0}
              aria-label="Go to Home section"
            >
              KMH
            </motion.button>
          </div>

          {/* Desktop Navigation */}
          <nav aria-label="Main navigation" className="items-center hidden ml-auto md:flex">
            <ul className="flex items-center space-x-4 sm:space-x-6 md:space-x-6 lg:space-x-8">
              {NAV_ITEMS.map((item) => (
                <li key={item.name}>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => scrollToSection(item.href)}
                    className={`group relative text-base sm:text-lg font-semibold transition-all duration-300 px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-400
                      ${activeSection === item.id
                        ? 'text-blue-400 font-extrabold scale-105 bg-white/10 rounded-lg backdrop-blur'
                        : 'text-gray-300 hover:text-blue-400'}`}
                    tabIndex={0}
                    aria-current={activeSection === item.id ? 'page' : undefined}
                  >
                    {item.name}
                    <span
                      className={`pointer-events-none absolute left-0 right-0 -bottom-1 mx-auto h-[3px] w-full max-w-[80%] rounded-full
                        bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400
                        transition-all duration-500
                        ${activeSection === item.id
                          ? 'opacity-100 scale-x-100'
                          : 'opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100'}
                      `}
                      style={{ transformOrigin: 'left' }}
                      aria-hidden="true"
                    />
                  </motion.button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile menu button */}
          <div className="flex items-center justify-end flex-1 h-full md:hidden">
            <motion.button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.92 }}
              whileHover={{ scale: 1.08 }}
              className="flex items-center justify-center w-12 h-12 m-0 text-white transition-all duration-200 bg-blue-700 border-2 border-blue-300 rounded-full shadow-2xl hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              tabIndex={0}
            >
              {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation & Backdrop */}
        <AnimatePresence>
        {isOpen && (
          <motion.div
            id="navbar-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-blue-900/95 backdrop-blur-2xl md:hidden"
            onClick={handleBackdropClick}
            aria-hidden="true"
          >
            <motion.div
              ref={menuRef}
              id="mobile-menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 260, damping: 30 }}
              className="fixed inset-0 z-50 flex flex-col"
              tabIndex={-1}
            >
              {/* Top bar with logo and close button */}
              <div className="flex items-center justify-between w-full px-6 pt-6 pb-2">
                <span className="text-2xl font-bold text-blue-400 select-none">KMH</span>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center w-12 h-12 text-3xl text-white rounded-full shadow-lg bg-sky-600 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                  aria-label="Close menu"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              {/* Dropdown menu container */}
              <div className="flex items-center justify-center flex-1 w-full px-4">
                <ul className="flex flex-col w-full max-w-xs gap-4 p-6 shadow-2xl bg-gradient-to-br from-cyan-700 via-blue-900 to-purple-900 rounded-2xl">
                  {NAV_ITEMS.map((item) => (
                    <li key={item.name} className="w-full">
                      <button
                        onClick={() => scrollToSection(item.href)}
                        className={`w-full text-2xl font-bold text-center py-4 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 ${activeSection === item.id ? 'text-blue-400 bg-white/10' : 'text-gray-200 hover:text-blue-400 hover:bg-white/10'}`}
                        tabIndex={0}
                        aria-current={activeSection === item.id ? 'page' : undefined}
                      >
                        {item.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar; 