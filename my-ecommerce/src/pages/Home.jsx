import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="display-4 fw-bold">Discover Premium Products</h1>
              <p className="lead">Shop the latest trends and exclusive deals.</p>
              <Link to="/shop" className="btn btn-primary btn-lg shadow">Shop Now</Link>
            </div>
            <div className="col-md-6">
              <img src="https://th.bing.com/th/id/OIP.SpGF6RvBQ90cBnXU1CepZwHaFV?w=206&h=180" alt="Hero" className="img-fluid rounded shadow" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="featured-categories py-5">
        <div className="container">
          <h2 className="text-center mb-4">Featured Categories</h2>
          <div className="row">
            {[
              {
                title: 'Electronics',
                text: 'Explore the latest gadgets and tech.',
                img: 'https://assets1.ignimgs.com/2020/09/28/best-electronic-deals-to-expect-amazon-prime-day-1601306492159_160w.png'
              },
              {
                title: 'Fashion',
                text: 'Find your perfect style.',
                img: 'https://www.omnisend.com/blog/wp-content/uploads/2021/03/21-03-19-Fashion-ecommerce.jpg'
              },
              {
                title: 'Home & Living',
                text: 'Create your dream space.',
                img: 'https://th.bing.com/th/id/OIP.rKos1yoVwYppkLca2u9MfQHaEJ'
              }
            ].map((cat, idx) => (
              <div className="col-md-4 mb-3" key={idx}>
                <div className="card shadow-sm h-100">
                  <img src={cat.img} className="card-img-top" alt={cat.title} />
                  <div className="card-body">
                    <h5 className="card-title">{cat.title}</h5>
                    <p className="card-text">{cat.text}</p>
                    <Link to="/shop" className="btn btn-primary shadow">Shop Now</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="promotional py-5 bg-light text-center">
        <div className="container">
          <h2 className="display-6">Limited Time Offer!</h2>
          <p className="lead">Get free shipping on all orders over $50.</p>
          <Link to="/shop" className="btn btn-secondary shadow">Shop Now</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
