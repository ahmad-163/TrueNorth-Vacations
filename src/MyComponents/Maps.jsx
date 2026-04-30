import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Maps() {
  const [hoveredRegion, setHoveredRegion] = useState(null);

  const regions = [
    {
      id: 1,
      name: 'Gilgit-Baltistan',
      places: 15,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
      highlights: ['Hunza Valley', 'Skardu', 'Fairy Meadows']
    },
    {
      id: 2,
      name: 'Khyber Pakhtunkhwa',
      places: 12,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
      highlights: ['Swat Valley', 'Naran Kaghan', 'Chitral']
    },
    {
      id: 3,
      name: 'Azad Kashmir',
      places: 8,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
      highlights: ['Neelum Valley', 'Ratti Gali', 'Arang Kel']
    },
    {
      id: 4,
      name: 'Punjab',
      places: 6,
      image: 'https://images.unsplash.com/photo-1590498815925-8e08b0c336b7?w=400',
      highlights: ['Lahore', 'Murree', 'Cholistan']
    }
  ];

  return (
    <section className="py-5" style={{ background: '#1a1a2e' }}>
      <div className="container">
        <div className="text-center text-white mb-5">
          <h2 className="display-4 fw-bold mb-3">Explore by Region</h2>
          <p className="lead">Discover destinations across Pakistan</p>
        </div>

        <div className="row g-4">
          {regions.map((region) => (
            <div key={region.id} className="col-lg-3 col-md-6">
              <Link 
                to={`/region/${region.id}`}
                className="text-decoration-none"
                onMouseEnter={() => setHoveredRegion(region.id)}
                onMouseLeave={() => setHoveredRegion(null)}
              >
                <div 
                  className="card border-0 overflow-hidden h-100"
                  style={{
                    borderRadius: '20px',
                    transform: hoveredRegion === region.id ? 'translateY(-10px) scale(1.05)' : 'translateY(0) scale(1)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    boxShadow: hoveredRegion === region.id 
                      ? '0 20px 60px rgba(62, 180, 137, 0.3)' 
                      : '0 5px 20px rgba(0,0,0,0.2)'
                  }}
                >
                  <div className="position-relative" style={{ height: '250px' }}>
                    <img
                      src={region.image}
                      alt={region.name}
                      className="w-100 h-100"
                      style={{ 
                        objectFit: 'cover',
                        transform: hoveredRegion === region.id ? 'scale(1.1)' : 'scale(1)',
                        transition: 'transform 0.5s ease'
                      }}
                    />
                    
                    <div 
                      className="position-absolute bottom-0 w-100 p-4 text-white"
                      style={{
                        background: 'linear-gradient(transparent, rgba(0,0,0,0.9))',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end'
                      }}
                    >
                      <span 
                        className="badge mb-2 align-self-start"
                        style={{
                          background: '#3eb489',
                          padding: '6px 12px',
                          fontSize: '12px'
                        }}
                      >
                        {region.places} Places
                      </span>
                      
                      <h4 className="fw-bold mb-3">{region.name}</h4>
                      
                      <div className="d-flex flex-wrap gap-2 mb-2">
                        {region.highlights.map((highlight, i) => (
                          <span 
                            key={i}
                            className="small"
                            style={{
                              background: 'rgba(255, 255, 255, 0.2)',
                              padding: '4px 10px',
                              borderRadius: '50px',
                              backdropFilter: 'blur(10px)'
                            }}
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>

                      <div className="mt-2">
                        <span className="fw-semibold">
                          Explore →
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Maps;