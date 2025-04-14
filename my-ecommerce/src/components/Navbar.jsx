import {useState} from 'react';
import {useEffect} from 'react';
const Navbar = ({ darkMode, setDarkMode }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cart, setCart] = useState([]);
  
    return (
      <nav className={`navbar navbar-expand-lg navbar-${darkMode ? 'dark' : 'light'} ${darkMode ? 'bg-dark' : 'bg-white'} shadow-sm`}>
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className={`bi bi-bag-fill ${darkMode ? 'text-light' : 'text-primary'} me-2`} viewBox="0 0 16 16">
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z"/>
            </svg>
            <span className={`fw-bold ${darkMode ? 'text-light' : 'text-dark'}`}>ShopEase</span>
          </a>
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className={`navbar-toggler-icon ${darkMode ? 'bg-light' : ''}`}></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className={`nav-link ${darkMode ? 'text-light' : 'text-dark'}`} href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${darkMode ? 'text-light' : 'text-dark'}`} href="#">Shop</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${darkMode ? 'text-light' : 'text-dark'}`} href="#">Categories</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${darkMode ? 'text-light' : 'text-dark'}`} href="#">About</a>
              </li>
            </ul>
            
            <div className="d-flex align-items-center gap-3">
              <button 
                className={`btn btn-link ${darkMode ? 'text-light' : 'text-dark'}`}
                onClick={() => setDarkMode(!darkMode)}
              >
                {darkMode ? '☀️' : '🌙'}
              </button>
              
              <button className={`btn btn-link ${darkMode ? 'text-light' : 'text-dark'} position-relative`} 
                onClick={() => setIsCartOpen(!isCartOpen)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </svg>
                {cart.length > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {cart.length}
                  </span>
                )}
              </button>
            </div>
          </div>
  
          {/* Cart Offcanvas */}
          {isCartOpen && (
            <div className={`offcanvas offcanvas-end ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'} show`}>
              <div className="offcanvas-header border-bottom">
                <h5 className="offcanvas-title">Shopping Cart</h5>
                <button type="button" className={`btn-close ${darkMode ? 'btn-close-white' : ''}`} 
                  onClick={() => setIsCartOpen(false)}></button>
              </div>
              <div className="offcanvas-body">
                {cart.length === 0 ? (
                  <div className="text-center py-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" 
                      className="bi bi-cart text-secondary mb-3" viewBox="0 0 16 16">
                      <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                    </svg>
                    <h5>Your cart is empty</h5>
                    <button className={`btn ${darkMode ? 'btn-light' : 'btn-primary'} mt-3`}
                      onClick={() => setIsCartOpen(false)}>
                      Continue Shopping
                    </button>
                  </div>
                ) : (
                  <div>
                    <ul className="list-group mb-3">
                      {cart.map((item, index) => (
                        <li key={index} className="list-group-item d-flex justify-content-between align-items-start">
                          <div className="me-auto">
                            <div className="d-flex">
                              <img src={item.image} alt={item.name} 
                                className="img-thumbnail me-3" style={{ width: '80px', height: '80px' }} />
                              <div>
                                <h6 className="my-0">{item.name}</h6>
                                <small className="text-muted">{item.category}</small>
                                <p className="mt-1 mb-0">${item.price}</p>
                              </div>
                            </div>
                          </div>
                          <div className="d-flex flex-column align-items-end">
                            <div className="mb-2">Qty: {item.quantity}</div>
                            <button className="btn btn-sm btn-outline-danger"
                              onClick={() => setCart(cart.filter((_, i) => i !== index))}>
                              Remove
                            </button>
                          </div>
                        </li>
                      ))}
                    </ul>
                    <div className="card mb-3">
                      <div className="card-body">
                        <div className="d-flex justify-content-between mb-2">
                          <h6>Subtotal</h6>
                          <h6>${cart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)}</h6>
                        </div>
                        <small className="text-muted">Shipping and taxes calculated at checkout</small>
                      </div>
                    </div>
                    <div className="d-grid gap-2">
                      <button className={`btn ${darkMode ? 'btn-light' : 'btn-primary'}`}>Checkout</button>
                      <button className={`btn ${darkMode ? 'btn-outline-light' : 'btn-outline-secondary'}`}
                        onClick={() => setIsCartOpen(false)}>
                        Continue Shopping
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </nav>
    );
  };
export default Navbar;  