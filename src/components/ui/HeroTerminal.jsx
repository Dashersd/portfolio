import React from 'react';

const HeroTerminal = () => {
  return (
    <div className="hero-terminal">
      <div className="terminal-header">
        <div className="terminal-dots">
          <span className="terminal-dot dot-red"></span>
          <span className="terminal-dot dot-yellow"></span>
          <span className="terminal-dot dot-green"></span>
        </div>
        <span className="terminal-title">developer.config.ts</span>
      </div>
      <div className="terminal-body">
        <div>
          <span className="code-keyword">const</span> <span className="code-variable">developer</span> = &#123;
        </div>
        <div style={{ paddingLeft: '1.2rem' }}>
          <span className="code-property">name</span>: <span className="code-string">'Helman Dashelle'</span>,
        </div>
        <div style={{ paddingLeft: '1.2rem' }}>
          <span className="code-property">role</span>: <span className="code-string">'Web & Mobile Developer'</span>,
        </div>
        <div style={{ paddingLeft: '1.2rem' }}>
          <span className="code-property">status</span>: <span className="code-string">'Available for hire'</span>,
        </div>
        <div style={{ paddingLeft: '1.2rem' }}>
          <span className="code-property">skills</span>: [
          <span className="code-string">'React'</span>, <span className="code-string">'Node.js'</span>, <span className="code-string">'PHP'</span>, <span className="code-string">'UI/UX'</span>],
        </div>
        <div style={{ paddingLeft: '1.2rem' }}>
          <span className="code-property">passion</span>: <span className="code-string">'Building scalable digital solutions'</span>
        </div>
        <div>&#125;;</div>
        <div style={{ marginTop: '0.6rem' }}>
          <span className="code-comment">// Ready to collaborate? Let's build something epic!</span>
        </div>
      </div>
    </div>
  );
};

export default HeroTerminal;
