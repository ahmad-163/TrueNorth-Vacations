import React, { useState } from 'react';

function SigDest(props) {
  const [hoveredCard, setHoveredCard] = useState(null);

  const destinations = [
    { id: 1, name: 'Rakaposhi', image: props.image1, description: 'Majestic 7,788m peak in the Karakoram range', tag: 'Mountain Peak' },
    { id: 2, name: 'Fairy Meadows', image: props.image2, description: 'Gateway to Nanga Parbat base camp', tag: 'Alpine Meadow' },
    { id: 3, name: 'Neelum Valley', image: props.image3, description: 'Emerald green valley of Kashmir', tag: 'Valley' }
  ];

  return (
    <section className="py-5 position-relative" style={{ background: 'linear-gradient(180deg, #f8fafb 0%, #ffffff 100%)' }}>
      {/* Decorative Elements */}
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{ opacity: 0.05 }}>
        <div className="position-absolute rounded-circle" style={{ 
          width: '300px', 
          height: '300px', 
          background: '#3eb489', 
          top: '50px', 
          left: '-100px',
          filter: 'blur(80px)'
        }}></div>
      </div>

      <div className="container position-relative" style={{ zIndex: 2 }}>
        {/* Section Header */}
        <div className="text-center mb-5">
          <span className="badge px-4 py-2 mb-3" style={{
            background: '#3eb489',
            color: 'white',
            fontSize: '13px',
            fontWeight: '600',
            letterSpacing: '2px',
            borderRadius: '50px',
            textTransform: 'uppercase'
          }}>
            🌟 Featured Locations
          </span>
          
          <h2 className="fw-bold mb-3" style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            color: '#1a1a1a',
            letterSpacing: '-1px'
          }}>
            Significant <span style={{ color: '#3eb489' }}>Destinations</span>
          </h2>
          
          <div className="mx-auto" style={{
            width: '80px',
            height: '4px',
            background: 'linear-gradient(90deg, #3eb489 0%, #2d9770 100%)',
            borderRadius: '10px'
          }}></div>
        </div>

        {/* Cards Grid */}
        <div className="row g-4">
          {destinations.map((dest) => (
            <div key={dest.id} className="col-md-4">
              <div 
                className="card border-0 h-100 overflow-hidden position-relative"
                onMouseEnter={() => setHoveredCard(dest.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  borderRadius: '24px',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  transform: hoveredCard === dest.id ? 'translateY(-15px) scale(1.02)' : 'none',
                  boxShadow: hoveredCard === dest.id 
                    ? '0 30px 60px rgba(62, 180, 137, 0.25)' 
                    : '0 10px 30px rgba(0,0,0,0.08)',
                  cursor: 'pointer'
                }}
              >
                {/* Image Container */}
                <div className="position-relative overflow-hidden" style={{ height: '350px' }}>
                  <img 
                    src={dest.image} 
                    alt={dest.name}
                    className="w-100 h-100"
                    style={{
                      objectFit: 'cover',
                      transition: 'all 0.4s ease',
                      transform: hoveredCard === dest.id ? 'scale(1.15)' : 'scale(1)',
                      filter: hoveredCard === dest.id ? 'brightness(1.1)' : 'brightness(1)'
                    }}
                  />
                  
                  {/* Gradient Overlay */}
                  <div 
                    className="position-absolute bottom-0 w-100" 
                    style={{
                      height: '60%',
                      background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)',
                      transition: 'all 0.3s ease'
                    }}
                  ></div>

                  {/* Tag Badge */}
                  <div className="position-absolute top-0 start-0 m-3">
                    <span className="badge px-3 py-2" style={{
                      background: 'rgba(62, 180, 137, 0.95)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: '50px',
                      fontSize: '11px',
                      fontWeight: '600',
                      letterSpacing: '0.5px'
                    }}>
                      {dest.tag}
                    </span>
                  </div>

                  {/* Content Overlay */}
                  <div className="position-absolute bottom-0 w-100 p-4 text-white">
                    <h4 className="fw-bold mb-2" style={{ fontSize: '24px' }}>
                      {dest.name}
                    </h4>
                    <p className="mb-3 small" style={{ opacity: 0.9 }}>
                      {dest.description}
                    </p>
                    <button 
                      className="btn btn-sm px-4 py-2 border-0"
                      style={{
                        background: hoveredCard === dest.id ? '#3eb489' : 'rgba(255,255,255,0.2)',
                        color: 'white',
                        backdropFilter: 'blur(10px)',
                        borderRadius: '50px',
                        fontSize: '13px',
                        fontWeight: '600',
                        transition: 'all 0.3s ease',
                        opacity: hoveredCard === dest.id ? 1 : 0.8
                      }}
                    >
                      Explore Now →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SigDest;