import React from 'react';
import Accordion from './components/Accordion';

function App() {
  return (
    <div>
      <h1>Preguntas Frecuentes</h1>
      <Accordion title="¿Cómo puedo crear una cuenta?">
        Para crear una cuenta, sigue estos pasos:
        <ol>
          <li>Dirígete a la página de registro en nuestro sitio web.</li>
          <li>Completa el formulario con tu información personal.</li>
          <li>Haz clic en el botón "Registrarse".</li>
        </ol>
      </Accordion>
      <Accordion title="¿Cuáles son los métodos de pago aceptados?">
        Aceptamos los siguientes métodos de pago:
        <ul>
          <li>Tarjetas de crédito y débito Visa</li>
          <li>Tarjetas de crédito y débito Mastercard</li>
          <li>PayPal</li>
        </ul>
      </Accordion>
      <Accordion title="¿Cómo puedo contactar al servicio al cliente?">
        Si tienes alguna pregunta o necesitas asistencia, puedes contactarnos de las siguientes formas:
        <ul>
          <li>Llamando a nuestro número de atención al cliente: 123-456-7890.</li>
          <li>Enviando un correo electrónico a: soporte@example.com.</li>
          <li>Utilizando el chat en vivo en nuestro sitio web durante el horario comercial.</li>
        </ul>
      </Accordion>
    </div>
  );
}

export default App;
