import React from 'react';

// Custom Arrow Icon (pointing down)
export const CustomArrowIcon = ({ className = "", size = 20, ...props }) => (
  <svg 
    stroke="currentColor" 
    fill="currentColor" 
    strokeWidth="0" 
    viewBox="0 0 448 512" 
    height={size} 
    width={size} 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ transform: 'rotate(180deg)' }}
    {...props}
  >
    <path d="M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z"></path>
  </svg>
);

// Custom Arrow Icon (pointing up)
export const CustomArrowUpIcon = ({ className = "", size = 20, ...props }) => (
  <svg 
    stroke="currentColor" 
    fill="currentColor" 
    strokeWidth="0" 
    viewBox="0 0 448 512" 
    height={size} 
    width={size} 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path d="M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z"></path>
  </svg>
);

// Custom Download Icon
export const CustomDownloadIcon = ({ className = "", size = 20, ...props }) => (
  <svg 
    stroke="currentColor" 
    fill="currentColor" 
    strokeWidth="0" 
    viewBox="0 0 512 512" 
    height={size} 
    width={size} 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.7c-7.8 7.8-20.5 7.8-28.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h464c13.3 0 24 10.7 24 24z"></path>
  </svg>
);

// Custom External Link Icon
export const CustomExternalLinkIcon = ({ className = "", size = 20, ...props }) => (
  <svg 
    stroke="currentColor" 
    fill="currentColor" 
    strokeWidth="0" 
    viewBox="0 0 512 512" 
    height={size} 
    width={size} 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path d="M432 320h-32a16 16 0 0 0-16 16v144H64V128h144a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16H48a48 48 0 0 0-48 48v352a48 48 0 0 0 48 48h352a48 48 0 0 0 48-48V336a16 16 0 0 0-16-16zM488 0H360c-21.4 0-32.1 25.9-17 41l35.7 35.7L135 320.4c-9.4 9.4-9.4 24.6 0 34l32 32c9.4 9.4 24.6 9.4 34 0l235.7-235.7L471 169c15.1 15.1 41 4.4 41-17V24a24 24 0 0 0-24-24z"></path>
  </svg>
); 

export const KMHLogo = ({ size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ display: 'block' }}
  >
    <defs>
      <linearGradient id="kmh-gradient" x1="0" y1="0" x2="120" y2="48" gradientUnits="userSpaceOnUse">
        <stop stopColor="#6366f1" />
        <stop offset="1" stopColor="#a21caf" />
      </linearGradient>
    </defs>
    <text
      x="10"
      y="38"
      fontFamily="Montserrat, Arial, sans-serif"
      fontWeight="bold"
      fontSize="40"
      fill="url(#kmh-gradient)"
      letterSpacing="8"
    >
      KMH
    </text>
  </svg>
); 