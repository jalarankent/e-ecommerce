import React from 'react';

const Checkout = () => {
  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <form>
        <label>
          Address:
          <input type="text" name="address" />
        </label>
        <label>
          Payment Method:
          <select name="payment">
            <option value="creditCard">Credit Card</option>
            <option value="paypal">PayPal</option>
          </select>
        </label>
        <button>Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
