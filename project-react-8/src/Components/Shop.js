import React, { useState } from 'react';
import Product from './Product';
import Cart from './Cart';
import productsData from './products.json';
const Shop = () => {
    const [cart, setCart] = useState([]);
  
    const addToCart = (product) => {
      setCart([...cart, product]);
    };
  
    const removeFromCart = (product) => {
      const updatedCart = cart.filter(item => item.id !== product.id);
      setCart(updatedCart);
    };
  
    const handlePay = () => {
      alert('¡Gracias por tu compra!');
      setCart([]);
    };
  
    return (
      <div className="store-container">
        <div className="shop">
          <div className="products">
            <h2>Productos</h2>
            {productsData.map(product => (
              <Product key={product.id} product={product} onAddToCart={addToCart} />
            ))}
          </div>
          <Cart cart={cart} onRemoveFromCart={removeFromCart} onPay={handlePay} />
          <button className="purchase-button center-button" onClick={handlePay}>
            Pagar
          </button>
        </div>
      </div>
    );
  };

  export default Shop;
  