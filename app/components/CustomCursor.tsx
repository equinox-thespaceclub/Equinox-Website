'use client';

import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updatePosition);
    return () => window.removeEventListener('mousemove', updatePosition);
  }, []);

  return (
    <div
      className="custom-cursor"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="astronaut-svg"
      >
        {/* Helmet */}
        <path
          d="M8 20C8 13.3726 13.3726 8 20 8C26.6274 8 32 13.3726 32 20C32 26.6274 26.6274 32 20 32C13.3726 32 8 26.6274 8 20Z"
          fill="#2C2C2C"
        />
        <path
          d="M10 20C10 14.4772 14.4772 10 20 10C25.5228 10 30 14.4772 30 20C30 25.5228 25.5228 30 20 30C14.4772 30 10 25.5228 10 20Z"
          fill="#FFFFFF"
        />
        
        {/* Helmet Visor */}
        <path
          d="M12 20C12 15.5817 15.5817 12 20 12C24.4183 12 28 15.5817 28 20C28 24.4183 24.4183 28 20 28C15.5817 28 12 24.4183 12 20Z"
          fill="#2C2C2C"
        />
        
        {/* Visor Reflections */}
        <path
          d="M15 17L17 19"
          stroke="#FFFFFF"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.6"
        />
        <circle
          cx="23"
          cy="17"
          r="1.5"
          fill="#FFFFFF"
          opacity="0.6"
        />

        {/* Body */}
        <rect
          x="16"
          y="29"
          width="8"
          height="8"
          fill="#FFFFFF"
          stroke="#2C2C2C"
          strokeWidth="1.5"
        />
        
        {/* Arms */}
        <path
          d="M12 22H8"
          stroke="#FFFFFF"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M32 22H28"
          stroke="#FFFFFF"
          strokeWidth="4"
          strokeLinecap="round"
        />
        
        {/* Rocket flames */}
        <path
          d="M17 37L19 40"
          stroke="#FF4D4D"
          strokeWidth="2"
          strokeLinecap="round"
          className="flame"
        />
        <path
          d="M21 37L23 40"
          stroke="#FF4D4D"
          strokeWidth="2"
          strokeLinecap="round"
          className="flame"
        />
        
        {/* Stars */}
        <path
          d="M6 8L7 9M7 7L6 8M8 8L7 8M7 9L7 7"
          stroke="#FFD700"
          strokeLinecap="round"
          className="star"
        />
        <path
          d="M30 6L31 7M31 5L30 6M32 6L31 6M31 7L31 5"
          stroke="#FFD700"
          strokeLinecap="round"
          className="star"
        />
        <path
          d="M34 24L35 25M35 23L34 24M36 24L35 24M35 25L35 23"
          stroke="#FFD700"
          strokeLinecap="round"
          className="star"
        />
      </svg>
    </div>
  );
};

export default CustomCursor;