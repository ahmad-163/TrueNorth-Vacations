import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const places = [
    {
      id: 1,
      name: 'Hunza Valley',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
      description: 'The crown jewel of Pakistan',
      rating: 4.9
    },
    {
      id: 2,
      name: 'Skardu',
      image: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800',
      description: 'Gateway to mighty peaks',
      rating: 4.9
    },
    {
      id: 3,
      name: 'Fairy Meadows',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
      description: 'Base of Nanga Parbat',
      rating: 4.8
    },
    {
      id: 4,
      name: 'Neelum Valley',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
      description: 'Paradise on earth',
      rating: 4.9
    }
  ];

  const getCardStyle = (index) => {
    const diff = index - activeIndex;
    const isActive = diff === 0;
    
    return {
      transform: `
        translateX(${diff * 300}px) 
        translateZ(${isActive ? 0 : -200}px) 
        rotateY(${diff * -15}deg)
        scale(${isActive ? 1 : 0.8})
      `,
      opacity: Math.abs(diff) > 2 ? 0 : isActive ? 1 : 0.5,
      zIndex: isActive ? 10 : 5 - Math.abs(diff),
      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
    };
  };

  return (
    <section className="py-5 overflow-hidden" style={{ background: '#f8f9fa' }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold mb-3">Featured Destinations</h2>
          <p className="lead text-muted">Swipe through Pakistan's most beautiful places</p>
        </div>

        <div 
          className="position-relative mx-auto"
          style={{
            height: '500px',
            perspective: '1500px',
            maxWidth: '1200px'
          }}
        >
          <div 
            className="position-absolute w-100 h-100 d-flex align-items-center justify-content-center"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {places.map((place, index) => (
              <div
                key={place.id}
                className="position-absolute card border-0 shadow-lg overflow-hidden"
                style={{
                  width: '350px',
                  height: '450px',
                  borderRadius: '20px',
                  ...getCardStyle(index),
                  cursor: 'pointer'
                }}
                onClick={() => setActiveIndex(index)}
              >
                {/* Image */}
                <div className="position-relative h-100">
                  <img
                    src={place.image}
                    alt={place.name}
                    className="w-100 h-100"
                    style={{ objectFit: 'cover' }}
                  />
                  
                  {/* Gradient Overlay */}
                  <div 
                    className="position-absolute bottom-0 w-100 p-4"
                    style={{
                      background: 'linear-gradient(transparent, rgba(0,0,0,0.9))',
                      height: '60%'
                    }}
                  >
                    <div className="position-absolute bottom-0 start-0 w-100 p-4 text-white">
                      {/* Rating */}
                      <div className="mb-2">
                        <span 
                          className="badge px-3 py-2"
                          style={{
                            background: '#3eb489',
                            fontSize: '14px'
                          }}
                        >
                          ⭐ {place.rating}
                        </span>
                      </div>
                      
                      <h3 className="fw-bold mb-2">{place.name}</h3>
                      <p className="mb-3 opacity-75">{place.description}</p>
                      
                      <Link
                        to={`/place/${place.id}`}
                        className="btn btn-light px-4 py-2 fw-semibold"
                        style={{ borderRadius: '50px' }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        Explore More →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            className="btn btn-lg position-absolute start-0 top-50 translate-middle-y"
            style={{
              background: 'rgba(255, 255, 255, 0.9)',
              borderRadius: '50%',
              width: '60px',
              height: '60px',
              border: 'none',
              boxShadow: '0 5px 20px rgba(0,0,0,0.2)',
              zIndex: 20
            }}
            onClick={() => setActiveIndex((prev) => Math.max(0, prev - 1))}
            disabled={activeIndex === 0}
          >
            ←
          </button>
          
          <button
            className="btn btn-lg position-absolute end-0 top-50 translate-middle-y"
            style={{
              background: 'rgba(255, 255, 255, 0.9)',
              borderRadius: '50%',
              width: '60px',
              height: '60px',
              border: 'none',
              boxShadow: '0 5px 20px rgba(0,0,0,0.2)',
              zIndex: 20
            }}
            onClick={() => setActiveIndex((prev) => Math.min(places.length - 1, prev + 1))}
            disabled={activeIndex === places.length - 1}
          >
            →
          </button>

          {/* Dots Indicator */}
          <div className="position-absolute bottom-0 start-50 translate-middle-x d-flex gap-2 mb-4" style={{ zIndex: 20 }}>
            {places.map((_, index) => (
              <button
                key={index}
                className="btn p-0 rounded-circle"
                style={{
                  width: '12px',
                  height: '12px',
                  background: index === activeIndex ? '#3eb489' : 'rgba(0,0,0,0.3)',
                  border: 'none',
                  transition: 'all 0.3s ease'
                }}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Carousel;