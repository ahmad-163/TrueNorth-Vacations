import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function TravelWithUS() {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      id: 1,
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline>
          <polyline points="7.5 19.79 7.5 14.6 3 12"></polyline>
          <polyline points="21 12 16.5 14.6 16.5 19.79"></polyline>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
          <line x1="12" y1="22.08" x2="12" y2="12"></line>
        </svg>
      ),
      title: 'Flight Services',
      description: 'Competitive airfare rates and flexible booking options for domestic and international flights',
      features: ['Best Price Guarantee', 'Flexible Dates', '24/7 Support']
    },
    {
      id: 2,
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
      ),
      title: 'Premium Accommodations',
      description: 'Hand-picked hotels and resorts offering comfort, luxury, and authentic local experiences',
      features: ['Verified Properties', 'Best Locations', 'Quality Assured']
    },
    {
      id: 3,
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="3" width="15" height="13"></rect>
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
          <circle cx="5.5" cy="18.5" r="2.5"></circle>
          <circle cx="18.5" cy="18.5" r="2.5"></circle>
        </svg>
      ),
      title: 'Private Transportation',
      description: 'Comfortable and safe travel with professional drivers in modern, air-conditioned vehicles',
      features: ['Luxury Vehicles', 'Expert Drivers', 'GPS Tracked']
    },
    {
      id: 4,
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
      title: 'Expert Guides',
      description: 'Knowledgeable local guides providing authentic insights and ensuring memorable experiences',
      features: ['Certified Guides', 'Local Expertise', 'Multilingual']
    }
  ];

  return (
    <section className="py-5 position-relative overflow-hidden" style={{ background: '#fafbfc' }}>
      {/* Subtle Background Pattern */}
      <div className="position-absolute w-100 h-100 top-0 start-0" style={{ opacity: 0.03 }}>
        <div style={{
          backgroundImage: 'radial-gradient(circle, #3eb489 1px, transparent 1px)',
          backgroundSize: '30px 30px',
          width: '100%',
          height: '100%'
        }}></div>
      </div>

      <div className="container position-relative">
        {/* Section Header */}
        <div className="text-center mb-5 pb-3">
          <div className="d-inline-block mb-3">
            <span className="badge px-4 py-2" style={{
              background: 'rgba(62, 180, 137, 0.1)',
              color: '#3eb489',
              fontSize: '13px',
              fontWeight: '600',
              letterSpacing: '1.5px',
              borderRadius: '50px',
              textTransform: 'uppercase',
              border: '1px solid rgba(62, 180, 137, 0.2)'
            }}>
              Our Services
            </span>
          </div>
          
            
  <h2 className="fw-bold mb-3" style={{
    fontSize: 'clamp(2rem, 4vw, 3rem)',
    color: '#1a1a1a',
    letterSpacing: '-1px'
  }}>
    Why <span style={{ color: '#3eb489' }}>Travel with us?</span>
  </h2>
  
  <div className="mx-auto" style={{
    width: '80px',
    height: '4px',
    background: 'linear-gradient(90deg, #3eb489 0%, #2d9770 100%)',
    borderRadius: '10px'
  }}></div>
</div>

        {/* Services Grid */}
        <div className="row g-4 mb-5">
          {services.map((service) => (
            <div key={service.id} className="col-lg-3 col-md-6">
              <div 
                className="card border-0 h-100 position-relative"
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
                style={{
                  borderRadius: '16px',
                  background: 'white',
                  boxShadow: hoveredService === service.id 
                    ? '0 20px 60px rgba(62, 180, 137, 0.15)' 
                    : '0 4px 20px rgba(0,0,0,0.06)',
                  transform: hoveredService === service.id ? 'translateY(-8px)' : 'none',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                  overflow: 'hidden'
                }}
              >
                {/* Top Border Accent */}
                <div 
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: hoveredService === service.id 
                      ? 'linear-gradient(90deg, #3eb489 0%, #2d9770 100%)' 
                      : 'transparent',
                    transition: 'all 0.3s ease'
                  }}
                />

                <div className="card-body p-4">
                  {/* Icon Container */}
                  <div 
                    className="mb-4 d-inline-flex align-items-center justify-content-center"
                    style={{
                      width: '70px',
                      height: '70px',
                      borderRadius: '16px',
                      background: hoveredService === service.id 
                        ? 'linear-gradient(135deg, #3eb489 0%, #2d9770 100%)' 
                        : 'rgba(62, 180, 137, 0.08)',
                      color: hoveredService === service.id ? 'white' : '#3eb489',
                      transition: 'all 0.4s ease',
                      transform: hoveredService === service.id ? 'scale(1.05)' : 'scale(1)'
                    }}
                  >
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h5 
                    className="fw-bold mb-3"
                    style={{
                      color: '#1a1a1a',
                      fontSize: '1.15rem',
                      letterSpacing: '-0.3px'
                    }}
                  >
                    {service.title}
                  </h5>

                  {/* Description */}
                  <p 
                    className="mb-4"
                    style={{
                      color: '#6b7280',
                      fontSize: '0.95rem',
                      lineHeight: '1.6'
                    }}
                  >
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="d-flex flex-column gap-2">
                    {service.features.map((feature, index) => (
                      <div 
                        key={index}
                        className="d-flex align-items-center gap-2"
                        style={{
                          fontSize: '0.875rem',
                          color: '#6b7280'
                        }}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3eb489" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="row g-4 mb-5 py-4">
          {[
            { number: '500+', label: 'Happy Travelers' },
            { number: '50+', label: 'Destinations' },
            { number: '4.9★', label: 'Average Rating' },
            { number: '1000+', label: 'Tours Completed' }
          ].map((stat, index) => (
            <div key={index} className="col-lg-3 col-6">
              <div className="text-center">
                <h3 className="fw-bold mb-2" style={{ 
                  fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                  color: '#3eb489',
                  fontFamily: '"Inter", sans-serif'
                }}>
                  {stat.number}
                </h3>
                <p className="mb-0 text-muted" style={{ fontSize: '0.95rem' }}>
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div 
              className="p-5 rounded-4 text-center position-relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #3eb489 0%, #2d9770 100%)',
                boxShadow: '0 20px 60px rgba(62, 180, 137, 0.25)'
              }}
            >
              {/* Background Pattern */}
              <div className="position-absolute w-100 h-100 top-0 start-0" style={{ opacity: 0.1 }}>
                <div style={{
                  backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                  backgroundSize: '20px 20px',
                  width: '100%',
                  height: '100%'
                }}></div>
              </div>

              <div className="position-relative">
                <h3 className="fw-bold mb-3 text-white" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>
                  Ready to Start Your Adventure?
                </h3>
                <p className="text-white mb-4 mx-auto opacity-90" style={{ maxWidth: '600px', fontSize: '1.05rem' }}>
                  Join thousands of satisfied travelers and discover Pakistan's breathtaking beauty with our expert guidance
                </p>
                
                <div className="d-flex flex-wrap gap-3 justify-content-center">
                  <Link
                    to="/popular"
                    className="btn btn-lg px-5 py-3 border-0 d-inline-flex align-items-center gap-2"
                    style={{
                      background: 'white',
                      color: '#3eb489',
                      borderRadius: '50px',
                      fontWeight: '600',
                      fontSize: '1rem',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'translateY(-3px)';
                      e.target.style.boxShadow = '0 15px 40px rgba(0,0,0,0.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = '0 10px 30px rgba(0,0,0,0.15)';
                    }}
                  >
                    Explore Destinations
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </Link>

                  <Link
                    to="/deals"
                    className="btn btn-lg btn-outline-light px-5 py-3 d-inline-flex align-items-center gap-2"
                    style={{
                      borderRadius: '50px',
                      fontWeight: '600',
                      fontSize: '1rem',
                      borderWidth: '2px',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = 'white';
                      e.target.style.color = '#3eb489';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'transparent';
                      e.target.style.color = 'white';
                    }}
                  >
                    View Current Deals
                  </Link>
                </div>

                {/* Trust Indicators */}
                <div className="d-flex flex-wrap gap-4 justify-content-center mt-4 pt-3">
                  <div className="d-flex align-items-center gap-2 text-white">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                    <span className="small fw-semibold">Secure Booking</span>
                  </div>
                  <div className="d-flex align-items-center gap-2 text-white">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <span className="small fw-semibold">24/7 Support</span>
                  </div>
                  <div className="d-flex align-items-center gap-2 text-white">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    <span className="small fw-semibold">Expert Guides</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TravelWithUS;