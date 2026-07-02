import React, { useState } from 'react';

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
      <div className="section-header reveal">
        <p className="section-label">Let's work together</p>
        <h2 className="section-title">Contact <span className="glow-text">Me</span></h2>
        <div className="section-line"></div>
      </div>
      
      <div className="contact-grid">
        <div className="glass-card contact-form-wrap reveal">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" id="name" placeholder=" " className="neon-input" required />
              <label htmlFor="name">Name</label>
            </div>
            <div className="form-group">
              <input type="email" id="email" placeholder=" " className="neon-input" required />
              <label htmlFor="email">Email</label>
            </div>
            <div className="form-group">
              <textarea id="message" rows="5" placeholder=" " className="neon-input" required></textarea>
              <label htmlFor="message">Message</label>
            </div>
            <button 
              type="submit" 
              className={`btn btn-primary btn-full ripple ${success ? 'success' : ''}`} 
              id="sendBtn"
              disabled={loading}
            >
              <i className={success ? "fas fa-check" : (loading ? "fas fa-spinner fa-spin" : "fas fa-paper-plane")}></i> 
              {success ? ' Sent Successfully' : (loading ? ' Sending...' : ' Send Message')}
            </button>
            <p className="form-success" id="formSuccess" style={{ display: success ? 'block' : 'none' }}>
              <i className="fas fa-check-circle"></i> Message sent! I'll get back to you soon.
            </p>
          </form>
        </div>
        
        <div className="social-wrap reveal reveal-delay">
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
        </div>
      </div>
    </section>
  );
};

export default Contact;
