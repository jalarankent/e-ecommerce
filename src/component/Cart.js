import React, { useState, useEffect } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch('/api/cart')  // Fetch cart items from cart microservice
      .then(response => response.json())
      .then(data => setCartItems(data))
      .catch(error => console.error('Error fetching cart items:', error));
  }, []);

  const handleRemove = (id) => {
    // Logic to remove item from cart microservice
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.map(item => (
        <div key={item.id} className="cart-item">
          <h3>{item.name}</h3>
          <p>Quantity: {item.quantity}</p>
          <p>Price: ${item.price}</p>
          <button onClick={() => handleRemove(item.id)}>Remove</button>
        </div>
      ))}
      <button>Proceed to Checkout</button>
    </div>
  );
};

export default Cart;
