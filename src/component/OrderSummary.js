import React, { useEffect, useState } from 'react';

const OrderSummary = () => {
  const [order, setOrder] = useState(null);

  useEffect(() => {
    fetch('/api/order/latest')  // Fetch the latest order from order microservice
      .then(response => response.json())
      .then(data => setOrder(data))
      .catch(error => console.error('Error fetching order summary:', error));
  }, []);

  if (!order) return <div>Loading...</div>;

  return (
    <div className="order-summary">
      <h2>Order Summary</h2>
      <p>Order ID: {order.id}</p>
      <p>Total Amount: ${order.total}</p>
      <p>Status: {order.status}</p>
    </div>
  );
};

export default OrderSummary;
