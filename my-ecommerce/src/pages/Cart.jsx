import React from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
  return (
    <div className="container py-5">
      <h2>Your Cart</h2>
      <p>No items in cart yet.</p>
      <Link to="/shop" className="btn btn-primary">Go Shopping</Link>
    </div>
  );
};

export default Cart;
