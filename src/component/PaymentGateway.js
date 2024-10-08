import React, { useState } from 'react';

const PaymentGateway = () => {
  const [cardNumber, setCardNumber] = useState('');

  const handlePayment = () => {
    // Logic to handle payment via payment gateway microservice
  };

  return (
    <div className="payment-gateway">
      <h2>Payment Gateway</h2>
      <input
        type="text"
        placeholder="Card Number"
        value={cardNumber}
        onChange={(e) => setCardNumber(e.target.value)}
      />
      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
};

export default PaymentGateway;
