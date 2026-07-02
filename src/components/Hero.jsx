import React, { useEffect, useRef } from 'react';
import Reveal from './ui/Reveal';
import { motion } from 'framer-motion';

const Hero = () => {
  const typedTextRef = useRef(null);
  
  useEffect(() => {
    const textArray = ["Web Developer", "Frontend Engineer", "Creative Designer"];
    const typingDelay = 100;
    const erasingDelay = 60;
    const newTextDelay = 1500;
    let textArrayIndex = 0;
    let charIndex = 0;
    let timerId;

    const type = () => {
      if (charIndex < textArray[textArrayIndex].length) {
        if (typedTextRef.current) {
          typedTextRef.current.textContent += textArray[textArrayIndex].charAt(charIndex);
        }
        charIndex++;
        timerId = setTimeout(type, typingDelay);
      } else {
        timerId = setTimeout(erase, newTextDelay);
      }
    };

    const erase = () => {
      if (charIndex > 0) {
        if (typedTextRef.current) {
          typedTextRef.current.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        }
        charIndex--;
        timerId = setTimeout(erase, erasingDelay);
      } else {
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        timerId = setTimeout(type, typingDelay + 300);
      }
    };

    timerId = setTimeout(type, newTextDelay);

    return () => clearTimeout(timerId);
  }, []);

  useEffect(() => {
    // Count-up animation
    const countElements = document.querySelectorAll('.count-up');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = +el.getAttribute('data-target');
          let count = 0;
          const speed = target / 40; // Adjust for duration
          const updateCount = () => {
            count += speed;
            if (count < target) {
              el.innerText = Math.ceil(count);
              requestAnimationFrame(updateCount);
            } else {
              el.innerText = target;
            }
          };
          updateCount();
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.5 });

    countElements.forEach(el => observer.observe(el));
    return () => countElements.forEach(el => observer.unobserve(el));
  }, []);

  // Framer Motion variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="home" className="hero" style={{ position: 'relative' }}>
      <motion.div 
        className="hero-left"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div variants={item} className="avail-badge">
          <span className="avail-dot"></span>
          Available for Work
        </motion.div>
        <motion.p variants={item} className="hero-greeting">Hello, World! 👋</motion.p>
        <motion.h1 variants={item} className="hero-name">Helman Dashelle M. <span className="glow-text">Dacuma</span></motion.h1>
        <motion.div variants={item} className="hero-title-row">
          <span className="title-prefix">I'm a&nbsp;</span>
          <span className="typed-text" id="typedText" ref={typedTextRef}></span>
          <span className="typed-cursor">|</span>
        </motion.div>
        <motion.p variants={item} className="hero-intro">
          Engineering High-Performance Web Experiences. I build fast, scalable, and visually stunning digital solutions that drive real results.
        </motion.p>
        <motion.div variants={item} className="hero-cta desktop-cta">
          <a href="#projects" className="btn btn-primary ripple prominent-cta"><i className="fas fa-rocket"></i> Start a Project</a>
          <a href="/Resume.pdf" download="Helman_Dacuma_CV.pdf" className="btn btn-outline ripple"><i className="fas fa-download"></i> Download CV</a>
        </motion.div>
        
        <motion.div variants={item} className="hero-stats">
          <div className="stat-item">
            <div>
              <span className="stat-number count-up" data-target="8">0</span><span className="stat-number">+</span>
            </div>
            <span className="stat-text">Projects</span>
          </div>
          <div className="stat-item">
            <div>
              <span className="stat-number count-up" data-target="2">0</span><span className="stat-number">+</span>
            </div>
            <span className="stat-text">Coding</span>
          </div>
          <div className="stat-item">
            <div>
              <span className="stat-number count-up" data-target="100">0</span><span className="stat-number">%</span>
            </div>
            <span className="stat-text">Passion Driven</span>
          </div>
        </motion.div>
      </motion.div>

      <Reveal delay={0.4} className="hero-right">
        <motion.div 
          className="profile-wrapper"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div className="profile-ring"></div>
          <div className="profile-ring ring-2"></div>
          <div className="profile-glow"></div>
          <div className="profile-img-wrap">
            <img src="/Profile.jpg" alt="Profile Photo" className="profile-img profile-img-main" />
            <img src="/Profile 2.png" alt="Profile Photo Hover" className="profile-img profile-img-hover" />
          </div>
          <div className="orbit orbit-1"><span className="orbit-icon" style={{ '--brand': '#e34f26' }}><i className="fab fa-html5"></i></span></div>
          <div className="orbit orbit-2"><span className="orbit-icon" style={{ '--brand': '#61dafb' }}><i className="fab fa-react"></i></span></div>
          <div className="orbit orbit-3"><span className="orbit-icon" style={{ '--brand': '#f7df1e' }}><i className="fab fa-js"></i></span></div>
          <div className="orbit orbit-4"><span className="orbit-icon" style={{ '--brand': '#ffffff' }}><i className="fas fa-layer-group"></i></span></div>
        </motion.div>
      </Reveal>

      <Reveal delay={0.6} className="hero-cta mobile-cta">
        <a href="#projects" className="btn btn-primary ripple prominent-cta"><i className="fas fa-rocket"></i> Start a Project</a>
        <a href="/Resume.pdf" download="Helman_Dacuma_CV.pdf" className="btn btn-outline ripple"><i className="fas fa-download"></i> Download CV</a>
      </Reveal>
    </section>
  );
};

export default Hero;
