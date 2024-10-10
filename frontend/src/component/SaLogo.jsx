import React from 'react';

const SALogo = ({ width = 200, height = 200, primaryColor = '#4CAF50', secondaryColor = '#81C784', textColor = '#ffffff', fontSize = 80 }) => (
  <svg
    width={width}
    height={height}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 200 200"
  >
    {/* Define Gradient */}
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: primaryColor, stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: secondaryColor, stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    
    {/* Background Circle with Gradient */}
    <circle cx="100" cy="100" r="90" fill="url(#grad1)" />
    
    {/* Letters "SA" */}
    <text
      x="50%"
      y="55%"
      textAnchor="middle"
      fill={textColor}
      fontSize={fontSize}
      fontFamily="Arial, sans-serif"
      fontWeight="bold"
      dy=".3em"
    >
      SA
    </text>
  </svg>
);

export default SALogo;
