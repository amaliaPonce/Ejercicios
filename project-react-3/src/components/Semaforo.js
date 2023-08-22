import '../styles/Semaforo.css'; 
import React, { useState } from 'react';

function Semaforo() {
  const [color, setColor] = useState(null);

  const handleColorClick = (newColor) => {
    setColor(color === newColor ? null : newColor);
  };

  return (
    <div className="semaforo-container">
      <div
        className={`luz roja ${color === 'roja' ? 'encendida' : ''}`}
        onClick={() => handleColorClick('roja')}
      ></div>
      <div
        className={`luz amarilla ${color === 'amarilla' ? 'encendida' : ''}`}
        onClick={() => handleColorClick('amarilla')}
      ></div>
      <div
        className={`luz verde ${color === 'verde' ? 'encendida' : ''}`}
        onClick={() => handleColorClick('verde')}
      ></div>
    </div>
  );
}

export default Semaforo;



