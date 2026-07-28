import React, { useState } from 'react';
import Reveal from './ui/Reveal';
import SpotlightCard from './ui/SpotlightCard';

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('helmandacuma5@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

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
        <Reveal delay={0.2}>
          <SpotlightCard className="glass-card contact-form-wrap">
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
                <label htmlFor="projectType">Project Type</label>
                <select id="projectType" className="select-neon" defaultValue="Web Development">
                  <option value="Web Development">Web Development</option>
                  <option value="Mobile App">Mobile App Development</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="Consultation">Consultation & Strategy</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="4" placeholder="Tell me about your project goals..." className="neon-input" required></textarea>
              </div>
              <div className="form-submit-wrap" style={{ display: 'flex', justifyContent: 'flex-start' }}>
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
          </SpotlightCard>
        </Reveal>
        
        <Reveal delay={0.4}>
          <SpotlightCard className="glass-card social-wrap">
            <h3>Contact Details & Socials</h3>
            <p style={{ marginBottom: '1.5rem', color: 'var(--gray)', fontSize: '0.9rem' }}>
              Have a project in mind or want to discuss opportunities? Reach out directly!
            </p>

            <div className="contact-info-cards">
              <div className="contact-info-card">
                <div className="contact-info-icon"><i className="fas fa-envelope"></i></div>
                <div className="contact-info-text" style={{ flexGrow: 1, minWidth: 0 }}>
                  <h4>Direct Email</h4>
                  <p className="email-copy-row">
                    <span className="email-text">helmandacuma5@gmail.com</span>
                    <button onClick={handleCopyEmail} className="copy-email-btn" type="button" aria-label="Copy email address">
                      {copied ? 'Copied! ✓' : 'Copy'}
                    </button>
                  </p>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="contact-info-icon"><i className="fas fa-map-marker-alt"></i></div>
                <div className="contact-info-text">
                  <h4>Location</h4>
                  <p>Pagadian City, Zamboanga del Sur, Philippines</p>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="contact-info-icon"><i className="fas fa-clock"></i></div>
                <div className="contact-info-text">
                  <h4>Response Time</h4>
                  <p>Within 24 Hours • <span style={{ color: '#22c55e', fontWeight: 600 }}>🟢 Available for Hire</span></p>
                </div>
              </div>
            </div>

            <h4 style={{ fontSize: '0.9rem', color: 'var(--white)', marginBottom: '0.8rem', fontWeight: 700 }}>Find me online</h4>
            <div className="social-icons">
              <a href="https://github.com/Dashersd" target="_blank" rel="noreferrer" className="social-icon" aria-label="GitHub">
                <i className="fab fa-github"></i><span>GitHub</span>
              </a>
              <a href="https://www.facebook.com/helman.dacuma.9" target="_blank" rel="noreferrer" className="social-icon" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i><span>Facebook</span>
              </a>
              <a href="mailto:helmandacuma5@gmail.com" className="social-icon" aria-label="Email">
                <i className="fas fa-paper-plane"></i><span>Email Me</span>
              </a>
            </div>
          </SpotlightCard>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;

