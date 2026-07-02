import React from 'react';
import { motion } from 'framer-motion';

const Reveal = ({ children, className = '', delay = 0, yOffset = 50 }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
