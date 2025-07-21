import React, { useState, useEffect, Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import Background from './components/Background';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
const ScrollUpButton = lazy(() => import('./components/ScrollUpButton'));

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const renderLoader = () => (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        className="h-32 w-32 border-t-4 border-b-4 border-cyan-400 rounded-full"
      ></motion.div>
    </div>
  );

  if (isLoading) {
    return renderLoader();
  }

  return (
    <div className="App relative bg-gray-900 text-white">
      <Background />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Suspense fallback={renderLoader()}>
            <About />
            <Skills />
            <Projects />
            <Contact />
          </Suspense>
        </main>
        <Suspense fallback={<div></div>}>
          <ScrollUpButton />
          <Footer />
        </Suspense>
      </div>
    </div>
  );
}

export default App; 