import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
      // Active section highlight
      const sections = ['home', 'about', 'skills', 'projects', 'testimonials', 'contact'];
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

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
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
    return () => menuRef.current.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const navItems = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  // Click outside to close mobile menu
  const handleBackdropClick = (e) => {
    if (e.target.id === 'navbar-backdrop') setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/10 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center w-full px-2 py-4 sm:py-5 sm:px-4 md:py-6 md:px-8 lg:px-16 md:justify-between">
          {/* Logo - Left on md+ */}
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

          {/* Desktop Navigation - All Items Right on md+ */}
          <nav aria-label="Main navigation" className="items-center hidden ml-auto md:flex">
            <ul className="flex items-center space-x-4 sm:space-x-6 md:space-x-6 lg:space-x-8">
              {navItems.map((item) => (
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
                    {/* Cool sliding underline animation */}
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
          <div className="flex items-center justify-end flex-1 md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center justify-center w-12 h-12 mr-2 text-gray-300 transition-colors duration-300 rounded-full hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 sm:mr-4 md:mr-0"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              tabIndex={0}
            >
              {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation & Backdrop */}
        {isOpen && (
          <div
            id="navbar-backdrop"
            className="fixed inset-0 z-40 bg-black/40 md:hidden"
            onClick={handleBackdropClick}
            aria-hidden="true"
          >
            <motion.div
              ref={menuRef}
              id="mobile-menu"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              className="relative z-50 py-4 mt-2 rounded-b-lg shadow-lg bg-white/10 backdrop-blur-md"
              style={{ minWidth: '70vw', maxWidth: 400, margin: '0 auto' }}
              tabIndex={-1}
            >
              <nav aria-label="Mobile navigation">
                <ul className="flex flex-col px-4 space-y-2 sm:space-y-4">
                  {navItems.map((item) => (
                    <li key={item.name}>
                      <button
                        onClick={() => scrollToSection(item.href)}
                        className={`w-full text-base sm:text-lg font-semibold text-left transition-colors duration-300 px-2 py-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 ${activeSection === item.id ? 'text-blue-400' : 'text-gray-300 hover:text-blue-400'}`}
                        tabIndex={0}
                        aria-current={activeSection === item.id ? 'page' : undefined}
                      >
                        {item.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </motion.div>
          </div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar; 