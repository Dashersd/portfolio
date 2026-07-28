import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="modal-backdrop" onClick={onClose}>
        <motion.div
          className="project-modal"
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <i className="fas fa-times"></i>
          </button>

          <div className="modal-img-wrap">
            <img src={project.image} alt={project.title} />
          </div>

          <span className="card-category-badge" style={{ position: 'relative', top: 0, left: 0, display: 'inline-block', marginBottom: '10px' }}>
            &lt;{project.categoryLabel || project.category} /&gt;
          </span>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '0.8rem', color: '#fff' }}>
            {project.title}
          </h2>

          <p style={{ color: 'var(--gray)', fontSize: '0.95rem', lineHeight: '1.8', marginBottom: '1.2rem' }}>
            {project.description}
          </p>

          <h4 style={{ fontSize: '0.9rem', color: 'var(--cyan)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem' }}>
            Technologies Used
          </h4>
          <div className="modal-tech-stack">
            {(project.tags || ['React', 'JavaScript', 'Tailwind CSS', 'Vite']).map((tag, idx) => (
              <span key={idx} className="tech-pill">{tag}</span>
            ))}
          </div>

          <div className="modal-actions">
            {(project.demo || project.demoUrl) && (
              <a href={project.demo || project.demoUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
                <i className="fas fa-external-link-alt"></i> Live Demo
              </a>
            )}
            {(project.source || project.githubUrl) && (
              <a href={project.source || project.githubUrl} target="_blank" rel="noreferrer" className="btn btn-outline">
                <i className="fab fa-github"></i> View Code
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectModal;
