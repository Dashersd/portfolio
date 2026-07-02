import React, { useEffect, useState } from 'react';

const Preloader = () => {
  const [percent, setPercent] = useState(0);
  const [word, setWord] = useState('Design');
  const [hidden, setHidden] = useState(false);
  const [rendered, setRendered] = useState(true);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    let currentPercent = 0;
    let timerId;

    const updateLoader = () => {
      currentPercent += Math.floor(Math.random() * 8) + 1;
      
      if (currentPercent >= 100) {
        currentPercent = 100;
        setPercent(100);
        setWord('Inspire');
        
        setTimeout(() => {
          setHidden(true);
          document.body.style.overflow = '';
          
          // Remove from DOM after transition (assume ~800ms fade)
          setTimeout(() => setRendered(false), 800);
        }, 800);
        
        return;
      }
      
      if (currentPercent < 33) setWord('Design');
      else if (currentPercent < 66) setWord('Create');
      else setWord('Inspire');
      
      setPercent(currentPercent);
      timerId = setTimeout(updateLoader, Math.random() * 120 + 40);
    };

    timerId = setTimeout(updateLoader, 300);

    return () => {
      clearTimeout(timerId);
      document.body.style.overflow = '';
    };
  }, []);

  if (!rendered) return null;

  return (
    <div id="preloader" className={`preloader ${hidden ? 'hide' : ''}`}>
      <div className="preloader-top-left">PORTFOLIO</div>
      <div className="preloader-center">
        <span className="design-text" id="preloaderWord">{word}</span>
      </div>
      <div className="preloader-bottom-right" id="preloaderPercent">
        {percent.toString().padStart(3, '0')}
      </div>
      <div className="preloader-progress-bar">
        <div 
          className="preloader-progress" 
          id="preloaderProgress"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Preloader;
