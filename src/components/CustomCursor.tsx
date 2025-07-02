'use client';

import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updatePosition);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div
      style={{
        position: 'fixed',
        left: position.x - 50,
        top: position.y - 50,
        width: 100,
        height: 100,
        backgroundColor: 'pink',
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
