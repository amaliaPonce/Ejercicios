import '../styles/PasswordStrength.css'; // Importa el archivo de estilos pimport React, { useState } from 'react';

import React, { useState } from 'react';


const PasswordStrength = () => {
    const [password, setPassword] = useState('');
  
    const getStrength = () => {
      const length = password.length;
  
      if (length <= 5) {
        return 'Débil';
      } else if (length <= 10) {
        return 'Moderada';
      } else {
        return 'Fuerte';
      }
    };
  
    const strength = getStrength();
    const barColor = strength === 'Débil' ? 'red' : strength === 'Moderada' ? 'orange' : 'green';
    const barWidth = `${(password.length / 15) * 100}%`;
  
    return (
      <div className="password-strength">
        <h2 className="title">Evaluación de fortaleza de contraseña</h2>
        <div className="input-container">
          <label className="label">Contraseña:</label>
          <input
            type="password"
            className="input"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className="strength-indicator">
          <div className="strength-bar">
            <div className="bar" style={{ width: barWidth, backgroundColor: barColor }}></div>
          </div>
          <p className={`strength-text text-${strength}`}>
            Fortaleza: {strength}
          </p>
        </div>
      </div>
    );
  };
  
  export default PasswordStrength;