import React, { useState, useEffect } from 'react';
import './App.css';
import Product from './Components/Product';
import Cart from './Components/Cart';
import productsData from './product.json';
function App() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productToRemove) => {
    const indexToRemove = cart.findIndex(product => product.id === productToRemove.id);
    if (indexToRemove !== -1) {
      const updatedCart = [...cart];
      updatedCart.splice(indexToRemove, 1);
      setCart(updatedCart);
    }
  };

  const calculateTotal = () => {
    return cart.reduce((total, product) => total + product.price, 0);
  };

  const handlePurchase = () => {
    if (cart.length > 0) {
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
        setCart([]);
      }, 3000); 
    }
  };

  return (
    <div className="app">
      <h1>Tienda en Línea</h1>
      <div className="shop">
        <div className="products">
          <h2>Productos</h2>
          {products.map(product => (
            <Product key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
        <Cart cart={cart} removeFromCart={removeFromCart} total={calculateTotal()} />
        <div className="purchase-area">
          <button className="purchase-button" onClick={handlePurchase}>Comprar</button>
          {showNotification && <div className="notification">¡Compra realizada con éxito!</div>}
        </div>
      </div>
    </div>
  );
}

export default App;
