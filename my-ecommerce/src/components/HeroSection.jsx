const HeroSection = ({ darkMode }) => {
    return (
      <div className={`${darkMode ? 'bg-secondary' : 'bg-dark'} text-white py-5`}>
        <div className="container py-5">
          <div className="row py-lg-5">
            <div className="col-12 col-lg-6">
              <h1 className="display-5 display-lg-4 fw-bold mb-3">
                New Collection 2024
              </h1>
              <p className="lead opacity-75 d-none d-md-block">
                Discover our curated selection of premium essentials designed for modern living. 
                Experience comfort and style in every piece.
              </p>
              <div className="d-flex gap-3 mt-4">
                <button className={`btn ${darkMode ? 'btn-light' : 'btn-primary'} btn-lg px-4 py-3`}>
                  Shop Now
                </button>
                <button className={`btn ${darkMode ? 'btn-outline-light' : 'btn-outline-primary'} btn-lg px-4 py-3`}>
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
export default HeroSection;