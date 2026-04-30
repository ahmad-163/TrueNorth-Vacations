import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Para() {
  const [hoveredStat, setHoveredStat] = useState(null);

  const stats = [
    {
      id: 1,
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
      ),
      number: '5,000+',
      label: 'Meters High Peaks',
      description: 'Including K2, the second highest mountain in the world'
    },
    {
      id: 2,
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
      ),
      number: '100+',
      label: 'Beautiful Valleys',
      description: 'From Hunza to Swat, each valley tells a unique story'
    },
    {
      id: 3,
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
        </svg>
      ),
      number: '5,000+',
      label: 'Years of History',
      description: 'Rich cultural heritage from ancient civilizations'
    }
  ];

  const features = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      ),
      title: 'Safe Travel',
      description: 'Comprehensive security measures'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
      title: 'Expert Guides',
      description: 'Local knowledge & expertise'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      ),
      title: '24/7 Support',
      description: 'Always here to help you'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      ),
      title: 'Flexible Booking',
      description: 'Easy cancellation policy'
    }
  ];

  return (
    <section className="position-relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #ffffff 0%, #fafbfc 100%)' }}>
      {/* Subtle Background Pattern */}
      <div className="position-absolute w-100 h-100 top-0 start-0" style={{ opacity: 0.03 }}>
        <div style={{
          backgroundImage: 'radial-gradient(circle, #3eb489 1px, transparent 1px)',
          backgroundSize: '30px 30px',
          width: '100%',
          height: '100%'
        }}></div>
      </div>

      <div className="container py-5 position-relative" style={{ zIndex: 2 }}>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            
            {/* Section Header */}
            <div className="text-center mb-5">
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
                  Discover Pakistan
                </span>
              </div>
              
              <h3 className="text-start mb-5 fw-bold position-relative" style={{
  fontSize: '55px',
  color: '#1a1a1a',
  lineHeight: '1.2',
  letterSpacing: '-2px'
}}>
  Discover the North —
  <br />
  <span style={{ color: '#3eb489' }}>Where Adventure Meets Nature</span>
  
  {/* Decorative underline */}
  <div className="mx-auto mt-3" style={{
    width: '120px',
    height: '5px',
    background: 'linear-gradient(90deg, #3eb489 0%, #2d9770 100%)',
    borderRadius: '10px'
  }}></div>
</h3>
            </div>

            {/* Content Section */}
            <div className="row align-items-center mb-5">
              <div className="col-lg-6 mb-4 mb-lg-0">
                <div 
                  className="position-relative p-4 rounded-4"
                  style={{
                    background: 'white',
                    border: '1px solid #e8e8e8',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
                  }}
                >
                  <div 
                    className="position-absolute top-0 start-0 h-100"
                    style={{
                      width: '4px',
                      background: 'linear-gradient(180deg, #3eb489 0%, #2d9770 100%)',
                      borderRadius: '10px 0 0 10px'
                    }}
                  />
                  
                  <div className="ps-3">
                    <p className="mb-4" style={{ 
                      color: '#4a5568',
                      fontSize: '1.05rem',
                      lineHeight: '1.8',
                      textAlign: 'justify'
                    }}>
                      Pakistan is a land where nature, culture, and adventure blend in perfect harmony. 
                      From the majestic peaks of the Karakoram to the lush valleys of Hunza and Swat, 
                      every journey reveals breathtaking beauty and warm hospitality.
                    </p>

                    <p className="mb-0" style={{ 
                      color: '#4a5568',
                      fontSize: '1.05rem',
                      lineHeight: '1.8',
                      textAlign: 'justify'
                    }}>
                      Rich in history and tradition, Pakistan offers travelers unforgettable experiences — 
                      from ancient archaeological sites to serene natural landscapes. The tourism industry 
                      plays a vital role in cultural exchange and economic growth.
                    </p>
                  </div>
                </div>

                {/* External Links */}
                <div className="d-flex flex-wrap gap-3 mt-4">
                  <a 
                    href="https://en.wikipedia.org/wiki/Pakistan" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="d-inline-flex align-items-center gap-2 text-decoration-none px-4 py-2 rounded-3"
                    style={{
                      background: '#f0fdf7',
                      color: '#3eb489',
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      border: '1px solid rgba(62, 180, 137, 0.2)',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = '#3eb489';
                      e.target.style.color = 'white';
                      e.target.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = '#f0fdf7';
                      e.target.style.color = '#3eb489';
                      e.target.style.transform = 'translateY(0)';
                    }}
                  >
                    Learn More About Pakistan
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>

                  <a 
                    href="https://wttc.org/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="d-inline-flex align-items-center gap-2 text-decoration-none px-4 py-2 rounded-3"
                    style={{
                      background: '#f0fdf7',
                      color: '#3eb489',
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      border: '1px solid rgba(62, 180, 137, 0.2)',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = '#3eb489';
                      e.target.style.color = 'white';
                      e.target.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = '#f0fdf7';
                      e.target.style.color = '#3eb489';
                      e.target.style.transform = 'translateY(0)';
                    }}
                  >
                    WTTC Tourism Report
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                </div>
              </div>

              <div className="col-lg-6">
                {/* Features Grid */}
                <div className="row g-3">
                  {features.map((feature, index) => (
                    <div key={index} className="col-6">
                      <div 
                        className="p-3 rounded-3 h-100"
                        style={{
                          background: 'white',
                          border: '1px solid #e8e8e8',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = '#3eb489';
                          e.currentTarget.style.transform = 'translateY(-5px)';
                          e.currentTarget.style.boxShadow = '0 10px 30px rgba(62, 180, 137, 0.15)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = '#e8e8e8';
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                      >
                        <div 
                          className="d-inline-flex align-items-center justify-content-center mb-3"
                          style={{
                            width: '48px',
                            height: '48px',
                            borderRadius: '12px',
                            background: 'rgba(62, 180, 137, 0.1)',
                            color: '#3eb489'
                          }}
                        >
                          {feature.icon}
                        </div>
                        <h6 className="fw-bold mb-1" style={{ fontSize: '0.95rem', color: '#1a1a1a' }}>
                          {feature.title}
                        </h6>
                        <p className="mb-0 text-muted small">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="row g-4 mb-5">
              {stats.map((stat) => (
                <div key={stat.id} className="col-md-4">
                  <div 
                    className="text-center p-4 h-100 rounded-4 position-relative overflow-hidden"
                    onMouseEnter={() => setHoveredStat(stat.id)}
                    onMouseLeave={() => setHoveredStat(null)}
                    style={{
                      background: hoveredStat === stat.id 
                        ? 'linear-gradient(135deg, #3eb489 0%, #2d9770 100%)'
                        : 'white',
                      border: '1px solid #e8e8e8',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      cursor: 'pointer',
                      transform: hoveredStat === stat.id ? 'translateY(-10px) scale(1.02)' : 'translateY(0) scale(1)',
                      boxShadow: hoveredStat === stat.id 
                        ? '0 20px 60px rgba(62, 180, 137, 0.25)' 
                        : '0 5px 20px rgba(0,0,0,0.05)'
                    }}
                  >
                    {/* Icon */}
                    <div 
                      className="mb-3 d-inline-flex align-items-center justify-content-center"
                      style={{
                        width: '80px',
                        height: '80px',
                        borderRadius: '20px',
                        background: hoveredStat === stat.id 
                          ? 'rgba(255, 255, 255, 0.2)'
                          : 'rgba(62, 180, 137, 0.1)',
                        color: hoveredStat === stat.id ? 'white' : '#3eb489',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      {stat.icon}
                    </div>

                    {/* Number */}
                    <h2 
                      className="fw-bold mb-2" 
                      style={{ 
                        color: hoveredStat === stat.id ? 'white' : '#3eb489',
                        fontSize: 'clamp(2rem, 4vw, 3rem)',
                        fontFamily: '"Inter", sans-serif',
                        transition: 'color 0.3s ease'
                      }}
                    >
                      {stat.number}
                    </h2>

                    {/* Label */}
                    <p 
                      className="fw-semibold mb-2" 
                      style={{ 
                        color: hoveredStat === stat.id ? 'white' : '#1a1a1a',
                        fontSize: '1rem',
                        transition: 'color 0.3s ease'
                      }}
                    >
                      {stat.label}
                    </p>

                    {/* Description */}
                    <p 
                      className="mb-0 small"
                      style={{ 
                        color: hoveredStat === stat.id ? 'rgba(255,255,255,0.9)' : '#6b7280',
                        opacity: hoveredStat === stat.id ? 1 : 0.8,
                        transition: 'all 0.3s ease'
                      }}
                    >
                      {stat.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div 
              className="text-center p-5 rounded-4 position-relative overflow-hidden"
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
                  Ready to Start Your Journey?
                </h3>
                <p className="text-white mb-4 mx-auto opacity-90" style={{ maxWidth: '600px', fontSize: '1.05rem' }}>
                  Join thousands of travelers who have discovered the magic of Pakistan's northern regions
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
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </Link>

                  <Link
                    to="/contact"
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
                    Plan Custom Trip
                  </Link>
                </div>

                {/* Trust Indicators */}
                <div className="d-flex flex-wrap gap-4 justify-content-center mt-4 pt-3">
                  <div className="d-flex align-items-center gap-2 text-white">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span className="small fw-semibold">500+ Happy Travelers</span>
                  </div>
                  <div className="d-flex align-items-center gap-2 text-white">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span className="small fw-semibold">Best Price Guarantee</span>
                  </div>
                  <div className="d-flex align-items-center gap-2 text-white">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span className="small fw-semibold">24/7 Support</span>
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

export default Para;