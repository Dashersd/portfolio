import React, { useState } from 'react';
import Reveal from './ui/Reveal';

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate sending
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="section contact" data-watermark="HELLO">
      <Reveal className="section-header">
        <p className="section-label">Let's work together</p>
        <h2 className="section-title">Contact <span className="glow-text">Me</span></h2>
        <div className="section-line"></div>
      </Reveal>
      
      <div className="contact-grid">
        <Reveal delay={0.2} className="glass-card contact-form-wrap">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" placeholder="Enter Your Full Name" className="neon-input" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" placeholder="Enter Your Email Address" className="neon-input" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="5" placeholder="Write Your Message Here" className="neon-input" required></textarea>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
              <button 
              type="submit" 
                className={`btn btn-primary ripple ${success ? 'success' : ''}`} 
                id="sendBtn"
                disabled={loading}
                style={{ padding: '0.8rem 1.8rem', borderRadius: '12px' }}
              >
                {success ? 'Sent Successfully ' : (loading ? 'Sending... ' : 'Send Message ')}
                <i className={success ? "fas fa-check" : (loading ? "fas fa-spinner fa-spin" : "fas fa-arrow-right")}></i> 
              </button>
            </div>
            <p className="form-success" id="formSuccess" style={{ display: success ? 'block' : 'none', marginTop: '1rem' }}>
              <i className="fas fa-check-circle"></i> Message sent! I'll get back to you soon.
            </p>
          </form>
        </Reveal>
        
        <Reveal delay={0.4} className="social-wrap">
          <h3>Find me online</h3>
          <p>Feel free to reach out through any of these platforms.</p>
          <div className="social-icons">
            <a href="https://github.com/Dashersd" target="_blank" rel="noreferrer" className="social-icon">
              <i className="fab fa-github"></i><span>GitHub</span>
            </a>
            <a href="https://www.facebook.com/helman.dacuma.9" target="_blank" rel="noreferrer" className="social-icon">
              <i className="fab fa-facebook-f"></i><span>Facebook</span>
            </a>
            <a href="mailto:helmandacuma5@gmail.com" className="social-icon">
              <i className="fas fa-envelope"></i><span>helmandacuma5@gmail.com</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
