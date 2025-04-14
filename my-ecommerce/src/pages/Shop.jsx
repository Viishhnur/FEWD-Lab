import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'Apple AirPods Pro 2',
    price: 249.99,
    imageUrl: 'https://m.media-amazon.com/images/I/61f1YfTkTDL._AC_SL1500_.jpg',
    description: 'Wireless earbuds with active noise cancellation.'
  },
  {
    id: 2,
    name: 'UGG Classic Mini Boot',
    price: 149.95,
    imageUrl: 'https://th.bing.com/th/id/OIP.GkQAXWSwcKA9dq5FIsZMtAHaHa',
    description: 'Iconic sheepskin boot offering comfort and warmth.'
  },
  {
    id: 3,
    name: 'Apple Watch Series 8',
    price: 399.00,
    imageUrl: 'https://th.bing.com/th/id/OIP.pMWZBr0ynCGU6Fz_7oVpEwHaEK',
    description: 'Advanced smartwatch with fitness tracking.'
  }
];

const Shop = () => {
  return (
    <div className="container py-5">
      <h2 className="mb-4">Shop Products</h2>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card h-100 shadow-sm">
              <img src={product.imageUrl} className="card-img-top" alt={product.name} style={{ height: '250px', objectFit: 'contain' }} />
              <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="fw-bold">${product.price}</p>
                <Link to={`/product/${product.id}`} className="btn btn-primary w-100">View Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
