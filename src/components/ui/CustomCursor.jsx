import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const glowRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    let mx = -100, my = -100;
    let gx = -100, gy = -100;
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

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('project-card') ||
        target.classList.contains('skill-card')
      ) {
        document.body.classList.add('cursor-magnetic');
      } else {
        document.body.classList.remove('cursor-magnetic');
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    animateCursor();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
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
