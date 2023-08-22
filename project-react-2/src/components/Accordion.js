import React, { useState } from 'react';
import '../styles/Accordion.css';

function Accordion({ title, children }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`accordion ${isExpanded ? 'expanded' : ''}`}>
      <button
        className="accordion-header"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span className="accordion-title">{title}</span>
        <span className={`accordion-icon ${isExpanded ? 'expanded' : ''}`}>
          ▼
        </span>
      </button>
      {isExpanded && (
        <div className="accordion-content">
          {children}
        </div>
      )}
    </div>
  );
}

export default Accordion;
