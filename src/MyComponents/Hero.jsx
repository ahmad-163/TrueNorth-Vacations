import React from "react";

function Hero(props) {
  return (
    <section
      className="hero position-relative text-white d-flex align-items-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${props.banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        minHeight: "100vh"
      }}
    >
      {/* Animated Background Overlay */}
      <div className="position-absolute w-100 h-100" style={{ 
        background: 'radial-gradient(circle at 20% 50%, rgba(62, 180, 137, 0.3) 0%, transparent 50%)',
        animation: 'pulse 8s ease-in-out infinite'
      }}></div>

      <div className="container position-relative" style={{ zIndex: 2, marginTop: '80px' }}>
        <div className="row align-items-center">
          <div className="col-lg-8 mx-auto text-center">
            {/* Badge */}
            <span 
              className="badge px-4 py-2 mb-4 d-inline-block"
              style={{
                background: 'rgba(62, 180, 137, 0.9)',
                backdropFilter: 'blur(10px)',
                fontSize: '13px',
                fontWeight: '600',
                letterSpacing: '2px',
                borderRadius: '50px',
                border: '2px solid rgba(255,255,255,0.3)',
                boxShadow: '0 8px 25px rgba(62, 180, 137, 0.4)',
                textTransform: 'uppercase',
                animation: 'fadeInDown 1s ease'
              }}
            >
              ✨ Welcome to TrueNorth Vacations
            </span>

            {/* Main Heading */}
            <h1 
              className="fw-bold mb-4"
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                lineHeight: '1.1',
                letterSpacing: '-2px',
                textShadow: '0 4px 20px rgba(0,0,0,0.5)',
                animation: 'fadeInUp 1s ease 0.2s both'
              }}
            >
              Explore <span style={{ color: '#3eb489' }}>Pakistan's Majestic North</span>
              <br />
              <span style={{ 
                background: 'linear-gradient(135deg, #fff 0%, #3eb489 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Discover Nature & Adventure
              </span>
            </h1>

            {/* Description */}
            <p 
              className="fs-5 mb-5 mx-auto"
              style={{
                maxWidth: '700px',
                lineHeight: '1.8',
                textShadow: '0 2px 10px rgba(0,0,0,0.5)',
                animation: 'fadeInUp 1s ease 0.4s both'
              }}
            >
              Experience the breathtaking mountains, lush valleys, and serene lakes of Northern Pakistan.
              From Hunza to Skardu, we craft unforgettable journeys for adventurers, nature lovers, and families alike.
            </p>

            {/* CTA Buttons */}
            <div 
              className="d-flex gap-3 justify-content-center flex-wrap"
              style={{ animation: 'fadeInUp 1s ease 0.6s both' }}
            >
              <button 
                className="btn btn-lg px-5 py-3 border-0"
                style={{
                  background: '#3eb489',
                  color: 'white',
                  borderRadius: '50px',
                  fontWeight: '600',
                  fontSize: '16px',
                  boxShadow: '0 10px 30px rgba(62, 180, 137, 0.4)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-3px) scale(1.05)';
                  e.target.style.boxShadow = '0 15px 40px rgba(62, 180, 137, 0.6)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0) scale(1)';
                  e.target.style.boxShadow = '0 10px 30px rgba(62, 180, 137, 0.4)';
                }}
              >
                View Tours →
              </button>

              <button 
                className="btn btn-lg px-5 py-3"
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(10px)',
                  color: 'white',
                  border: '2px solid rgba(255,255,255,0.5)',
                  borderRadius: '50px',
                  fontWeight: '600',
                  fontSize: '16px',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(255,255,255,0.2)';
                  e.target.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(255,255,255,0.1)';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="row mt-5 g-4" style={{ animation: 'fadeInUp 1s ease 0.8s both' }}>
              <div className="col-4">
                <div 
                  className="p-3 rounded-4"
                  style={{
                    background: 'rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.2)'
                  }}
                >
                  <h3 className="fw-bold mb-0" style={{ color: '#3eb489' }}>500+</h3>
                  <small>Happy Travelers</small>
                </div>
              </div>
              <div className="col-4">
                <div 
                  className="p-3 rounded-4"
                  style={{
                    background: 'rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.2)'
                  }}
                >
                  <h3 className="fw-bold mb-0" style={{ color: '#3eb489' }}>50+</h3>
                  <small>Destinations</small>
                </div>
              </div>
              <div className="col-4">
                <div 
                  className="p-3 rounded-4"
                  style={{
                    background: 'rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.2)'
                  }}
                >
                  <h3 className="fw-bold mb-0" style={{ color: '#3eb489' }}>4.9★</h3>
                  <small>Rating</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="position-absolute bottom-0 start-50 translate-middle-x mb-5"
        style={{ animation: 'bounce 2s infinite' }}
      >
        <div style={{ fontSize: '2rem', color: 'white', opacity: 0.7 }}>↓</div>
      </div>

      <style>{`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
          60% { transform: translateY(-5px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.8; }
        }
      `}</style>
    </section>
  );
}

export default Hero;