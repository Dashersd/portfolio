import React, { useEffect, useRef } from 'react';

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

  return (
    <section id="home" className="hero" style={{ position: 'relative' }}>
      <div className="hero-left reveal">
        <div className="avail-badge">
          <span className="avail-dot"></span>
          Available for Work
        </div>
        <p className="hero-greeting">Hello, World! 👋</p>
        <h1 className="hero-name">Helman Dashelle M. <span className="glow-text">Dacuma</span></h1>
        <div className="hero-title-row">
          <span className="title-prefix">I'm a&nbsp;</span>
          <span className="typed-text" id="typedText" ref={typedTextRef}></span>
          <span className="typed-cursor">|</span>
        </div>
        <p className="hero-intro">
          Engineering High-Performance Web Experiences. I build fast, scalable, and visually stunning digital solutions that drive real results.
        </p>
        <div className="hero-cta desktop-cta">
          <a href="#projects" className="btn btn-primary ripple prominent-cta"><i className="fas fa-rocket"></i> Start a Project</a>
          <a href="/Resume.pdf" download="Helman_Dacuma_CV.pdf" className="btn btn-outline ripple"><i className="fas fa-download"></i> Download CV</a>
        </div>
        
        <div className="hero-stats reveal reveal-delay">
          <div className="stat-item">
            <span className="stat-number count-up" data-target="10">0</span><span className="stat-number">+</span>
            <span className="stat-text">Projects Built</span>
          </div>
          <div className="stat-item">
            <span className="stat-number count-up" data-target="2">0</span><span className="stat-number">+</span>
            <span className="stat-text">Years Coding</span>
          </div>
          <div className="stat-item">
            <span className="stat-number count-up" data-target="100">0</span><span className="stat-number">%</span>
            <span className="stat-text">Passion Driven</span>
          </div>
        </div>
      </div>
      <div className="hero-right reveal reveal-delay">
        <div className="profile-wrapper">
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
        </div>
      </div>
      <div className="hero-cta mobile-cta reveal reveal-delay">
        <a href="#projects" className="btn btn-primary ripple prominent-cta"><i className="fas fa-rocket"></i> Start a Project</a>
        <a href="/Resume.pdf" download="Helman_Dacuma_CV.pdf" className="btn btn-outline ripple"><i className="fas fa-download"></i> Download CV</a>
      </div>
    </section>
  );
};

export default Hero;
