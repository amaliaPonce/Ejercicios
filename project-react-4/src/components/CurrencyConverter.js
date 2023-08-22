import React, { useState } from 'react';
import '../styles/CurrencyConverter.css'; 

const CurrencyConverter = () => {
  const [usdAmount, setUsdAmount] = useState('');
  const [eurAmount, setEurAmount] = useState('');

  const usdToEurRate = 0.85; // Tipo de cambio USD a EUR

  const handleUsdChange = (event) => {
    const usdValue = event.target.value;
    setUsdAmount(usdValue);
    setEurAmount((usdValue * usdToEurRate).toFixed(2));
  };

  const handleEurChange = (event) => {
    const eurValue = event.target.value;
    setEurAmount(eurValue);
    setUsdAmount((eurValue / usdToEurRate).toFixed(2));
  };

  return (
    <div className="currency-converter">
      <h1>Cambio de Divisas</h1>
      <div className="input-container">
        <label>Dólares (USD):</label>
        <input type="number" value={usdAmount} onChange={handleUsdChange} />
      </div>
      <div className="input-container">
        <label>Euros (EUR):</label>
        <input type="number" value={eurAmount} onChange={handleEurChange} />
      </div>
    </div>
  );
};

export default CurrencyConverter;
