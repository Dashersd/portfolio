import React from 'react';
import Reveal from './ui/Reveal';

const Skills = () => {
  const frontendSkills = [
    { name: 'HTML5', icon: 'fab fa-html5', brand: '#e34f26' },
    { name: 'CSS3', icon: 'fab fa-css3-alt', brand: '#1572b6' },
    { name: 'JavaScript', icon: 'fab fa-js', brand: '#f7df1e' },
    { name: 'React', icon: 'fab fa-react', brand: '#61dafb' },
    { name: 'TypeScript', icon: 'fas fa-file-code', brand: '#3178C6' },
    { name: 'Next.js', icon: 'fas fa-layer-group', brand: '#ffffff' },
  ];

  const backendSkills = [
    { name: 'PHP', icon: 'fab fa-php', brand: '#777BB4' },
    { name: 'MySQL', icon: 'fas fa-database', brand: '#00758F' },
    { name: 'Firebase', icon: 'fas fa-fire', brand: '#FFCA28' },
    { name: 'Prisma', icon: 'fas fa-cube', brand: '#5A67D8' },
    { name: 'MariaDB', icon: 'fas fa-database', brand: '#005E86' },
    { name: 'Supabase', icon: 'fas fa-database', brand: '#3ECF8E' },
  ];

  const toolsSkills = [
    { name: 'Git', icon: 'fab fa-git-alt', brand: '#F05032' },
    { name: 'GitHub', icon: 'fab fa-github', brand: '#ffffff' },
    { name: 'VS Code', icon: 'fas fa-code', brand: '#007ACC' },
    { name: 'Figma', icon: 'fab fa-figma', brand: '#F24E1E' },
    { name: 'Vite', icon: 'fas fa-bolt', brand: '#646CFF' },
    { name: 'NPM', icon: 'fab fa-npm', brand: '#CB3837' },
  ];

  const renderMarquee = (skills, duration, direction) => {
    return (
      <div className="marquee-wrap">
        {[...Array(6)].map((_, i) => (
          <div 
            key={i} 
            className="marquee-group" 
            style={{ '--duration': duration, '--direction': direction }} 
            aria-hidden={i > 0 ? "true" : "false"}
          >
            {skills.map((skill, idx) => (
              <div key={idx} className="skill-card" style={{ '--brand': skill.brand }}>
                <div className="skill-icon"><i className={skill.icon}></i></div>
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  };

  return (
    <section id="skills" className="section skills" data-watermark="SKILLS">
      <Reveal className="skills-header text-center">
        <p className="skills-sub">MY SKILLS</p>
        <h2 className="skills-title">Empowering My <span className="glow-text">Tools</span></h2>
        <p className="skills-desc">Software I use for My Designs</p>
      </Reveal>

      <Reveal delay={0.1} className="skills-category">
        <h3 className="skills-category-title">Front-End</h3>
        {renderMarquee(frontendSkills, '35s', 'normal')}
      </Reveal>

      <Reveal delay={0.2} className="skills-category">
        <h3 className="skills-category-title">Back-End</h3>
        {renderMarquee(backendSkills, '40s', 'reverse')}
      </Reveal>

      <Reveal delay={0.3} className="skills-category">
        <h3 className="skills-category-title">Tools</h3>
        {renderMarquee(toolsSkills, '30s', 'normal')}
      </Reveal>
    </section>
  );
};

export default Skills;
