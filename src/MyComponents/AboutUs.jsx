import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function AboutUs() {
  const [hoveredValue, setHoveredValue] = useState(null);
  const [hoveredTeam, setHoveredTeam] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeTimeline, setActiveTimeline] = useState(0);
  const statsRef = useRef(null);
  const [statsVisible, setStatsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({
    years: 0,
    travelers: 0,
    destinations: 0,
    rating: 0
  });

  // Scroll progress indicator
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.pageYOffset / totalScroll) * 100;
      setScrollProgress(currentProgress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animate stats on visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !statsVisible) {
          setStatsVisible(true);
          animateNumbers();
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [statsVisible]);

  const animateNumbers = () => {
    const duration = 2000;
    const steps = 60;
    const targets = { years: 5, travelers: 500, destinations: 50, rating: 4.9 };
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setAnimatedStats({
        years: Math.floor(targets.years * progress),
        travelers: Math.floor(targets.travelers * progress),
        destinations: Math.floor(targets.destinations * progress),
        rating: (targets.rating * progress).toFixed(1)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setAnimatedStats(targets);
      }
    }, duration / steps);
  };

  const values = [
    {
      id: 1,
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 6v6l4 2"></path>
        </svg>
      ),
      title: 'Our Mission',
      description: 'To make the wonders of Pakistan accessible to every traveler while preserving the natural beauty and cultural heritage of our destinations.',
      color: '#3eb489',
      gradient: 'linear-gradient(135deg, #3eb489 0%, #2d9770 100%)'
    },
    {
      id: 2,
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
          <circle cx="12" cy="12" r="3"></circle>
        </svg>
      ),
      title: 'Our Vision',
      description: 'To become Pakistan\'s most trusted travel partner, known for creating transformative experiences that connect people with nature and culture.',
      color: '#667eea',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      id: 3,
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      ),
      title: 'Our Values',
      description: 'Authenticity, sustainability, safety, and exceptional service guide every journey we craft for our valued travelers.',
      color: '#f59e0b',
      gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)'
    }
  ];

  const timeline = [
    {
      year: '2019',
      title: 'The Beginning',
      description: 'TrueNorth was born from a passion for Pakistan\'s northern beauty',
      icon: '🌱'
    },
    {
      year: '2020',
      title: 'First Milestone',
      description: 'Served 100+ travelers and expanded to 20 destinations',
      icon: '🎯'
    },
    {
      year: '2022',
      title: 'Growth Phase',
      description: 'Launched luxury packages and partnered with local communities',
      icon: '📈'
    },
    {
      year: '2024',
      title: 'Present Day',
      description: 'Now serving 500+ travelers annually across 50+ destinations',
      icon: '🏆'
    }
  ];

  const team = [
    { 
      name: 'Expert Guides', 
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
      description: 'Local professionals with deep knowledge and 10+ years experience',
      count: '25+',
      color: '#3eb489'
    },
    { 
      name: 'Support Team', 
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      ),
      description: '24/7 multilingual customer assistance via phone, chat & email',
      count: '10+',
      color: '#667eea'
    },
    { 
      name: 'Safety Experts', 
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      ),
      description: 'Comprehensive safety protocols and emergency response team',
      count: '8+',
      color: '#f59e0b'
    }
  ];

  const achievements = [
    { icon: '🏅', label: 'Industry Awards', count: '5+' },
    { icon: '⭐', label: 'Average Rating', count: '4.9' },
    { icon: '🌍', label: 'International Clients', count: '30%' },
    { icon: '♻️', label: 'Eco-Friendly Tours', count: '100%' }
  ];

  return (
    <div className="bg-white position-relative">
      {/* Scroll Progress Bar */}
      <div 
        className="position-fixed top-0 start-0 bg-primary"
        style={{
          height: '4px',
          width: `${scrollProgress}%`,
          zIndex: 9999,
          background: 'linear-gradient(90deg, #3eb489 0%, #2d9770 100%)',
          transition: 'width 0.1s ease'
        }}
      />

      {/* Hero Section - Enhanced */}
      <section 
        className="position-relative d-flex align-items-center justify-content-center text-white overflow-hidden"
        style={{
          minHeight: '80vh',
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Gradient Overlay */}
        <div 
          className="position-absolute w-100 h-100"
          style={{ 
            background: 'radial-gradient(circle at 30% 50%, rgba(62, 180, 137, 0.4) 0%, transparent 70%)',
            animation: 'pulseGlow 4s ease-in-out infinite'
          }}
        />

        <div className="container text-center position-relative" style={{ zIndex: 2, marginTop: '80px' }}>
          <div 
            className="badge px-5 py-3 mb-4"
            style={{
              background: 'rgba(62, 180, 137, 0.95)',
              backdropFilter: 'blur(20px)',
              fontSize: '14px',
              fontWeight: '700',
              letterSpacing: '3px',
              borderRadius: '50px',
              border: '2px solid rgba(255,255,255,0.5)',
              textTransform: 'uppercase',
              boxShadow: '0 10px 40px rgba(62, 180, 137, 0.5)',
              animation: 'fadeInDown 1s ease'
            }}
          >
            🌟 Our Story
          </div>

          <h1 
            className="display-2 fw-bold mb-4" 
            style={{ 
              letterSpacing: '-2px',
              textShadow: '0 10px 40px rgba(0,0,0,0.5)',
              animation: 'fadeInUp 1s ease 0.2s both'
            }}
          >
            About <span style={{ 
              color: '#3eb489',
              background: 'linear-gradient(135deg, #3eb489 0%, #2d9770 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>TrueNorth</span>
          </h1>

          <p 
            className="lead fs-3 mb-5 mx-auto" 
            style={{ 
              maxWidth: '800px',
              textShadow: '0 4px 20px rgba(0,0,0,0.5)',
              opacity: 0.95,
              animation: 'fadeInUp 1s ease 0.4s both'
            }}
          >
            A journey inspired by direction, discovery, and the untamed beauty of Pakistan's North
          </p>

          {/* Scroll Indicator */}
          <div 
            className="mt-5"
            style={{ 
              animation: 'bounce 2s infinite'
            }}
          >
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M12 5v14M19 12l-7 7-7-7"/>
            </svg>
          </div>
        </div>

        <style jsx>{`
          @keyframes twinkle {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.5); }
          }
          @keyframes pulseGlow {
            0%, 100% { opacity: 0.4; }
            50% { opacity: 0.6; }
          }
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
        `}</style>
      </section>

      {/* Story Section - Premium Design */}
      <section className="py-5 position-relative overflow-hidden" style={{ background: '#fafbfc' }}>
        {/* Decorative Elements */}
        <div className="position-absolute w-100 h-100 top-0 start-0" style={{ opacity: 0.03 }}>
          <div style={{
            backgroundImage: 'radial-gradient(circle, #3eb489 1px, transparent 1px)',
            backgroundSize: '30px 30px',
            width: '100%',
            height: '100%'
          }}></div>
        </div>

        <div className="container position-relative" style={{ zIndex: 2 }}>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              
              {/* Section Badge */}
              <div className="text-center mb-5">
                <span 
                  className="badge px-4 py-2"
                  style={{
                    background: 'rgba(62, 180, 137, 0.1)',
                    color: '#3eb489',
                    fontSize: '13px',
                    fontWeight: '600',
                    letterSpacing: '1.5px',
                    borderRadius: '50px',
                    textTransform: 'uppercase',
                    border: '1px solid rgba(62, 180, 137, 0.2)'
                  }}
                >
                  ✨ Welcome to TrueNorth
                </span>
              </div>

              {/* Main Story Card */}
              <div 
                className="card border-0 shadow-lg mb-5 overflow-hidden"
                style={{
                  borderRadius: '30px',
                  background: 'white'
                }}
              >
                <div className="card-body p-5">
                  
                  {/* Intro with Drop Cap */}
                  <div className="mb-5 pb-5" style={{ borderBottom: '2px solid #f0f0f0' }}>
                    <div className="position-relative">
                      <div 
                        className="position-absolute start-0 top-0 h-100"
                        style={{
                          width: '4px',
                          background: 'linear-gradient(180deg, #3eb489 0%, #2d9770 100%)',
                          borderRadius: '10px'
                        }}
                      />
                      
                      <div className="ps-4">
                        <span 
                          className="float-start me-4 mt-2"
                          style={{
                            fontSize: '80px',
                            fontWeight: '900',
                            color: '#3eb489',
                            lineHeight: '0.8',
                            fontFamily: 'Georgia, serif'
                          }}
                        >
                          W
                        </span>
                        <p className="fs-5 lh-lg" style={{ color: '#2d3748', textAlign: 'justify' }}>
                          elcome to <span className="fw-bold" style={{ color: '#3eb489' }}>TrueNorth Vacations</span>, a name inspired by the direction that always leads to clarity, balance, and discovery. Just as the North Star has guided travelers for centuries, we aim to be your constant companion in exploring the majestic mountains, pristine valleys, and cultural treasures of Pakistan's northern regions.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Our Story */}
                  <div className="mb-5 pb-5" style={{ borderBottom: '2px solid #f0f0f0' }}>
                    <h3 className="fw-bold mb-4 d-flex align-items-center gap-3" style={{ color: '#1a1a1a' }}>
                      <div 
                        className="d-flex align-items-center justify-content-center"
                        style={{
                          width: '50px',
                          height: '50px',
                          borderRadius: '15px',
                          background: 'linear-gradient(135deg, #3eb489 0%, #2d9770 100%)',
                          color: 'white'
                        }}
                      >
                        📖
                      </div>
                      <span>Our <span style={{ color: '#3eb489' }}>Story</span></span>
                    </h3>
                    <p className="fs-5 lh-lg" style={{ color: '#2d3748', textAlign: 'justify' }}>
                      The story of <span className="fw-bold" style={{ color: '#3eb489' }}>TrueNorth Vacations</span> began with a simple dream — to make the wonders of Pakistan's northern regions accessible to every adventurer, nature lover, and culture enthusiast. Founded by passionate travelers who fell in love with the raw beauty of places like Hunza, Skardu, and Fairy Meadows, we understand the transformative power of these landscapes. We've walked the trails, witnessed the sunrises over snow-capped peaks, and experienced the warm hospitality of mountain communities firsthand.
                    </p>
                  </div>

                  {/* Commitment */}
                  <div>
                    <h3 className="fw-bold mb-4 d-flex align-items-center gap-3" style={{ color: '#1a1a1a' }}>
                      <div 
                        className="d-flex align-items-center justify-content-center"
                        style={{
                          width: '50px',
                          height: '50px',
                          borderRadius: '15px',
                          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                          color: 'white'
                        }}
                      >
                        💎
                      </div>
                      <span>Our <span style={{ color: '#3eb489' }}>Commitment</span></span>
                    </h3>
                    <p className="fs-5 lh-lg mb-0" style={{ color: '#2d3748', textAlign: 'justify' }}>
                      At the heart of our company lies a commitment to <span className="fw-bold" style={{ color: '#3eb489' }}>authentic experiences</span>. We don't just show you destinations — we help you connect with them. From carefully curated itineraries that balance adventure with comfort, to partnerships with local guides who share the stories behind every peak and valley, we ensure that every journey with TrueNorth is meaningful, memorable, and uniquely yours.
                    </p>
                  </div>
                </div>
              </div>

              {/* Mission, Vision, Values - Enhanced Cards */}
              <div className="row g-4 mb-5">
                {values.map((value, index) => (
                  <div 
                    key={value.id} 
                    className="col-md-4"
                    style={{
                      animation: `slideUp 0.6s ease ${index * 0.15}s both`
                    }}
                  >
                    <div 
                      className="card border-0 h-100 position-relative overflow-hidden"
                      onMouseEnter={() => setHoveredValue(value.id)}
                      onMouseLeave={() => setHoveredValue(null)}
                      style={{
                        borderRadius: '24px',
                        background: hoveredValue === value.id ? value.gradient : 'white',
                        boxShadow: hoveredValue === value.id 
                          ? `0 30px 60px ${value.color}40` 
                          : '0 10px 30px rgba(0,0,0,0.08)',
                        transform: hoveredValue === value.id ? 'translateY(-15px) scale(1.02)' : 'translateY(0) scale(1)',
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        cursor: 'pointer'
                      }}
                    >
                      {/* Top Gradient Bar */}
                      <div 
                        style={{
                          height: '6px',
                          background: hoveredValue === value.id ? 'rgba(255,255,255,0.5)' : value.gradient,
                          transition: 'all 0.3s ease'
                        }}
                      />

                      <div className="card-body p-4">
                        {/* Icon Container */}
                        <div 
                          className="mb-4 d-inline-flex align-items-center justify-content-center"
                          style={{
                            width: '80px',
                            height: '80px',
                            borderRadius: '20px',
                            background: hoveredValue === value.id 
                              ? 'rgba(255, 255, 255, 0.25)' 
                              : `${value.color}15`,
                            color: hoveredValue === value.id ? 'white' : value.color,
                            transition: 'all 0.4s ease',
                            transform: hoveredValue === value.id ? 'scale(1.1) rotate(-5deg)' : 'scale(1)'
                          }}
                        >
                          {value.icon}
                        </div>

                        <h5 
                          className="fw-bold mb-3"
                          style={{
                            color: hoveredValue === value.id ? 'white' : '#1a1a1a',
                            fontSize: '1.25rem',
                            transition: 'color 0.3s ease'
                          }}
                        >
                          {value.title}
                        </h5>

                        <p 
                          className="mb-0"
                          style={{
                            color: hoveredValue === value.id ? 'rgba(255,255,255,0.95)' : '#6b7280',
                            lineHeight: '1.7',
                            transition: 'color 0.3s ease'
                          }}
                        >
                          {value.description}
                        </p>
                      </div>

                      {/* Hover Glow Effect */}
                      {hoveredValue === value.id && (
                        <div 
                          className="position-absolute"
                          style={{
                            width: '100px',
                            height: '100px',
                            background: 'rgba(255, 255, 255, 0.2)',
                            borderRadius: '50%',
                            filter: 'blur(30px)',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            pointerEvents: 'none'
                          }}
                        />
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <style jsx>{`
                @keyframes slideUp {
                  from {
                    opacity: 0;
                    transform: translateY(40px);
                  }
                  to {
                    opacity: 1;
                    transform: translateY(0);
                  }
                }
              `}</style>

            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section - Interactive */}
      <section className="py-5" style={{ background: 'white' }}>
        <div className="container">
          <div className="text-center mb-5">
            <span 
              className="badge px-4 py-2 mb-3"
              style={{
                background: 'rgba(62, 180, 137, 0.1)',
                color: '#3eb489',
                fontSize: '13px',
                fontWeight: '600',
                letterSpacing: '1.5px',
                borderRadius: '50px',
                textTransform: 'uppercase',
                border: '1px solid rgba(62, 180, 137, 0.2)'
              }}
            >
              📅 Our Journey
            </span>
            <h2 className="fw-bold mb-3" style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', color: '#1a1a1a' }}>
              Milestones That <span style={{ color: '#3eb489' }}>Define Us</span>
            </h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="position-relative">
                {/* Timeline Line */}
                <div 
                  className="position-absolute start-50 translate-middle-x d-none d-md-block"
                  style={{
                    width: '4px',
                    height: '100%',
                    background: 'linear-gradient(180deg, #3eb489 0%, #2d9770 100%)',
                    top: 0
                  }}
                />

                {timeline.map((item, index) => (
                  <div 
                    key={index}
                    className="row mb-5 position-relative"
                    onMouseEnter={() => setActiveTimeline(index)}
                    onMouseLeave={() => setActiveTimeline(-1)}
                  >
                    <div className={`col-md-6 ${index % 2 === 0 ? 'text-md-end' : 'order-md-2'}`}>
                      <div 
                        className="card border-0 p-4"
                        style={{
                          borderRadius: '20px',
                          background: activeTimeline === index 
                            ? 'linear-gradient(135deg, #3eb489 0%, #2d9770 100%)'
                            : 'white',
                          boxShadow: activeTimeline === index 
                            ? '0 20px 60px rgba(62, 180, 137, 0.3)'
                            : '0 5px 20px rgba(0,0,0,0.08)',
                          transform: activeTimeline === index ? 'scale(1.05)' : 'scale(1)',
                          transition: 'all 0.4s ease',
                          cursor: 'pointer'
                        }}
                      >
                        <div className="d-flex align-items-center gap-3 mb-3" style={{
                          flexDirection: index % 2 === 0 ? 'row-reverse' : 'row',
                          justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-start'
                        }}>
                          <div 
                            style={{
                              fontSize: '2rem',
                              filter: activeTimeline === index ? 'brightness(2)' : 'none',
                              transition: 'all 0.3s ease'
                            }}
                          >
                            {item.icon}
                          </div>
                          <h4 
                            className="fw-bold mb-0"
                            style={{
                              color: activeTimeline === index ? 'white' : '#3eb489',
                              fontSize: '1.5rem'
                            }}
                          >
                            {item.year}
                          </h4>
                        </div>
                        <h5 
                          className="fw-bold mb-2"
                          style={{
                            color: activeTimeline === index ? 'white' : '#1a1a1a'
                          }}
                        >
                          {item.title}
                        </h5>
                        <p 
                          className="mb-0"
                          style={{
                            color: activeTimeline === index ? 'rgba(255,255,255,0.9)' : '#6b7280'
                          }}
                        >
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Timeline Dot */}
                    <div className="col-md-6 d-none d-md-flex justify-content-center align-items-center position-absolute top-50 start-50 translate-middle" style={{ zIndex: 2 }}>
                      <div 
                        style={{
                          width: activeTimeline === index ? '24px' : '16px',
                          height: activeTimeline === index ? '24px' : '16px',
                          borderRadius: '50%',
                          background: activeTimeline === index 
                            ? 'linear-gradient(135deg, #3eb489 0%, #2d9770 100%)'
                            : 'white',
                          border: '4px solid #3eb489',
                          boxShadow: activeTimeline === index ? '0 0 20px rgba(62, 180, 137, 0.6)' : 'none',
                          transition: 'all 0.3s ease'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Animated */}
      <section 
        ref={statsRef}
        className="py-5" 
        style={{ background: 'linear-gradient(135deg, #3eb489 0%, #0b5351 100%)' }}
      >
        <div className="container text-white">
          <div className="text-center mb-5">
            <h2 className="fw-bold mb-3" style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)' }}>
              Our Journey in <span style={{ opacity: 0.9 }}>Numbers</span>
            </h2>
            <p className="fs-5 opacity-90 mb-0">
              Every number tells a story of trust, adventure, and excellence
            </p>
          </div>

          <div className="row g-4 mb-5">
            {[
              { key: 'years', value: animatedStats.years, suffix: '+', label: 'Years Experience' },
              { key: 'travelers', value: animatedStats.travelers, suffix: '+', label: 'Happy Travelers' },
              { key: 'destinations', value: animatedStats.destinations, suffix: '+', label: 'Destinations' },
              { key: 'rating', value: animatedStats.rating, suffix: '★', label: 'Average Rating' }
            ].map((stat, index) => (
              <div key={index} className="col-lg-3 col-md-6">
                <div 
                  className="card border-0 p-4 text-center h-100"
                  style={{
                    borderRadius: '20px',
                    background: 'rgba(255, 255, 255, 0.15)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px)';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                  }}
                >
                  <h2 
                    className="fw-bold mb-2 text-white" 
                    style={{ 
                      fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                      fontFamily: 'monospace',
                      textShadow: '0 5px 20px rgba(0,0,0,0.3)'
                    }}
                  >
                    {stat.value}{stat.suffix}
                  </h2>
                  <p className="mb-0 text-white fw-semibold" style={{ fontSize: '1.1rem', opacity: 0.9 }}>
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Achievements */}
          <div className="row g-3">
            {achievements.map((achievement, i) => (
              <div key={i} className="col-lg-3 col-6">
                <div 
                  className="text-center p-3 rounded-3"
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }}
                >
                  <div className="mb-2" style={{ fontSize: '2rem' }}>{achievement.icon}</div>
                  <div className="fw-bold fs-4 mb-1">{achievement.count}</div>
                  <div className="small opacity-90">{achievement.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section - Enhanced */}
      <section className="py-5" style={{ background: '#fafbfc' }}>
        <div className="container">
          <div className="text-center mb-5">
            <span 
              className="badge px-4 py-2 mb-3"
              style={{
                background: 'rgba(62, 180, 137, 0.1)',
                color: '#3eb489',
                fontSize: '13px',
                fontWeight: '600',
                letterSpacing: '1.5px',
                borderRadius: '50px',
                textTransform: 'uppercase',
                border: '1px solid rgba(62, 180, 137, 0.2)'
              }}
            >
              👥 Our Team
            </span>
            <h2 className="fw-bold mb-3" style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', color: '#1a1a1a' }}>
              The People Behind <span style={{ color: '#3eb489' }}>Your Journey</span>
            </h2>
            <p className="text-muted mx-auto" style={{ maxWidth: '650px', fontSize: '1.1rem' }}>
              Meet the dedicated professionals who make every TrueNorth adventure exceptional
            </p>
          </div>

          <div className="row g-4">
            {team.map((member, index) => (
              <div key={index} className="col-md-4">
                <div 
                  className="card border-0 h-100 overflow-hidden"
                  onMouseEnter={() => setHoveredTeam(index)}
                  onMouseLeave={() => setHoveredTeam(null)}
                  style={{
                    borderRadius: '24px',
                    background: 'white',
                    boxShadow: hoveredTeam === index 
                      ? `0 30px 60px ${member.color}20` 
                      : '0 10px 30px rgba(0,0,0,0.08)',
                    transform: hoveredTeam === index ? 'translateY(-15px)' : 'translateY(0)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer'
                  }}
                >
                  {/* Top Color Bar */}
                  <div 
                    style={{
                      height: '6px',
                      background: `linear-gradient(90deg, ${member.color}, ${member.color}dd)`
                    }}
                  />

                  <div className="card-body p-4 text-center">
                    {/* Icon */}
                    <div 
                      className="mx-auto mb-4 d-inline-flex align-items-center justify-content-center"
                      style={{
                        width: '90px',
                        height: '90px',
                        borderRadius: '20px',
                        background: hoveredTeam === index 
                          ? `linear-gradient(135deg, ${member.color}, ${member.color}dd)`
                          : `${member.color}15`,
                        color: hoveredTeam === index ? 'white' : member.color,
                        transition: 'all 0.4s ease',
                        transform: hoveredTeam === index ? 'scale(1.1) rotate(5deg)' : 'scale(1)'
                      }}
                    >
                      {member.icon}
                    </div>

                    {/* Count Badge */}
                    <div 
                      className="badge px-3 py-2 mb-3"
                      style={{
                        background: `${member.color}20`,
                        color: member.color,
                        fontSize: '1rem',
                        fontWeight: '700',
                        borderRadius: '50px'
                      }}
                    >
                      {member.count} Members
                    </div>

                    <h5 className="fw-bold mb-3" style={{ color: '#1a1a1a', fontSize: '1.25rem' }}>
                      {member.name}
                    </h5>

                    <p className="mb-0 text-muted" style={{ lineHeight: '1.7' }}>
                      {member.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Premium */}
      <section className="py-5 position-relative overflow-hidden" style={{ 
        background: 'linear-gradient(135deg, #3eb489 0%, #0b5351 100%)'
      }}>
        {/* Background Pattern */}
        <div className="position-absolute w-100 h-100 top-0 start-0" style={{ opacity: 0.1 }}>
          <div style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '30px 30px',
            width: '100%',
            height: '100%'
          }}></div>
        </div>

        <div className="container position-relative text-center text-white">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2 className="fw-bold mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: '1.2' }}>
                Ready to Discover Your <span style={{ opacity: 0.9 }}>True North</span>?
              </h2>
              <p className="fs-4 mb-5 mx-auto opacity-90" style={{ maxWidth: '600px' }}>
                Let us guide you through Pakistan's most breathtaking destinations and create memories that last a lifetime
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
                    fontSize: '1.1rem',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-5px) scale(1.05)';
                    e.target.style.boxShadow = '0 20px 50px rgba(0,0,0,0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0) scale(1)';
                    e.target.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)';
                  }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  Explore Destinations
                </Link>

                <Link
                  to="/contact"
                  className="btn btn-lg btn-outline-light px-5 py-3 d-inline-flex align-items-center gap-2"
                  style={{
                    borderRadius: '50px',
                    fontWeight: '600',
                    fontSize: '1.1rem',
                    borderWidth: '2px',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'white';
                    e.target.style.color = '#3eb489';
                    e.target.style.transform = 'translateY(-5px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'transparent';
                    e.target.style.color = 'white';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                  Get In Touch
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="d-flex flex-wrap gap-4 justify-content-center mt-5 pt-4">
                {[
                  { icon: '🔒', text: 'Secure Booking' },
                  { icon: '⚡', text: 'Instant Confirmation' },
                  { icon: '🎯', text: 'Best Prices' }
                ].map((badge, i) => (
                  <div key={i} className="d-flex align-items-center gap-2">
                    <span style={{ fontSize: '1.5rem' }}>{badge.icon}</span>
                    <span className="fw-semibold">{badge.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;