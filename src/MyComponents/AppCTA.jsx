import React, { useState } from 'react';

function AppCTA() {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      ),
      title: 'One-Tap Booking',
      description: 'Book your dream tour in seconds with our streamlined booking flow'
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
      ),
      title: 'Live Tracking',
      description: 'Track your tour guide and transport in real-time with GPS'
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 6v6l4 2"></path>
        </svg>
      ),
      title: 'Smart Notifications',
      description: 'Get timely updates about weather, traffic, and tour changes'
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="12" y1="1" x2="12" y2="23"></line>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
        </svg>
      ),
      title: 'Exclusive Deals',
      description: 'Access mobile-only discounts and flash sale notifications'
    }
  ];

  const screenshots = [
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=600',
    'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=300&h=600',
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=600'
  ];

  return (
    <section 
      className="position-relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #3eb489 0%, #0b5351 100%)',
        minHeight: '700px'
      }}
    >
      {/* Animated Grid Pattern */}
      <div className="position-absolute w-100 h-100 top-0 start-0" style={{ opacity: 0.08 }}>
        <div style={{
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          width: '100%',
          height: '100%'
        }}></div>
      </div>

      {/* Decorative Circles */}
      <div className="position-absolute" style={{ top: '-100px', right: '-100px', opacity: 0.1 }}>
        <div 
          className="rounded-circle"
          style={{
            width: '400px',
            height: '400px',
            background: 'white',
            filter: 'blur(80px)'
          }}
        />
      </div>
      
      <div className="position-absolute" style={{ bottom: '-150px', left: '-150px', opacity: 0.1 }}>
        <div 
          className="rounded-circle"
          style={{
            width: '500px',
            height: '500px',
            background: 'white',
            filter: 'blur(80px)'
          }}
        />
      </div>

      <div className="container position-relative py-5">
        <div className="row align-items-center">
          {/* Left Side - Content */}
          <div className="col-lg-6 text-white mb-5 mb-lg-0">
            {/* Badge */}
            <div className="mb-4">
              <span 
                className="badge px-4 py-2 d-inline-flex align-items-center gap-2"
                style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(10px)',
                  fontSize: '13px',
                  fontWeight: '600',
                  borderRadius: '50px',
                  border: '1px solid rgba(255, 255, 255, 0.3)'
                }}
              >
                <span 
                  className="d-inline-block rounded-circle"
                  style={{
                    width: '8px',
                    height: '8px',
                    background: '#4ade80',
                    animation: 'pulse 2s infinite'
                  }}
                />
                Coming Soon to App Stores
              </span>
            </div>

            <h2 className="mb-4" style={{ 
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: '800',
              lineHeight: '1.1',
              letterSpacing: '-1px'
            }}>
              Your Journey,
              <br />
              <span style={{ 
                background: 'linear-gradient(90deg, #fff, rgba(255,255,255,0.7))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                In Your Pocket
              </span>
            </h2>
            
            <p className="fs-5 mb-5 opacity-90" style={{ lineHeight: '1.7' }}>
              Experience seamless travel planning with our upcoming mobile app. 
              Book tours, manage itineraries, and explore Pakistan—all at your fingertips.
            </p>

            {/* Features List */}
            <div className="mb-5">
              {features.map((feature, i) => (
                <div 
                  key={i}
                  className="mb-3 p-3 rounded-3"
                  onMouseEnter={() => setActiveFeature(i)}
                  style={{
                    background: activeFeature === i ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
                    backdropFilter: activeFeature === i ? 'blur(10px)' : 'none',
                    border: `1px solid ${activeFeature === i ? 'rgba(255, 255, 255, 0.3)' : 'transparent'}`,
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                >
                  <div className="d-flex align-items-start gap-3">
                    <div 
                      className="d-flex align-items-center justify-content-center flex-shrink-0"
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '12px',
                        background: activeFeature === i 
                          ? 'rgba(255, 255, 255, 0.25)' 
                          : 'rgba(255, 255, 255, 0.15)',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      {feature.icon}
                    </div>
                    <div>
                      <h6 className="fw-bold mb-1">{feature.title}</h6>
                      <p className="mb-0 small opacity-75">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* App Store Buttons */}
            <div className="d-flex flex-wrap gap-3 mb-4">
              <button 
                className="btn btn-lg px-4 py-3 d-inline-flex align-items-center gap-3"
                style={{
                  background: 'rgba(255, 255, 255, 0.95)',
                  color: '#1a1a1a',
                  borderRadius: '12px',
                  border: 'none',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-3px)';
                  e.target.style.boxShadow = '0 20px 40px rgba(0,0,0,0.2)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-start">
                  <div className="small fw-semibold opacity-75">Download on</div>
                  <div className="fw-bold">App Store</div>
                </div>
              </button>

              <button 
                className="btn btn-lg px-4 py-3 d-inline-flex align-items-center gap-3"
                style={{
                  background: 'rgba(255, 255, 255, 0.95)',
                  color: '#1a1a1a',
                  borderRadius: '12px',
                  border: 'none',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-3px)';
                  e.target.style.boxShadow = '0 20px 40px rgba(0,0,0,0.2)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z"/>
                </svg>
                <div className="text-start">
                  <div className="small fw-semibold opacity-75">Get it on</div>
                  <div className="fw-bold">Google Play</div>
                </div>
              </button>
            </div>

            {/* Notify Me */}
            <div className="mt-4">
              <p className="small mb-2 opacity-75">Get notified when we launch:</p>
              <div className="d-flex gap-2" style={{ maxWidth: '400px' }}>
                <input
                  type="email"
                  className="form-control email-input"
                  placeholder="Enter your email"
                  style={{
                    background: 'rgba(255, 255, 255, 0.2)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    borderRadius: '10px',
                    color: 'white',
                    padding: '12px 16px'
                  }}
                />
                <button 
                  className="btn fw-semibold px-4"
                  style={{
                    background: 'white',
                    color: '#3eb489',
                    borderRadius: '10px',
                    border: 'none',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = '#f0fdf7';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'white';
                  }}
                >
                  Notify Me
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Phone Mockup with Carousel */}
          <div className="col-lg-6">
            <div className="position-relative">
              {/* Phone Mockup */}
              <div 
                className="position-relative mx-auto"
                style={{
                  width: '320px',
                  animation: 'float 6s ease-in-out infinite'
                }}
              >
                {/* Phone Frame */}
                <div 
                  className="position-relative"
                  style={{
                    width: '320px',
                    height: '650px',
                    background: '#000',
                    borderRadius: '50px',
                    padding: '12px',
                    boxShadow: '0 50px 100px rgba(0, 0, 0, 0.5)'
                  }}
                >
                  {/* Dynamic Island */}
                  <div 
                    className="position-absolute start-50 translate-middle-x"
                    style={{
                      top: '12px',
                      width: '120px',
                      height: '30px',
                      background: '#000',
                      borderRadius: '20px',
                      zIndex: 10
                    }}
                  />

                  {/* Screen */}
                  <div 
                    className="w-100 h-100 overflow-hidden position-relative"
                    style={{
                      borderRadius: '42px',
                      background: 'white'
                    }}
                  >
                    <img
                      src={screenshots[activeFeature % screenshots.length]}
                      alt="App Screenshot"
                      className="w-100 h-100"
                      style={{ 
                        objectFit: 'cover',
                        transition: 'opacity 0.5s ease'
                      }}
                    />
                  </div>
                </div>

                {/* Floating Stats Cards */}
                <div 
                  className="position-absolute"
                  style={{
                    top: '10%',
                    right: '-80px',
                    animation: 'float 4s ease-in-out infinite'
                  }}
                >
                  <div 
                    className="p-3 rounded-4"
                    style={{
                      background: 'white',
                      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.2)',
                      minWidth: '100px'
                    }}
                  >
                    <div className="text-center">
                      <div className="fw-bold mb-1" style={{ fontSize: '1.5rem', color: '#3eb489' }}>4.9</div>
                      <div className="small" style={{ color: '#f59e0b' }}>★★★★★</div>
                      <div className="small fw-semibold mt-1" style={{ color: '#6b7280' }}>App Rating</div>
                    </div>
                  </div>
                </div>

                <div 
                  className="position-absolute"
                  style={{
                    bottom: '15%',
                    left: '-80px',
                    animation: 'float 5s ease-in-out infinite'
                  }}
                >
                  <div 
                    className="p-3 rounded-4"
                    style={{
                      background: 'white',
                      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.2)',
                      minWidth: '100px'
                    }}
                  >
                    <div className="text-center">
                      <div className="fw-bold mb-1" style={{ fontSize: '1.5rem', color: '#3eb489' }}>10K+</div>
                      <div className="small fw-semibold" style={{ color: '#1a1a1a' }}>Downloads</div>
                      <div className="small mt-1" style={{ color: '#6b7280' }}>Pre-orders</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        .email-input::placeholder {
          color: rgba(255, 255, 255, 0.6);
        }

        .email-input:focus {
          outline: none;
          background: rgba(255, 255, 255, 0.25) !important;
          border-color: rgba(255, 255, 255, 0.5) !important;
        }
      `}</style>
    </section>
  );
}

export default AppCTA;