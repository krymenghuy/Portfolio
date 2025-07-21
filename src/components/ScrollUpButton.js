import React, { useState, useEffect } from 'react';

const ScrollUpButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <>
      <style>{`
        .scroll-up-glass {
          position: fixed;
          bottom: 40px;
          right: 40px;
          width: 56px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: rgba(30, 41, 59, 0.5);
          box-shadow: 0 4px 24px 0 rgba(99,102,241,0.15), 0 1.5px 8px 0 rgba(236,72,153,0.10);
          backdrop-filter: blur(8px);
          border: none;
          outline: none;
          z-index: 1000;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s, opacity 0.3s;
          opacity: 0.95;
        }
        .scroll-up-glass::before {
          content: '';
          position: absolute;
          inset: -3px;
          border-radius: 50%;
          padding: 0;
          background: linear-gradient(135deg, #6366f1 0%, #ec4899 100%);
          z-index: -1;
          filter: blur(1.5px);
        }
        .scroll-up-glass:hover {
          transform: scale(1.12);
          box-shadow: 0 8px 32px 0 rgba(99,102,241,0.25), 0 3px 16px 0 rgba(236,72,153,0.18);
          opacity: 1;
        }
        .scroll-up-emoji {
          font-size: 2.2rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
      <button
        onClick={scrollToTop}
        className="scroll-up-glass"
        aria-label="Scroll to top"
      >
        <span className="scroll-up-emoji" role="img" aria-label="facebook">📘</span>
      </button>
    </>
  );
};

export default ScrollUpButton; 