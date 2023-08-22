import '../styles/CurrencyConverter.css';
import React, { useState, useEffect } from 'react';

const CurrencyConverter = () => {
  const [exchangeRate, setExchangeRate] = useState(1.18); 
  const [amountEur, setAmountEur] = useState(1);
  const [amountUsd, setAmountUsd] = useState((amountEur * exchangeRate).toFixed(3));
  const [todayExchangeRate, setTodayExchangeRate] = useState('');

  useEffect(() => {
    fetch('https://api.frankfurter.app/latest?from=EUR&to=USD')
      .then(response => response.json())
      .then(data => {
        const rates = data.rates;
        if (rates && rates.USD) {
          setExchangeRate(rates.USD);
          setTodayExchangeRate(rates.USD.toFixed(3));
        }
      })
      .catch(error => {
        console.error("Error fetching exchange rates:", error);
      });
  }, []);

  const handleEurChange = (event) => {
    const newAmountEur = event.target.value;
    setAmountEur(newAmountEur);
    const newAmountUsd = (parseFloat(newAmountEur) * exchangeRate).toFixed(3);
    setAmountUsd(parseFloat(newAmountUsd));
  };

  const handleUsdChange = (event) => {
    const newAmountUsd = event.target.value;
    setAmountUsd(newAmountUsd);
    const newAmountEur = (parseFloat(newAmountUsd) / exchangeRate).toFixed(3);
    setAmountEur(parseFloat(newAmountEur));
  };

  return (
    <div className="card">
      <div className="currency-converter">
        <h2>Calculadora de Cambio de Divisas</h2>
        <div className="exchange-rate-today">
          {todayExchangeRate && (
            <p>
              El cambio de hoy es: {todayExchangeRate}
            </p>
          )}
        </div>
        <div className="input-container">
          <label>EUR:</label>
          <input
            type="number"
            step="1"
            value={amountEur}
            onChange={handleEurChange}
          />
        </div>
        <div className="input-container">
          <label>USD:</label>
          <input
            type="number"
            step="1"
            value={amountUsd}
            onChange={handleUsdChange}
          />
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverter;
