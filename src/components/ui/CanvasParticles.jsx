import React, { useEffect, useRef } from 'react';

const CanvasParticles = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let W, H, particles = [];
    let animationFrameId;

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', () => {
      resize();
      init();
    });
    resize();

    const rand = (a, b) => a + Math.random() * (b - a);
    const COLORS = ['rgba(255,255,255,', 'rgba(200,200,210,', 'rgba(180,180,200,'];

    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = rand(0, W);
        this.y = rand(0, H);
        this.r = rand(0.4, 1.6);
        this.dx = rand(-0.25, 0.25);
        this.dy = rand(-0.35, 0.12);
        this.life = rand(0.15, 0.55);
        this.c = COLORS[Math.floor(Math.random() * COLORS.length)];
      }
    }

    const init = () => {
      const count = Math.floor((W * H) / 8000);
      particles = Array.from({ length: count }, () => new Particle());
    };
    init();

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.c + p.life + ')';
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.y < -5 || p.x < -5 || p.x > W + 5) p.reset();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = 'rgba(255,255,255,' + (0.05 * (1 - dist / 100)) + ')';
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas id="particlesCanvas" ref={canvasRef}></canvas>;
};

export default CanvasParticles;
