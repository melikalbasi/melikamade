'use client';

import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e: { clientX: any; clientY: any }) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updatePosition);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        left: `${position.x - 25}px`,
        top: `${position.y - 25}px`,
        width: '50px',
        height: '50px',
        backgroundColor: 'white',
        borderRadius: '50%',
        pointerEvents: 'none',
        mixBlendMode: 'difference',
        zIndex: 1000,
        transition: 'transform 0.1s ease',
      }}
    />
  );
};

export default CustomCursor;
