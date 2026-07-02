import React, { useState, useEffect } from 'react';
import Tilt from 'react-parallax-tilt';
import Reveal from './ui/Reveal';

const projectsData = [
  {
    id: '01',
    category: 'frontend',
    categoryLabel: 'Front-End',
    image: '/projects/star-fleet.png',
    title: 'Star Fleet',
    description: 'An interactive, futuristic web application featuring a stunning sci-fi inspired interface. It leverages modern web technologies to deliver an immersive user experience.',
    tags: ['React', 'Tailwind CSS', 'Vite'],
    demo: 'https://star-fleet-silk.vercel.app',
    source: 'https://github.com/Dashersd/Star-Fleet'
  },
  {
    id: '02',
    category: 'frontend',
    categoryLabel: 'Front-End',
    image: '/projects/fleuria.png',
    title: 'Fleuria',
    description: 'A modern floral boutique website offering handcrafted floral arrangements designed to celebrate life\'s most meaningful occasions.',
    tags: ['React', 'Vite', 'Tailwind CSS'],
    demo: 'https://fleuria-ddgv.vercel.app',
    source: 'https://github.com/Dashersd/Fleuria'
  },
  {
    id: '03',
    category: 'frontend',
    categoryLabel: 'Front-End',
    image: '/projects/Polaris.png',
    title: 'Polaris',
    description: 'Much like the North Star, Polaris is your ultimate style compass. Discover curated, avant-garde fashion designed to help you stand out and find your own direction.',
    tags: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    demo: 'https://polaris-chi-olive.vercel.app/',
    source: 'https://github.com/Dashersd/Polaris'
  },
  {
    id: '04',
    category: 'frontend',
    categoryLabel: 'Front-End',
    image: '/projects/Eutopia.png',
    title: 'Eutopia',
    description: 'A creative workspace where imagination sparks. Eutopia shapes avant-garde ideas that don\'t exist yet and brings them to life through the power of AI.',
    tags: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    demo: 'https://eutopia-indol.vercel.app/',
    source: 'https://github.com/Dashersd/eutopia'
  },
  {
    id: '05',
    category: 'frontend',
    categoryLabel: 'Front-End',
    image: '/projects/Aurelia.png',
    title: 'Aurelia',
    description: 'A modern, elegant luxury jewelry e-commerce website designed for premium collections. Features high-performance interactive showcases and sophisticated animations.',
    tags: ['React', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
    demo: 'https://aurelia-sigma.vercel.app/',
    source: 'https://github.com/Dashersd/Aurelia'
  },
  {
    id: '06',
    category: 'frontend',
    categoryLabel: 'Front-End',
    image: '/projects/timeshift.png',
    title: 'Time Shift',
    description: 'A premium e-commerce platform for luxury timepieces. Implements an intricate 3D animated analog clock, dynamic scroll-driven visual transitions, a sleek collection catalog, and a fully functional shopping cart.',
    tags: ['HTML5', 'CSS3', 'JavaScript', '3D Animations'],
    demo: 'https://time-shift-ivory.vercel.app/watch.html',
    source: 'https://github.com/Dashersd/TimeShift'
  },
  {
    id: '07',
    category: 'fullstack',
    categoryLabel: 'Full-Stack',
    image: '/projects/mdrrmo.png',
    title: 'MDRRMO Information Management System',
    description: 'A comprehensive safety and resiliency portal for the Municipal Disaster Risk Reduction and Management Office. Features real-time emergency feeds, dynamic equipment inventory, activity logs, and a 24/7 hotline roster.',
    tags: ['HTML5', 'Bootstrap', 'JavaScript', 'PHP'],
    demo: 'http://mdrrmo-system.infinityfreeapp.com/',
    source: 'https://github.com/Dashersd/MDRRMO'
  },
  {
    id: '08',
    category: 'fullstack',
    categoryLabel: 'Full-Stack',
    image: '/projects/Resume Builder.png',
    title: 'Resume Builder',
    description: 'A full-stack resume builder that lets users craft, customize, and export professional resumes in real time. Features live template previews, section editing, and one-click PDF export powered by a modern web stack.',
    tags: ['Next.js', 'Prisma', 'React', 'MariaDB', 'Tailwind CSS'],
    demo: 'https://resume-builder-five-rosy.vercel.app',
    source: null
  }
];

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [visibleProjects, setVisibleProjects] = useState(projectsData);

  useEffect(() => {
    if (filter === 'all') {
      setVisibleProjects(projectsData);
    } else {
      setVisibleProjects(projectsData.filter(p => p.category === filter));
    }
  }, [filter]);

  return (
    <section id="projects" className="section projects" data-watermark="WORK">
      <Reveal className="section-header">
        <p className="section-label">What I've built</p>
        <h2 className="section-title">My <span className="glow-text">Projects</span></h2>
        <div className="section-line"></div>
      </Reveal>

      <Reveal delay={0.2} className="project-filters">
        <button 
          className={`filter-btn ripple ${filter === 'all' ? 'active' : ''}`} 
          onClick={() => setFilter('all')}
        >All Projects</button>
        <button 
          className={`filter-btn ripple ${filter === 'frontend' ? 'active' : ''}`} 
          onClick={() => setFilter('frontend')}
        >Front-End & UI</button>
        <button 
          className={`filter-btn ripple ${filter === 'fullstack' ? 'active' : ''}`} 
          onClick={() => setFilter('fullstack')}
        >Full-Stack & Systems</button>
      </Reveal>

      <div className="projects-grid">
        {visibleProjects.map((project, index) => (
          <Reveal key={project.id} delay={0.1 * (index % 4)}>
            <Tilt 
              className="project-card" 
              glareEnable={true} 
              glareMaxOpacity={0.15} 
              glareColor="#ffffff"
              glarePosition="all"
              tiltMaxAngleX={5}
              tiltMaxAngleY={5}
              scale={1.02}
              transitionSpeed={2000}
            >
              <div className="project-img-wrap">
                <span className={`card-category-badge ${project.category === 'fullstack' ? 'badge-fullstack' : ''}`}>
                  {project.categoryLabel}
                </span>
                <span className="card-number">{project.id}</span>
                <img src={project.image} alt={project.title} />
                <video src="/projects/placeholder.mp4" className="project-video" muted loop playsInline></video>
                <div className="project-overlay"></div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map(tag => <span key={tag}>{tag}</span>)}
                </div>
                <div className="project-btns">
                  <a href={project.demo} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary ripple">
                    <i className="fas fa-external-link-alt"></i> Live Demo
                  </a>
                  {project.source && (
                    <a href={project.source} target="_blank" rel="noreferrer" className="btn btn-sm btn-outline ripple">
                      <i className="fab fa-github"></i> Source
                    </a>
                  )}
                </div>
              </div>
            </Tilt>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Projects;
