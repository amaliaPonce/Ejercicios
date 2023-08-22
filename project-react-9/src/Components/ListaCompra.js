import React, { useState } from 'react';
import '../styles/listaCompra.css'; 

const ListaCompra = () => {
    const [itemText, setItemText] = useState('');
    const [items, setItems] = useState([]);
  
    const addItem = () => {
      if (itemText.trim() !== '') {
        setItems([...items, { text: itemText, checked: false }]);
        setItemText('');
      }
    };
  
    const toggleItem = (index) => {
      const updatedItems = [...items];
      updatedItems[index].checked = !updatedItems[index].checked;
      setItems(updatedItems);
    };
  
    return (
      <div className="list-container">
        <div className="list-column">
          <h1 className="list-header">Nueva Compra</h1>
          <input
              className="list-input input-style"
            type="text"
            value={itemText}
            onChange={(e) => setItemText(e.target.value)}
            placeholder="Añade tus productosss"
          />
          <button className="list-button custom-button" onClick={addItem}>
            Añadir
          </button>
        </div>
        <div className="list-column">
          <h1 className="list-header">Lista de Compras</h1>
          <ul className="list-ul">
            {items.map((item, index) => (
              <li
                key={index}
                onClick={() => toggleItem(index)}
                className={`list-item ${item.checked ? 'completed' : ''}`}
              >
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  
  export default ListaCompra;