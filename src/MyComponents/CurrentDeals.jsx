import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function CurrentDeals({ limit }) {
  const [hoveredDeal, setHoveredDeal] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [timeLeft, setTimeLeft] = useState({ days: 23, hours: 14, minutes: 32, seconds: 45 });

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const deals = [
    {
      id: 1,
      title: 'Early Bird Special - Hunza Valley',
      originalPrice: 45000,
      discountedPrice: 35000,
      discount: '22%',
      validUntil: 'March 31, 2026',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
      features: ['5 Days Tour', 'Hotel Included', 'All Meals', 'Transport'],
      spotsLeft: 8,
      tag: 'Limited Offer',
      category: 'adventure',
      urgency: 'high'
    },
    {
      id: 2,
      title: 'Weekend Getaway - Naran Kaghan',
      originalPrice: 35000,
      discountedPrice: 28000,
      discount: '20%',
      validUntil: 'April 15, 2026',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
      features: ['3 Days Tour', 'Camping', 'BBQ Dinner', 'Guide'],
      spotsLeft: 12,
      tag: 'Weekend Special',
      category: 'weekend',
      urgency: 'medium'
    },
    {
      id: 3,
      title: 'Summer Adventure - Skardu',
      originalPrice: 52000,
      discountedPrice: 42000,
      discount: '19%',
      validUntil: 'May 10, 2026',
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/39/26/f2/upper-kachura-lake-is.jpg?w=1200&h=700&s=1',
      features: ['6 Days Tour', 'Luxury Stay', 'All Inclusive', 'Photography'],
      spotsLeft: 5,
      tag: 'Hot Deal',
      category: 'luxury',
      urgency: 'high'
    },
    {
      id: 4,
      title: 'Family Package - Swat Valley',
      originalPrice: 42000,
      discountedPrice: 33000,
      discount: '21%',
      validUntil: 'April 30, 2026',
      image: 'https://i.dawn.com/primary/2015/08/55c4a6c8b4bee.jpg',
      features: ['5 Days Tour', 'Family Friendly', 'Kids Activities', 'Safe'],
      spotsLeft: 15,
      tag: 'Family Special',
      category: 'family',
      urgency: 'low'
    },
    {
      id: 5,
      title: 'Adventure Combo - Fairy Meadows + Nanga Parbat',
      originalPrice: 48000,
      discountedPrice: 38000,
      discount: '21%',
      validUntil: 'June 15, 2026',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
      features: ['7 Days Tour', 'Trekking', 'Basecamp', 'Equipment'],
      spotsLeft: 6,
      tag: 'Adventure Deal',
      category: 'adventure',
      urgency: 'high'
    },
    {
      id: 6,
      title: 'Luxury Escape - Northern Circuit',
      originalPrice: 75000,
      discountedPrice: 60000,
      discount: '20%',
      validUntil: 'May 30, 2026',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
      features: ['10 Days Tour', '5-Star Hotels', 'Private Transport', 'Premium'],
      spotsLeft: 4,
      tag: 'Premium Deal',
      category: 'luxury',
      urgency: 'high'
    }
  ];

  const filters = [
    { id: 'all', label: 'All Deals', icon: '🎯' },
    { id: 'adventure', label: 'Adventure', icon: '🏔️' },
    { id: 'luxury', label: 'Luxury', icon: '✨' },
    { id: 'family', label: 'Family', icon: '👨‍👩‍👧‍👦' },
    { id: 'weekend', label: 'Weekend', icon: '🎒' }
  ];

  let filteredDeals = selectedFilter === 'all' 
    ? deals 
    : deals.filter(deal => deal.category === selectedFilter);

  // Apply limit if provided
  if (limit) {
    filteredDeals = filteredDeals.slice(0, limit);
  }

  const getUrgencyColor = (urgency) => {
    switch(urgency) {
      case 'high': return '#ef4444';
      case 'medium': return '#f59e0b';
      case 'low': return '#3eb489';
      default: return '#6b7280';
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Section with Parallax */}
      <section 
        className="position-relative d-flex align-items-center justify-content-center text-white overflow-hidden"
        style={{
          minHeight: '65vh',
          backgroundImage: 'linear-gradient(135deg, rgba(62, 180, 137, 0.95), rgba(45, 151, 112, 0.95)), url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Animated Background Elements */}
        <div className="position-absolute w-100 h-100">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="position-absolute rounded-circle"
              style={{
                width: `${Math.random() * 60 + 20}px`,
                height: `${Math.random() * 60 + 20}px`,
                background: 'rgba(255, 255, 255, 0.1)',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 10 + 10}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>

        <div className="container text-center position-relative" style={{ marginTop: '80px', zIndex: 2 }}>
          <div 
            className="badge px-4 py-2 mb-4"
            style={{
              background: 'rgba(255, 255, 255, 0.25)',
              backdropFilter: 'blur(10px)',
              fontSize: '13px',
              fontWeight: '700',
              letterSpacing: '2px',
              borderRadius: '50px',
              border: '2px solid rgba(255, 255, 255, 0.5)',
              animation: 'pulse 2s infinite'
            }}
          >
            🔥 LIMITED TIME FLASH SALE
          </div>
          
          <h1 className="display-2 fw-bold mb-4" style={{ 
            letterSpacing: '-2px',
            textShadow: '0 10px 30px rgba(0,0,0,0.3)'
          }}>
            Exclusive Travel Deals
          </h1>
          
          <p className="lead mb-5 fs-3 opacity-90">
            Save up to 25% on premium Pakistan tours • Limited availability
          </p>
          
          {/* Live Countdown Timer */}
          <div 
            className="d-inline-flex gap-3 p-4 rounded-4 mb-4"
            style={{
              background: 'rgba(0, 0, 0, 0.3)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}
          >
            {['days', 'hours', 'minutes', 'seconds'].map((unit, index) => (
              <React.Fragment key={unit}>
                <div className="text-center px-3">
                  <div 
                    className="fw-bold mb-1"
                    style={{
                      fontSize: 'clamp(2rem, 4vw, 3rem)',
                      fontFamily: 'monospace',
                      textShadow: '0 5px 15px rgba(0,0,0,0.3)'
                    }}
                  >
                    {String(timeLeft[unit]).padStart(2, '0')}
                  </div>
                  <div className="small text-uppercase opacity-75" style={{ fontSize: '0.75rem', letterSpacing: '1px' }}>
                    {unit}
                  </div>
                </div>
                {index < 3 && <div className="fw-bold fs-2 align-self-center">:</div>}
              </React.Fragment>
            ))}
          </div>

          <div className="small opacity-75">⚡ Hurry! Deals end soon</div>
        </div>

        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
          }
          @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }
        `}</style>
      </section>

      {/* Filter Section - NOT sticky (removed position sticky, top, zIndex) */}
      <section className="py-4 shadow-sm" style={{ 
        background: '#fafbfc', 
        borderBottom: '1px solid #e8e8e8'
      }}>
        <div className="container">
          <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
            <div className="d-flex align-items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3eb489" strokeWidth="2">
                <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
              </svg>
              <span className="fw-semibold" style={{ color: '#1a1a1a' }}>Filter by:</span>
            </div>
            
            <div className="d-flex gap-2 flex-wrap">
              {filters.map(filter => (
                <button
                  key={filter.id}
                  onClick={() => setSelectedFilter(filter.id)}
                  className="btn px-4 py-2 border-0"
                  style={{
                    background: selectedFilter === filter.id 
                      ? 'linear-gradient(135deg, #3eb489 0%, #2d9770 100%)'
                      : 'white',
                    color: selectedFilter === filter.id ? 'white' : '#1a1a1a',
                    borderRadius: '50px',
                    fontWeight: '600',
                    fontSize: '14px',
                    border: selectedFilter === filter.id ? 'none' : '2px solid #e8e8e8',
                    transition: 'all 0.3s ease',
                    boxShadow: selectedFilter === filter.id ? '0 8px 20px rgba(62, 180, 137, 0.3)' : 'none',
                    transform: selectedFilter === filter.id ? 'translateY(-2px)' : 'none'
                  }}
                >
                  <span className="me-1">{filter.icon}</span>
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Deals Grid */}
      <section className="py-5" style={{ background: '#f8fafb' }}>
        <div className="container">
          {/* Results Count */}
          <div className="mb-4">
            <p className="text-muted mb-0">
              Showing <span className="fw-bold text-dark">{filteredDeals.length}</span> amazing deals
            </p>
          </div>

          <div className="row g-4">
            {filteredDeals.map(deal => (
              <div key={deal.id} className="col-lg-4 col-md-6">
                <div 
                  className="card border-0 h-100 overflow-hidden"
                  onMouseEnter={() => setHoveredDeal(deal.id)}
                  onMouseLeave={() => setHoveredDeal(null)}
                  style={{
                    borderRadius: '24px',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    transform: hoveredDeal === deal.id ? 'translateY(-12px) scale(1.02)' : 'translateY(0) scale(1)',
                    boxShadow: hoveredDeal === deal.id 
                      ? '0 30px 80px rgba(62, 180, 137, 0.25)' 
                      : '0 4px 20px rgba(0,0,0,0.08)',
                    cursor: 'pointer'
                  }}
                >
                  {/* Image with Overlay Effects */}
                  <div className="position-relative overflow-hidden" style={{ height: '300px' }}>
                    <img 
                      src={deal.image} 
                      alt={deal.title}
                      className="w-100 h-100"
                      style={{
                        objectFit: 'cover',
                        transition: 'all 0.6s ease',
                        transform: hoveredDeal === deal.id ? 'scale(1.15) rotate(2deg)' : 'scale(1)',
                        filter: hoveredDeal === deal.id ? 'brightness(1.1)' : 'brightness(1)'
                      }}
                    />
                    
                    {/* Gradient Overlay */}
                    <div 
                      className="position-absolute w-100 h-100 top-0 start-0"
                      style={{
                        background: hoveredDeal === deal.id 
                          ? 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.7) 100%)'
                          : 'linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.5) 100%)',
                        transition: 'all 0.3s ease'
                      }}
                    />

                    {/* Discount Badge */}
                    <div className="position-absolute top-0 end-0 m-3">
                      <div 
                        className="badge px-4 py-2"
                        style={{
                          background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
                          fontSize: '18px',
                          fontWeight: '800',
                          borderRadius: '50px',
                          boxShadow: '0 10px 30px rgba(239, 68, 68, 0.5)',
                          animation: hoveredDeal === deal.id ? 'bounce 0.6s ease' : 'none',
                          border: '2px solid rgba(255, 255, 255, 0.5)'
                        }}
                      >
                        {deal.discount} OFF
                      </div>
                    </div>

                    {/* Category Tag */}
                    <div className="position-absolute top-0 start-0 m-3">
                      <span 
                        className="badge px-3 py-2"
                        style={{
                          background: 'rgba(62, 180, 137, 0.95)',
                          backdropFilter: 'blur(10px)',
                          borderRadius: '50px',
                          fontSize: '13px',
                          fontWeight: '700',
                          border: '1px solid rgba(255, 255, 255, 0.3)'
                        }}
                      >
                        {deal.tag}
                      </span>
                    </div>

                    {/* Urgency Indicator */}
                    <div className="position-absolute bottom-0 start-0 end-0 p-3">
                      <div 
                        className="d-flex align-items-center gap-2 text-white p-2 rounded-3"
                        style={{
                          background: 'rgba(0, 0, 0, 0.6)',
                          backdropFilter: 'blur(10px)'
                        }}
                      >
                        <div className="d-flex gap-1 flex-grow-1">
                          {[...Array(5)].map((_, i) => (
                            <div 
                              key={i}
                              style={{
                                flex: 1,
                                height: '6px',
                                background: i < Math.ceil(deal.spotsLeft / 4) 
                                  ? getUrgencyColor(deal.urgency)
                                  : 'rgba(255,255,255,0.3)',
                                borderRadius: '3px',
                                transition: 'all 0.3s ease'
                              }}
                            />
                          ))}
                        </div>
                        <small className="fw-bold text-nowrap" style={{ fontSize: '0.75rem' }}>
                          {deal.spotsLeft} left
                        </small>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="card-body p-4">
                    <h5 className="fw-bold mb-3" style={{ 
                      color: '#1a1a1a', 
                      fontSize: '1.15rem',
                      lineHeight: '1.4'
                    }}>
                      {deal.title}
                    </h5>

                    {/* Features */}
                    <div className="mb-4">
                      <div className="row g-2">
                        {deal.features.map((feature, index) => (
                          <div key={index} className="col-6">
                            <div 
                              className="d-flex align-items-center gap-2 p-2 rounded-2"
                              style={{ background: '#f0fdf7', fontSize: '0.8rem' }}
                            >
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3eb489" strokeWidth="3">
                                <polyline points="20 6 9 17 4 12"></polyline>
                              </svg>
                              <span className="fw-semibold" style={{ color: '#3eb489', fontSize: '0.75rem' }}>
                                {feature}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Pricing */}
                    <div className="mb-4 p-3 rounded-3" style={{ background: '#fafbfc' }}>
                      <div className="d-flex align-items-center justify-content-between mb-2">
                        <div>
                          <div className="text-muted text-decoration-line-through small mb-1">
                            PKR {deal.originalPrice.toLocaleString()}
                          </div>
                          <div className="d-flex align-items-baseline gap-2">
                            <span className="fw-bold" style={{ color: '#3eb489', fontSize: '1.75rem' }}>
                              {deal.discountedPrice.toLocaleString()}
                            </span>
                            <span className="text-muted small">PKR</span>
                          </div>
                        </div>
                        <div className="text-end">
                          <div 
                            className="badge px-3 py-2"
                            style={{
                              background: 'linear-gradient(135deg, #3eb489 0%, #2d9770 100%)',
                              fontSize: '0.9rem',
                              fontWeight: '700'
                            }}
                          >
                            Save {(deal.originalPrice - deal.discountedPrice).toLocaleString()}
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center gap-1 text-muted" style={{ fontSize: '0.75rem' }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10"></circle>
                          <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        Valid until {deal.validUntil}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <button 
                      className="btn w-100 py-3 border-0 fw-bold d-flex align-items-center justify-content-center gap-2"
                      style={{
                        background: hoveredDeal === deal.id 
                          ? 'linear-gradient(135deg, #3eb489 0%, #2d9770 100%)' 
                          : '#f0fdf7',
                        color: hoveredDeal === deal.id ? 'white' : '#3eb489',
                        borderRadius: '50px',
                        fontSize: '15px',
                        transition: 'all 0.3s ease',
                        boxShadow: hoveredDeal === deal.id ? '0 10px 30px rgba(62, 180, 137, 0.3)' : 'none',
                        letterSpacing: '0.5px'
                      }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="9" cy="21" r="1"></circle>
                        <circle cx="20" cy="21" r="1"></circle>
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                      </svg>
                      BOOK THIS DEAL
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes bounce {
            0%, 100% { transform: scale(1) rotate(0deg); }
            25% { transform: scale(1.1) rotate(-5deg); }
            75% { transform: scale(1.1) rotate(5deg); }
          }
        `}</style>
      </section>

      {/* Newsletter Section */}
      <section className="py-5 position-relative overflow-hidden" style={{
        background: 'linear-gradient(135deg, #3eb489 0%, #0b5351 100%)'
      }}>
        <div className="position-absolute w-100 h-100 top-0 start-0" style={{ opacity: 0.1 }}>
          <div style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '30px 30px',
            width: '100%',
            height: '100%',
            animation: 'slideBackground 20s linear infinite'
          }}></div>
        </div>

        <div className="container text-center position-relative" style={{ zIndex: 2 }}>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div 
                className="d-inline-flex align-items-center gap-2 px-4 py-2 rounded-pill mb-3"
                style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <span style={{ fontSize: '1.5rem' }}>📬</span>
                <span className="text-white fw-semibold small">Exclusive Subscriber Benefits</span>
              </div>

              <h3 className="fw-bold mb-3 text-white" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}>
                Get VIP Access to Flash Deals
              </h3>
              <p className="mb-4 text-white fs-5 opacity-90">
                Join 5,000+ smart travelers and never miss a deal • First access to sales
              </p>
              
              <div className="row justify-content-center">
                <div className="col-md-8">
                  <div 
                    className="p-2 rounded-pill d-flex gap-2"
                    style={{
                      background: 'rgba(255, 255, 255, 0.95)',
                      backdropFilter: 'blur(10px)'
                    }}
                  >
                    <input 
                      type="email" 
                      className="form-control border-0 px-4" 
                      placeholder="Enter your email address"
                      style={{ 
                        fontSize: '15px',
                        borderRadius: '50px',
                        background: 'transparent',
                        boxShadow: 'none'
                      }}
                    />
                    <button 
                      className="btn px-5 border-0 fw-bold text-white"
                      style={{
                        background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
                        borderRadius: '50px',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      Subscribe Free
                    </button>
                  </div>
                  <p className="mt-3 small text-white opacity-75 mb-0">
                    ✓ No spam • ✓ Unsubscribe anytime • ✓ 100% secure
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes slideBackground {
            from { background-position: 0 0; }
            to { background-position: 30px 30px; }
          }
        `}</style>
      </section>

      {/* Why Book Now */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <span className="badge px-4 py-2 mb-3" style={{
              background: 'rgba(62, 180, 137, 0.1)',
              color: '#3eb489',
              fontSize: '13px',
              fontWeight: '600',
              letterSpacing: '1.5px',
              borderRadius: '50px',
              textTransform: 'uppercase',
              border: '1px solid rgba(62, 180, 137, 0.2)'
            }}>
              Member Benefits
            </span>
            
            <h2 className="fw-bold mb-3" style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', color: '#1a1a1a' }}>
              Why Book <span style={{ color: '#3eb489' }}>Today</span>?
            </h2>
          </div>

          <div className="row g-4">
            {[
              {
                icon: (
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="1" x2="12" y2="23"></line>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                ),
                title: 'Best Price Guarantee',
                description: 'Find it cheaper? We\'ll match it + give you 5% extra discount',
                color: '#3eb489'
              },
              {
                icon: (
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                ),
                title: 'Instant Confirmation',
                description: 'Book now, receive confirmation in 60 seconds via email & SMS',
                color: '#667eea'
              },
              {
                icon: (
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                ),
                title: 'Flexible Cancellation',
                description: 'Free cancellation up to 48 hours before departure',
                color: '#f59e0b'
              },
              {
                icon: (
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                ),
                title: 'Limited Availability',
                description: 'Deals expire fast • Book within 24 hours to lock these prices',
                color: '#ef4444'
              }
            ].map((benefit, index) => (
              <div key={index} className="col-lg-3 col-md-6">
                <div 
                  className="text-center p-4 h-100 rounded-4"
                  style={{
                    background: 'white',
                    border: '2px solid #f0f0f0',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = benefit.color;
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = `0 20px 40px ${benefit.color}20`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#f0f0f0';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div 
                    className="d-inline-flex align-items-center justify-content-center mb-3"
                    style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '20px',
                      background: `${benefit.color}15`,
                      color: benefit.color
                    }}
                  >
                    {benefit.icon}
                  </div>
                  <h5 className="fw-bold mb-2" style={{ fontSize: '1.1rem' }}>{benefit.title}</h5>
                  <p className="text-muted small mb-0">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default CurrentDeals;