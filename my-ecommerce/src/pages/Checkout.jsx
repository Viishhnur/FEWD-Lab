import React, { useState } from 'react';

const Checkout = () => {
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    setOrderPlaced(true);
    setTimeout(() => {
      setOrderPlaced(false);
    }, 3000);
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4">Checkout</h2>
      <div className="row">
        <div className="col-md-6">
          <h4>Shipping Information</h4>
          <form onSubmit={handlePlaceOrder}>
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input type="text" className="form-control" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Address</label>
              <input type="text" className="form-control" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" required />
            </div>
            <button className="btn btn-primary" type="submit">Place Order</button>
          </form>
        </div>
        <div className="col-md-6">
          <h4>Order Summary</h4>
          <p>No items yet (this will show cart summary)</p>
          <p><strong>Total:</strong> $0.00</p>
        </div>
      </div>

      {orderPlaced && (
        <div className="alert alert-success mt-4">🎉 Order placed successfully!</div>
      )}
    </div>
  );
};

export default Checkout;
