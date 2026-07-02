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
