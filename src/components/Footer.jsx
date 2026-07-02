import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-copy">
          &copy; 2026 <span className="glow-text">Helman Dashelle M. Dacuma</span>. All rights reserved.
        </p>
        <div className="footer-socials">
          <a href="https://github.com/Dashersd" target="_blank" rel="noreferrer" aria-label="GitHub">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.facebook.com/helman.dacuma.9" target="_blank" rel="noreferrer" aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="mailto:helmandacuma5@gmail.com" aria-label="Gmail">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
      <a href="#home" className="back-top" id="backTop" aria-label="Back to top">
        <i className="fas fa-chevron-up"></i>
      </a>
    </footer>
  );
};

export default Footer;
