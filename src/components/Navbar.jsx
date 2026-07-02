import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Navbar background blur on scroll
      setScrolled(window.scrollY > 50);

      // Active section tracking
      const sections = document.querySelectorAll('section');
      let current = 'home';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 200) {
          current = section.getAttribute('id');
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <a href="#home" className="nav-brand">HD<span className="brand-bracket">.</span></a>
      
      <ul className={`nav-links ${menuOpen ? 'active' : ''}`} id="navLinks">
        <li>
          <a 
            href="#home" 
            className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
            onClick={() => setMenuOpen(false)}
          >Home</a>
        </li>
        <li>
          <a 
            href="#about" 
            className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
            onClick={() => setMenuOpen(false)}
          >About</a>
        </li>
        <li>
          <a 
            href="#skills" 
            className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
            onClick={() => setMenuOpen(false)}
          >Skills</a>
        </li>
        <li>
          <a 
            href="#projects" 
            className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
            onClick={() => setMenuOpen(false)}
          >Projects</a>
        </li>
        <li>
          <a 
            href="#contact" 
            className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
            onClick={() => setMenuOpen(false)}
          >Contact</a>
        </li>
      </ul>

      <button 
        className={`hamburger ${menuOpen ? 'active' : ''}`} 
        onClick={toggleMenu}
        aria-label="Toggle navigation"
      >
        <span></span><span></span><span></span>
      </button>
    </nav>
  );
};

export default Navbar;
