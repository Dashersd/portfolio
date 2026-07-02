import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const glowRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    let mx = 0, my = 0;
    let gx = 0, gy = 0;
    let animationFrameId;

    const handleMouseMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = mx + 'px';
        dotRef.current.style.top = my + 'px';
      }
    };

    const animateCursor = () => {
      gx += (mx - gx) * 0.12;
      gy += (my - gy) * 0.12;
      if (glowRef.current) {
        glowRef.current.style.left = gx + 'px';
        glowRef.current.style.top = gy + 'px';
      }
      animationFrameId = requestAnimationFrame(animateCursor);
    };

    document.addEventListener('mousemove', handleMouseMove);
    animateCursor();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <div className="cursor-glow" id="cursorGlow" ref={glowRef}></div>
      <div className="cursor-dot" id="cursorDot" ref={dotRef}></div>
    </>
  );
};

export default CustomCursor;
