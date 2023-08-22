import React, { useState } from 'react';

function Switch() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        fontFamily: 'Montserrat, sans-serif', // Cambiar la fuente a Montserrat
      }}
    >
      <h1 style={{ fontFamily: 'Montserrat, sans-serif', marginBottom: 20 }}>Interruptor</h1>
      <div
        style={{
          width: 50,
          height: 30,
          borderRadius: 15,
          backgroundColor: isOn ? 'green' : 'gray',
          display: 'flex',
          alignItems: 'center',
          justifyContent: isOn ? 'flex-end' : 'flex-start',
          padding: 5,
          cursor: 'pointer',
        }}
        onClick={() => setIsOn(!isOn)}
      >
        <div
          style={{
            width: 20,
            height: 20,
            borderRadius: '50%',
            backgroundColor: 'white',
          }}
        />
      </div>
    </div>
  );
}

export default Switch;
