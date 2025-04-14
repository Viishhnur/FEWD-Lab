import {useState} from 'react';
import {useEffect} from 'react';
const Newsletter = ({ darkMode }) => {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (email) {
        setSubscribed(true);
        setEmail('');
        setTimeout(() => setSubscribed(false), 3000);
      }
    };
  
    return (
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className={`card ${darkMode ? 'bg-secondary' : 'bg-primary'} text-white text-center overflow-hidden`}>
              <div className="card-body p-3 p-md-5">
                <h2 className="mb-3">Join Our Newsletter</h2>
                <p className="mb-4 opacity-75">
                  Get exclusive offers, style updates, and early access to sales
                </p>
                {subscribed ? (
                  <div className="alert alert-success mb-0">Thank you for subscribing!</div>
                ) : (
                  <form onSubmit={handleSubmit} className="row g-3 justify-content-center">
                    <div className="col-12 col-md-8">
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="col-12 col-md-4">
                      <button type="submit" className={`btn ${darkMode ? 'btn-dark' : 'btn-light'} btn-lg w-100`}>
                        Subscribe
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  
export default Newsletter;  