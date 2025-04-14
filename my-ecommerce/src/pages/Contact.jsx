import React, { useState } from 'react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4">Contact Us</h2>
      <div className="row">
        <div className="col-md-6">
          <h4>Send us a message</h4>
          <form onSubmit={handleContactSubmit}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" className="form-control" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea className="form-control" rows="5" required></textarea>
            </div>
            <button className="btn btn-primary" type="submit">Submit</button>
          </form>
        </div>
        <div className="col-md-6">
          <h4>Contact Info</h4>
          <p><i className="fas fa-envelope me-2"></i> support@hastinkart.com</p>
          <p><i className="fas fa-phone me-2"></i> +1 (555) 123-4567</p>
        </div>
      </div>

      {submitted && (
        <div className="alert alert-success mt-4">✅ Message sent successfully!</div>
      )}
    </div>
  );
};

export default Contact;
