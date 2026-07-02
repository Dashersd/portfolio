import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CustomCursor from './components/ui/CustomCursor'
import CanvasParticles from './components/ui/CanvasParticles'
import Preloader from './components/ui/Preloader'
import ReadingProgress from './components/ui/ReadingProgress'

function App() {
  useEffect(() => {
    // Add magnetic cursor class to body
    document.body.classList.add('cursor-magnetic');

    // Scroll Reveal Observer
    const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const checkReveals = () => {
      document.querySelectorAll('.reveal:not(.visible)').forEach(el => observer.observe(el));
    };
    
    // Initial check
    checkReveals();
    // Re-check periodically to catch dynamically added components (like after preloader)
    const intervalId = setInterval(checkReveals, 1000);

    // Tilt Effect
    const handleMouseMove = (e) => {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const midX = rect.width / 2;
      const midY = rect.height / 2;
      const tiltX = ((x - midX) / midX) * 4;
      const tiltY = ((y - midY) / midY) * -4;
      card.style.transform = `perspective(1000px) rotateX(${tiltY}deg) rotateY(${tiltX}deg) translateY(-5px)`;
    };
    const handleMouseLeave = (e) => {
      e.currentTarget.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    };

    const attachTilt = () => {
      document.querySelectorAll('.tilt-card').forEach(card => {
        card.removeEventListener('mousemove', handleMouseMove);
        card.removeEventListener('mouseleave', handleMouseLeave);
        card.addEventListener('mousemove', handleMouseMove);
        card.addEventListener('mouseleave', handleMouseLeave);
      });
    };
    attachTilt();
    
    // Back to top visibility
    const handleScroll = () => {
      const backTop = document.getElementById('backTop');
      if (backTop) {
        if (window.scrollY > 300) backTop.classList.add('visible');
        else backTop.classList.remove('visible');
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <ReadingProgress />
      <Preloader />
      <CustomCursor />
      <CanvasParticles />

      {/* Gradient Glow Blobs */}
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>

      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default App
