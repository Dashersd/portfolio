import React from 'react';
import Reveal from './ui/Reveal';

const About = () => {
  return (
    <section id="about" className="section about">
      <Reveal className="section-header">
        <p className="section-label">Get to know me</p>
        <h2 className="section-title">About <span className="glow-text">Me</span></h2>
        <div className="section-line"></div>
      </Reveal>

      <div className="about-layout">
        <Reveal delay={0.2} className="about-top">
          <div className="about-top-left">
            <h2 className="about-heading">About my <span className="glow-text">journey</span></h2>
            <p className="about-desc">Hello! I'm Helman Dashelle M. Dacuma, a dedicated web developer focused on delivering tailored digital solutions. I engineer responsive, high-performance applications that elevate your brand and engage your users. Driven by continuous learning, I turn complex problems into elegant, intuitive web experiences.</p>
          </div>
          <div className="about-top-right">
            <div className="about-img-frame">
              <div className="tech-corner tl"></div><div className="tech-corner tr"></div><div className="tech-corner bl"></div><div className="tech-corner br"></div>
              <div className="about-img-wrap">
                <img src="/Profile.jpg" alt="Profile" className="about-img about-img-main" />
                <img src="/Profile 2.png" alt="Profile Hover" className="about-img about-img-hover" />
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.4} className="about-bottom">
          <div className="about-bottom-left">
            <div className="about-img-frame">
              <div className="tech-corner tl"></div><div className="tech-corner tr"></div><div className="tech-corner bl"></div><div className="tech-corner br"></div>
              <div className="about-img-wrap">
                <img src="/Profile 2.png" alt="Profile" className="about-img about-img-main" />
                <img src="/Profile.jpg" alt="Profile Hover" className="about-img about-img-hover" />
              </div>
            </div>
          </div>
          <div className="about-bottom-right">
            <span className="pill-btn">EXPERTISE</span>
            <h2 className="about-heading">Unlock my expertise to drive <span className="glow-text">success</span></h2>
            <p className="about-desc">With a robust foundation in modern web technologies, I build scalable solutions that grow with your needs. I focus on creating reliable, visually stunning applications tailored to help you achieve your goals and stand out in the digital landscape.</p>

            <div className="timeline">
              <Reveal delay={0.5} className="tl-item">
                <div className="tl-dot"></div>
                <div className="tl-content">
                  <span className="tl-date">2023 — Present</span>
                  <strong>Freelance Web Developer</strong>
                  <p>Building full-stack web applications for clients across various industries.</p>
                </div>
              </Reveal>
              <Reveal delay={0.6} className="tl-item">
                <div className="tl-dot"></div>
                <div className="tl-content">
                  <span className="tl-date">2022 — 2026</span>
                  <strong>BS in Information and Technology</strong>
                  <p>Saint Columban College — Major in Web & Mobile Development</p>
                </div>
              </Reveal>
              <Reveal delay={0.7} className="tl-item">
                <div className="tl-dot"></div>
                <div className="tl-content">
                  <span className="tl-date">2022</span>
                  <strong>Started Coding Journey</strong>
                  <p>First lines of HTML & CSS. Fell in love with building for the web.</p>
                </div>
              </Reveal>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
