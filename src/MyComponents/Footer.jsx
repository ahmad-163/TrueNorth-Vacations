import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <footer className="position-relative text-white" style={{ background: 'linear-gradient(180deg, #1a1a1a 0%, #0a0a0a 100%)' }}>
        {/* Wave Decoration */}
        <div className="position-relative" style={{ marginTop: '-1px' }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" style={{ width: '100%', display: 'block' }}>
            <path fill="#3eb489" fillOpacity="1" d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
          </svg>
        </div>

        <div className="container py-5">
          <div className="row g-5">
            {/* Brand Section */}
            <div className="col-lg-4 col-md-6">
              <h3 className="fw-bold mb-4" style={{ color: '#3eb489' }}>
                TrueNorth Vacations
              </h3>
              <p className="mb-4 opacity-75 lh-lg">
                Your trusted partner for exploring Pakistan's most beautiful destinations. 
                We create unforgettable experiences for adventurers and nature lovers.
              </p>
              {/* Social Media */}
              <div className="d-flex gap-3">
                {['facebook', 'instagram', 'twitter', 'youtube'].map((social) => (
                  <a 
                    key={social}
                    href="#"
                    className="d-flex align-items-center justify-content-center text-decoration-none rounded-circle"
                    style={{
                      width: '40px',
                      height: '40px',
                      backgroundColor: 'rgba(62, 180, 137, 0.2)',
                      color: '#3eb489'
                    }}
                  >
                    <span className="fw-bold">{social[0].toUpperCase()}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-lg-2 col-md-3 col-6">
              <h5 className="fw-bold mb-4 text-white">Quick Links</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link 
                    to="/about" 
                    className="text-decoration-none opacity-75"
                    style={{ color: 'white' }}
                  >
                    About Us
                  </Link>
                </li>
                <li className="mb-2">
                  <Link 
                    to="/popular" 
                    className="text-decoration-none opacity-75"
                    style={{ color: 'white' }}
                  >
                    Tour Packages
                  </Link>
                </li>
                <li className="mb-2">
                  <a 
                    href="#" 
                    className="text-decoration-none opacity-75"
                    style={{ color: 'white' }}
                  >
                    International Trip
                  </a>
                </li>
                <li className="mb-2">
                  <Link 
                    to="/register" 
                    className="text-decoration-none opacity-75"
                    style={{ color: 'white' }}
                  >
                    Registration
                  </Link>
                </li>
                <li className="mb-2">
                  <Link 
                    to="/contact" 
                    className="text-decoration-none opacity-75"
                    style={{ color: 'white' }}
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Tour Days */}
            <div className="col-lg-2 col-md-3 col-6">
              <h5 className="fw-bold mb-4 text-white">Tour Days</h5>
              <ul className="list-unstyled">
                {['Monthly', 'Weekly', 'Quarterly', 'Yearly'].map((period) => (
                  <li key={period} className="mb-2">
                    <a 
                      href="#" 
                      className="text-decoration-none opacity-75"
                      style={{ color: 'white' }}
                    >
                      {period}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div className="col-lg-4 col-md-12">
              <h5 className="fw-bold mb-4 text-white">Newsletter</h5>
              <p className="mb-3 opacity-75">
                Subscribe to get special offers and travel tips
              </p>
              <div className="position-relative">
                <input
                  type="email"
                  className="form-control border-0 py-3 px-4"
                  placeholder="Enter your email"
                  style={{
                    borderRadius: '50px',
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    color: 'white',
                    border: '1px solid rgba(255,255,255,0.2)'
                  }}
                />
                <button 
                  className="btn position-absolute end-0 top-50 translate-middle-y border-0 fw-semibold"
                  style={{
                    backgroundColor: '#3eb489',
                    color: 'white',
                    borderRadius: '50px',
                    padding: '10px 25px',
                    marginRight: '4px',
                    fontSize: '14px'
                  }}
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <hr className="my-4 opacity-25" />
          
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              <p className="mb-0 opacity-50">
                © 2025 TrueNorth Vacations. All Rights Reserved.
              </p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <a href="#" className="text-decoration-none opacity-50 me-3" style={{ color: 'white' }}>Privacy Policy</a>
              <a href="#" className="text-decoration-none opacity-50 me-3" style={{ color: 'white' }}>Terms of Service</a>
              <a href="#" className="text-decoration-none opacity-50" style={{ color: 'white' }}>Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;