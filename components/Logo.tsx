import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "w-full h-full" }) => {
  return (
    <svg 
      viewBox="0 0 200 200" 
      className={className}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer Hexagon */}
      <path 
        d="M100 20 L170 60 V140 L100 180 L30 140 V60 Z" 
        stroke="#C6A667" 
        strokeWidth="2"
      />
      {/* Inner Hexagon */}
      <path 
        d="M100 30 L160 65 V135 L100 170 L40 135 V65 Z" 
        stroke="#C6A667" 
        strokeWidth="1"
      />
      
      {/* Decorative Lines */}
      <path d="M100 30 V60" stroke="#C6A667" strokeWidth="0.5" />
      <path d="M100 140 V170" stroke="#C6A667" strokeWidth="0.5" />
      <path d="M30 60 L60 80" stroke="#C6A667" strokeWidth="0.5" />
      <path d="M170 60 L140 80" stroke="#C6A667" strokeWidth="0.5" />
      <path d="M30 140 L60 120" stroke="#C6A667" strokeWidth="0.5" />
      <path d="M170 140 L140 120" stroke="#C6A667" strokeWidth="0.5" />

      {/* Text */}
      <text 
        x="100" 
        y="105" 
        textAnchor="middle" 
        fill="#C6A667" 
        fontFamily="serif" 
        fontSize="24" 
        letterSpacing="0.1em"
        fontWeight="bold"
      >
        ASEEL
      </text>
      
      {/* Perfume Icon / Subtext graphic */}
      <path d="M85 125 L115 125" stroke="#C6A667" strokeWidth="1" />
    </svg>
  );
};

export default Logo;