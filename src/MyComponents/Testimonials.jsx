import React, { useState, useEffect } from 'react';

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Ahmed',
      location: 'Karachi',
      image: 'https://i.pravatar.cc/150?img=1',
      rating: 5,
      text: 'Our trip to Hunza Valley was absolutely magical! TrueNorth made everything seamless from booking to the actual tour. Highly recommended!',
      trip: 'Hunza Valley Tour'
    },
    {
      id: 2,
      name: 'Ali Hassan',
      location: 'Lahore',
      image: 'https://i.pravatar.cc/150?img=12',
      rating: 5,
      text: 'The K2 Base Camp trek was a dream come true. Professional guides, excellent organization, and breathtaking views. Worth every penny!',
      trip: 'K2 Base Camp Trek'
    },
    {
      id: 3,
      name: 'Fatima Khan',
      location: 'Islamabad',
      image: 'https://i.pravatar.cc/150?img=5',
      rating: 5,
      text: 'Family-friendly tour to Swat Valley exceeded our expectations. Kids had a blast and we created memories for a lifetime!',
      trip: 'Swat Valley Family Package'
    },
    {
      id: 4,
      name: 'Hamza Malik',
      location: 'Rawalpindi',
      image: 'https://i.pravatar.cc/150?img=8',
      rating: 5,
      text: 'Fairy Meadows was like paradise on earth. The camping experience and views of Nanga Parbat were spectacular!',
      trip: 'Fairy Meadows Adventure'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const current = testimonials[currentIndex];

  return (
    <section className="py-5" style={{ background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold mb-3">What Our Travelers Say</h2>
          <p className="lead text-muted">Real experiences from real people</p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div 
              className="card border-0 shadow-lg p-5 position-relative overflow-hidden"
              style={{
                borderRadius: '30px',
                background: 'white',
                minHeight: '400px'
              }}
            >
              {/* Quote Icon */}
              <div 
                className="position-absolute"
                style={{
                  top: '-20px',
                  left: '30px',
                  fontSize: '120px',
                  color: 'rgba(62, 180, 137, 0.1)',
                  fontFamily: 'Georgia, serif'
                }}
              >
                "
              </div>

              {/* Avatar */}
              <div className="text-center mb-4">
                <div className="position-relative d-inline-block">
                  <img
                    src={current.image}
                    alt={current.name}
                    className="rounded-circle"
                    style={{
                      width: '100px',
                      height: '100px',
                      objectFit: 'cover',
                      border: '5px solid #3eb489',
                      animation: 'fadeIn 0.5s ease'
                    }}
                  />
                  <div 
                    className="position-absolute bottom-0 end-0 rounded-circle bg-success d-flex align-items-center justify-content-center"
                    style={{
                      width: '30px',
                      height: '30px',
                      border: '3px solid white'
                    }}
                  >
                    ✓
                  </div>
                </div>
              </div>

              {/* Rating Stars */}
              <div className="text-center mb-3">
                {[...Array(current.rating)].map((_, i) => (
                  <span 
                    key={i} 
                    style={{ 
                      color: '#f39c12', 
                      fontSize: '24px',
                      animation: `starPop 0.3s ease ${i * 0.1}s`
                    }}
                  >
                    ⭐
                  </span>
                ))}
              </div>

              {/* Testimonial Text */}
              <p 
                className="text-center fs-5 mb-4 position-relative"
                style={{
                  lineHeight: '1.8',
                  color: '#555',
                  animation: 'fadeIn 0.5s ease'
                }}
              >
                {current.text}
              </p>

              {/* Author Info */}
              <div className="text-center" style={{ animation: 'fadeIn 0.7s ease' }}>
                <h5 className="fw-bold mb-1">{current.name}</h5>
                <p className="text-muted mb-1">📍 {current.location}</p>
                <span 
                  className="badge px-3 py-2"
                  style={{
                    background: 'linear-gradient(135deg, #3eb489, #2d9770)',
                    color: 'white',
                    borderRadius: '50px'
                  }}
                >
                  {current.trip}
                </span>
              </div>

              {/* Navigation Dots */}
              <div className="d-flex justify-content-center gap-2 mt-4">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className="btn p-0 rounded-circle"
                    style={{
                      width: '12px',
                      height: '12px',
                      background: index === currentIndex ? '#3eb489' : '#ddd',
                      border: 'none',
                      transition: 'all 0.3s ease'
                    }}
                    onClick={() => setCurrentIndex(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes starPop {
          0% {
            transform: scale(0);
          }
          50% {
            transform: scale(1.3);
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
}

export default Testimonials;