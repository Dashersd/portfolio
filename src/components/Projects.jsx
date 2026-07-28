import React, { useState, useEffect, useMemo } from 'react';
import Tilt from 'react-parallax-tilt';
import { motion, AnimatePresence } from 'framer-motion';
import Reveal from './ui/Reveal';
import SpotlightCard from './ui/SpotlightCard';
import { projectsData } from '../data/projects';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [visibleProjects, setVisibleProjects] = useState(projectsData);

  // Derive unique categories from data
  const categories = useMemo(() => {
    const uniqueCats = new Map();
    projectsData.forEach(p => {
      if (!uniqueCats.has(p.category)) {
        uniqueCats.set(p.category, p.categoryLabel);
      }
    });
    return Array.from(uniqueCats.entries()).map(([value, label]) => ({ value, label }));
  }, []);

  // Compute live project counts per category
  const categoryCounts = useMemo(() => {
    const counts = { all: projectsData.length };
    projectsData.forEach(p => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Filter projects dynamically by category
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

      {/* Filter Tabs with Live Count Badges */}
      <Reveal delay={0.2} className="project-filters">
        <button 
          className={`filter-btn ripple ${filter === 'all' ? 'active' : ''}`} 
          onClick={() => setFilter('all')}
          aria-label="Show all projects"
        >
          All Projects <span className="filter-count">{categoryCounts.all}</span>
        </button>
        {categories.map((cat) => (
          <button 
            key={cat.value}
            className={`filter-btn ripple ${filter === cat.value ? 'active' : ''}`} 
            onClick={() => setFilter(cat.value)}
            aria-label={`Show ${cat.label} projects`}
          >
            {cat.label} <span className="filter-count">{categoryCounts[cat.value] || 0}</span>
          </button>
        ))}
      </Reveal>

      {visibleProjects.length === 0 ? (
        <Reveal className="text-center" delay={0.3}>
          <p style={{ color: 'var(--gray)', fontSize: '1.1rem', marginTop: '2rem' }}>
            No projects found matching your search.
          </p>
        </Reveal>
      ) : (
        <motion.div className="projects-grid" layout>
          <AnimatePresence>
            {visibleProjects.map((project) => (
              <motion.div 
                key={project.id} 
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
              >
                <SpotlightCard>
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
                      {project.featured && (
                        <span className="featured-badge">⭐ Featured</span>
                      )}
                      <span className={`card-category-badge ${project.category === 'fullstack' ? 'badge-fullstack' : ''}`}>
                        &lt;{project.categoryLabel} /&gt;
                      </span>
                      <span className="card-number">{project.id}</span>
                      <img src={project.image} alt={`Screenshot of ${project.title}`} loading="lazy" />
                      {project.video && (
                        <video src={project.video} className="project-video" muted loop playsInline></video>
                      )}
                      <div className="project-overlay"></div>
                    </div>
                    <div className="project-info">
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                      <div className="project-tags">
                        {project.tags.map(tag => <span key={tag}>{tag}</span>)}
                      </div>
                      <div className="project-btns">
                        <a href={project.demo} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary ripple" aria-label={`View live demo for ${project.title}`}>
                          <i className="fas fa-external-link-alt"></i> Live Demo
                        </a>
                        {project.source && (
                          <a href={project.source} target="_blank" rel="noreferrer" className="btn btn-sm btn-outline ripple" aria-label={`View source code for ${project.title}`}>
                            <i className="fab fa-github"></i> Source
                          </a>
                        )}
                      </div>
                    </div>
                  </Tilt>
                </SpotlightCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </section>
  );
};

export default Projects;



