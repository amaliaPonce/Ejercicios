import React, { useState } from 'react';
import '../styles/PasswordRepeat.css'; // Importa el archivo de estilos personalizados

const PasswordRepeat = () => {
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePasswordRepeatChange = (event) => {
    setPasswordRepeat(event.target.value);
  };

  const passwordsMatch = password === passwordRepeat;

  return (
    <div className="password-repeat">
      <h2>Registrar nueva contraseña</h2>
      <div className="input-container">
        <label>Contraseña:</label>
        <input type="password" value={password} onChange={handlePasswordChange} />
      </div>
      <div className="input-container">
        <label>Repetir contraseña:</label>
        <input
          type="password"
          value={passwordRepeat}
          onChange={handlePasswordRepeatChange}
          className={passwordsMatch ? '' : 'password-mismatch'}
        />
      </div>
      {passwordsMatch ? (
        <p className="match-message">Las contraseñas coinciden</p>
      ) : (
        <p className="mismatch-message">Las contraseñas no coinciden</p>
      )}
    </div>
  );
};

export default PasswordRepeat;
