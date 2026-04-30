import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Forthcoming() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const trips = [
    {
      id: 1,
      destination: 'Hunza Spring Blossom',
      duration: '5 Days',
      nights: 4,
      spots: ['Karimabad', 'Altit Fort', 'Eagle Nest'],
      price: 45000,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
      startDate: 'March 15, 2026',
      difficulty: 'Easy',
      groupSize: '8-12 people',
      availability: 'Limited',
      tag: 'Best Seller'
    },
    {
      id: 2,
      destination: 'Swat Valley Explorer',
      duration: '6 Days',
      nights: 5,
      spots: ['Malam Jabba', 'Mingora', 'Kalam Valley'],
      price: 52000,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
      startDate: 'April 10, 2026',
      difficulty: 'Moderate',
      groupSize: '10-15 people',
      availability: 'Available',
      tag: 'Popular'
    },
    {
      id: 3,
      destination: 'Skardu Adventure',
      duration: '7 Days',
      nights: 6,
      spots: ['Shangrila Lake', 'Deosai Plains', 'Shigar Fort'],
      price: 58000,
      image: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800',
      startDate: 'May 5, 2026',
      difficulty: 'Moderate',
      groupSize: '6-10 people',
      availability: 'Filling Fast',
      tag: 'New'
    },
    {
      id: 4,
      destination: 'Fairy Meadows Trek',
      duration: '5 Days',
      nights: 4,
      spots: ['Raikot Bridge', 'Fairy Meadows', 'Nanga Parbat Base'],
      price: 48000,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
      startDate: 'June 1, 2026',
      difficulty: 'Challenging',
      groupSize: '6-8 people',
      availability: 'Available',
      tag: 'Adventure'
    }
  ];

  const getAvailabilityColor = (availability) => {
    switch(availability) {
      case 'Limited': return '#e74c3c';
      case 'Filling Fast': return '#f39c12';
      case 'Available': return '#3eb489';
      default: return '#6b7280';
    }
  };

  const getDifficultyIcon = (difficulty) => {
    switch(difficulty) {
      case 'Easy': return '●';
      case 'Moderate': return '●●';
      case 'Challenging': return '●●●';
      default: return '●';
    }
  };

  return (
    <section className="py-5 position-relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #ffffff 0%, #f8fafb 100%)' }}>
      {/* Background Decorations */}
      <div className="position-absolute" style={{
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(62, 180, 137, 0.08) 0%, transparent 70%)',
        top: '-100px',
        right: '-100px',
        filter: 'blur(60px)'
      }}></div>
      
      <div className="position-absolute" style={{
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(62, 180, 137, 0.06) 0%, transparent 70%)',
        bottom: '-100px',
        left: '-100px',
        filter: 'blur(60px)'
      }}></div>

      <div className="container position-relative" style={{ zIndex: 2 }}>
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
              Upcoming Tours
            </span>
          </div>
          
            
    <h2 className="fw-bold mb-3" style={{
        fontSize: 'clamp(2rem, 4vw, 3rem)',
        color: '#1a1a1a',
        letterSpacing: '-1px'
         }}>
            Forthcoming <span style={{ color: '#3eb489' }}>Adventures</span>
    </h2>
  
        <div className="mx-auto" style={{
        width: '80px',
        height: '4px',
        background: 'linear-gradient(90deg, #3eb489 0%, #2d9770 100%)',
        borderRadius: '10px'
        }}></div>
        </div>

        {/* Tours Grid */}
        <div className="row g-4 mb-5">
          {trips.map((trip) => (
            <div key={trip.id} className="col-lg-6">
              <div 
                className="card border-0 overflow-hidden h-100"
                onMouseEnter={() => setHoveredCard(trip.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  borderRadius: '20px',
                  boxShadow: hoveredCard === trip.id 
                    ? '0 20px 60px rgba(62, 180, 137, 0.15)' 
                    : '0 4px 20px rgba(0,0,0,0.08)',
                  transform: hoveredCard === trip.id ? 'translateY(-8px)' : 'translateY(0)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer'
                }}
              >
                <div className="row g-0 h-100">
                  {/* Image Side */}
                  <div className="col-md-5 position-relative">
                    <div className="position-relative h-100" style={{ minHeight: '300px' }}>
                      <img
                        src={trip.image}
                        alt={trip.destination}
                        className="w-100 h-100"
                        style={{ 
                          objectFit: 'cover',
                          transform: hoveredCard === trip.id ? 'scale(1.05)' : 'scale(1)',
                          transition: 'transform 0.5s ease'
                        }}
                      />
                      
                      {/* Gradient Overlay */}
                      <div 
                        className="position-absolute w-100 h-100 top-0 start-0"
                        style={{
                          background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.7) 100%)'
                        }}
                      />

                      {/* Tag Badge */}
                      <div className="position-absolute top-0 start-0 m-3">
                        <span 
                          className="badge px-3 py-2"
                          style={{
                            background: 'rgba(255, 255, 255, 0.95)',
                            color: '#3eb489',
                            fontSize: '12px',
                            fontWeight: '700',
                            borderRadius: '50px',
                            backdropFilter: 'blur(10px)'
                          }}
                        >
                          {trip.tag}
                        </span>
                      </div>

                      {/* Price Badge */}
                      <div className="position-absolute bottom-0 start-0 m-3 text-white">
                        <div className="d-flex align-items-baseline gap-1">
                          <span className="small opacity-75">From</span>
                          <h4 className="fw-bold mb-0">PKR {trip.price.toLocaleString()}</h4>
                        </div>
                        <div className="small opacity-75">per person</div>
                      </div>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="col-md-7">
                    <div className="card-body p-4 d-flex flex-column h-100">
                      {/* Header */}
                      <div className="mb-3">
                        <h4 className="fw-bold mb-2" style={{ color: '#1a1a1a', fontSize: '1.35rem' }}>
                          {trip.destination}
                        </h4>
                        
                        {/* Meta Info */}
                        <div className="d-flex flex-wrap gap-3 mb-3">
                          <div className="d-flex align-items-center gap-1" style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                              <line x1="16" y1="2" x2="16" y2="6"></line>
                              <line x1="8" y1="2" x2="8" y2="6"></line>
                              <line x1="3" y1="10" x2="21" y2="10"></line>
                            </svg>
                            <span>{trip.duration} / {trip.nights}N</span>
                          </div>
                          
                          <div className="d-flex align-items-center gap-1" style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                              <circle cx="9" cy="7" r="4"></circle>
                              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                            </svg>
                            <span>{trip.groupSize}</span>
                          </div>

                          <div className="d-flex align-items-center gap-1" style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                            </svg>
                            <span>{trip.difficulty}</span>
                            <span style={{ color: '#3eb489', fontSize: '10px', letterSpacing: '1px' }}>
                              {getDifficultyIcon(trip.difficulty)}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Key Spots */}
                      <div className="mb-3">
                        <div className="small text-muted mb-2 fw-semibold">Key Destinations:</div>
                        <div className="d-flex flex-wrap gap-2">
                          {trip.spots.map((spot, index) => (
                            <span 
                              key={index}
                              className="badge px-3 py-2"
                              style={{
                                background: '#f0fdf7',
                                color: '#3eb489',
                                fontWeight: '500',
                                fontSize: '12px',
                                borderRadius: '8px'
                              }}
                            >
                              {spot}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Start Date & Availability */}
                      <div className="mb-4">
                        <div className="d-flex justify-content-between align-items-center p-3 rounded-3" style={{ background: '#f8fafb' }}>
                          <div>
                            <div className="small text-muted mb-1">Starts On</div>
                            <div className="fw-semibold" style={{ color: '#1a1a1a', fontSize: '0.9rem' }}>
                              {trip.startDate}
                            </div>
                          </div>
                          <div className="text-end">
                            <div className="small text-muted mb-1">Status</div>
                            <span 
                              className="badge px-3 py-2"
                              style={{
                                background: `${getAvailabilityColor(trip.availability)}15`,
                                color: getAvailabilityColor(trip.availability),
                                fontWeight: '600',
                                fontSize: '11px',
                                borderRadius: '50px'
                              }}
                            >
                              ● {trip.availability}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="mt-auto">
                        <div className="row g-2">
                          <div className="col-7">
                            <button
                              className="btn w-100 py-2 border-0 fw-semibold"
                              style={{
                                background: hoveredCard === trip.id 
                                  ? 'linear-gradient(135deg, #3eb489 0%, #2d9770 100%)'
                                  : '#3eb489',
                                color: 'white',
                                borderRadius: '10px',
                                fontSize: '0.9rem',
                                transition: 'all 0.3s ease',
                                boxShadow: hoveredCard === trip.id ? '0 8px 20px rgba(62, 180, 137, 0.3)' : 'none'
                              }}
                            >
                              Book Now
                            </button>
                          </div>
                          <div className="col-5">
                            <button
                              className="btn w-100 py-2 fw-semibold"
                              style={{
                                background: 'white',
                                color: '#3eb489',
                                border: '2px solid #e8e8e8',
                                borderRadius: '10px',
                                fontSize: '0.9rem',
                                transition: 'all 0.3s ease'
                              }}
                              onMouseEnter={(e) => {
                                e.target.style.borderColor = '#3eb489';
                                e.target.style.background = '#f0fdf7';
                              }}
                              onMouseLeave={(e) => {
                                e.target.style.borderColor = '#e8e8e8';
                                e.target.style.background = 'white';
                              }}
                            >
                              Details
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="row g-4 mb-5">
          {[
            {
              icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
              ),
              title: 'All-Inclusive Packages',
              description: 'Accommodation, meals, transport & guides included'
            },
            {
              icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              ),
              title: 'Safety First',
              description: 'Comprehensive insurance & emergency support'
            },
            {
              icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              ),
              title: 'Small Group Tours',
              description: 'Intimate groups for personalized experiences'
            },
            {
              icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              ),
              title: '24/7 Support',
              description: 'Round-the-clock assistance during your trip'
            }
          ].map((feature, index) => (
            <div key={index} className="col-lg-3 col-md-6">
              <div 
                className="text-center p-4 h-100 rounded-4"
                style={{
                  background: 'white',
                  border: '1px solid #e8e8e8',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#3eb489';
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(62, 180, 137, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e8e8e8';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div className="mb-3 d-inline-flex align-items-center justify-content-center" style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '16px',
                  background: 'rgba(62, 180, 137, 0.1)',
                  color: '#3eb489'
                }}>
                  {feature.icon}
                </div>
                <h6 className="fw-bold mb-2" style={{ color: '#1a1a1a' }}>
                  {feature.title}
                </h6>
                <p className="text-muted mb-0 small">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div 
              className="text-center p-5 rounded-4"
              style={{
                background: 'linear-gradient(135deg, #f8fafb 0%, #ffffff 100%)',
                border: '2px dashed #e8e8e8'
              }}
            >
              <div className="mb-3">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#3eb489" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <h4 className="fw-bold mb-3" style={{ color: '#1a1a1a' }}>
                Can't Find Your Perfect Trip?
              </h4>
              <p className="text-muted mb-4 mx-auto" style={{ maxWidth: '500px' }}>
                Let us create a custom itinerary tailored to your preferences, budget, and schedule
              </p>
              <Link
                to="/contact"
                className="btn btn-lg px-5 py-3 border-0 d-inline-flex align-items-center gap-2"
                style={{
                  background: 'linear-gradient(135deg, #3eb489 0%, #2d9770 100%)',
                  color: 'white',
                  borderRadius: '50px',
                  fontWeight: '600',
                  fontSize: '1rem',
                  boxShadow: '0 10px 30px rgba(62, 180, 137, 0.3)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-3px)';
                  e.target.style.boxShadow = '0 15px 40px rgba(62, 180, 137, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 10px 30px rgba(62, 180, 137, 0.3)';
                }}
              >
                Plan Custom Trip
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Forthcoming;