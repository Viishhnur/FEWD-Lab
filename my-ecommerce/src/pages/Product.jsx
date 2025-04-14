import React from 'react';
import { useParams } from 'react-router-dom';

const Product = () => {
  const { id } = useParams();
  return (
    <div className="container py-5">
      <h2>Product Details for ID: {id}</h2>
      <p>Coming soon... (You can fetch product from API or context here)</p>
    </div>
  );
};

export default Product;
