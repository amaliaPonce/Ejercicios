import React from 'react';

const Cart = ({ cart, removeFromCart, total }) => {
  return (
    <div className="cart">
      <h2>Cesta de Compra</h2>
      {cart.length === 0 ? (
        <p>La cesta está vacía</p>
      ) : (
        <>
          <ul>
            {cart.map(product => (
              <li key={product.id}>
                <span>{product.name}</span>
                <span>${product.price}</span>
                <span className="delete-button" onClick={() => removeFromCart(product)}>X</span>
              </li>
            ))}
          </ul>
          <p>Total: ${total}</p>
        </>
      )}
    </div>
  );
};

export default Cart;
