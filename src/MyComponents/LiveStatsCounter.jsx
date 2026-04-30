import React, { useState, useEffect, useRef } from 'react';

function LiveStatsCounter() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const sectionRef = useRef(null);

  const achievements = [
    {
      id: 1,
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
      end: 2500,
      suffix: '+',
      label: 'Happy Travelers',
      description: 'Satisfied customers across Pakistan',
      color: '#3eb489',
      gradient: 'linear-gradient(135deg, #3eb489 0%, #2d9770 100%)'
    },
    {
      id: 2,
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
      ),
      end: 75,
      suffix: '+',
      label: 'Unique Destinations',
      description: 'From mountains to valleys',
      color: '#667eea',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      id: 3,
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      ),
      end: 4.9,
      suffix: '',
      label: 'Average Rating',
      description: 'Based on 1,200+ reviews',
      color: '#f59e0b',
      gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
      decimal: true
    },
    {
      id: 4,
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
        </svg>
      ),
      end: 15000,
      suffix: '+',
      label: 'Adventures Completed',
      description: 'Unforgettable experiences delivered',
      color: '#ef4444',
      gradient: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-5 position-relative overflow-hidden"
      style={{ background: '#fafbfc' }}
    >
      {/* Subtle Grid Background */}
      <div className="position-absolute w-100 h-100 top-0 start-0" style={{ opacity: 0.03 }}>
        <div style={{
          backgroundImage: 'radial-gradient(circle, #3eb489 1px, transparent 1px)',
          backgroundSize: '30px 30px',
          width: '100%',
          height: '100%'
        }}></div>
      </div>

      <div className="container position-relative">
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
              Our Achievements
            </span>
          </div>
          
          <h2 className="fw-bold mb-3" style={{
            fontSize: 'clamp(2rem, 4vw, 2.75rem)',
            color: '#1a1a1a',
            letterSpacing: '-0.5px'
          }}>
            Numbers That Tell Our Story
          </h2>

          <p className="text-muted mx-auto" style={{ maxWidth: '650px', fontSize: '1.1rem', lineHeight: '1.7' }}>
            Every statistic represents countless memories created and adventures embarked upon
          </p>
        </div>

        {/* Stats Grid */}
        <div className="row g-4">
          {achievements.map((achievement, index) => (
            <div key={achievement.id} className="col-lg-3 col-md-6">
              <AchievementCard 
                achievement={achievement} 
                isVisible={isVisible} 
                delay={index * 150}
                isActive={activeCard === achievement.id}
                onHover={() => setActiveCard(achievement.id)}
                onLeave={() => setActiveCard(null)}
              />
            </div>
          ))}
        </div>

        {/* Additional Context */}
        <div className="row justify-content-center mt-5 pt-4">
          <div className="col-lg-8">
            <div 
              className="text-center p-5 rounded-4"
              style={{
                background: 'white',
                border: '2px dashed #e8e8e8'
              }}
            >
              <h5 className="fw-bold mb-3" style={{ color: '#1a1a1a' }}>
                Join Our Growing Community
              </h5>
              <p className="text-muted mb-4">
                Be part of Pakistan's fastest-growing travel community and create your own adventure story
              </p>
              <div className="d-flex flex-wrap gap-3 justify-content-center">
                <div className="d-flex align-items-center gap-2 px-4 py-2 rounded-3" style={{ background: '#f0fdf7' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3eb489" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="fw-semibold" style={{ color: '#3eb489', fontSize: '0.9rem' }}>
                    Verified Reviews
                  </span>
                </div>
                <div className="d-flex align-items-center gap-2 px-4 py-2 rounded-3" style={{ background: '#f0fdf7' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3eb489" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="fw-semibold" style={{ color: '#3eb489', fontSize: '0.9rem' }}>
                    Licensed & Insured
                  </span>
                </div>
                <div className="d-flex align-items-center gap-2 px-4 py-2 rounded-3" style={{ background: '#f0fdf7' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3eb489" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="fw-semibold" style={{ color: '#3eb489', fontSize: '0.9rem' }}>
                    Award Winning
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AchievementCard({ achievement, isVisible, delay, isActive, onHover, onLeave }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2500;
    const steps = 80;
    const increment = achievement.end / steps;
    let currentStep = 0;

    const timer = setTimeout(() => {
      const counter = setInterval(() => {
        currentStep++;
        if (currentStep <= steps) {
          setCount(increment * currentStep);
        } else {
          setCount(achievement.end);
          clearInterval(counter);
        }
      }, duration / steps);

      return () => clearInterval(counter);
    }, delay);

    return () => clearTimeout(timer);
  }, [isVisible, achievement.end, delay]);

  return (
    <div 
      className="position-relative h-100"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      style={{
        transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
        opacity: isVisible ? 1 : 0,
        transition: `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`
      }}
    >
      <div 
        className="card border-0 h-100 overflow-hidden"
        style={{
          borderRadius: '20px',
          background: isActive ? achievement.gradient : 'white',
          boxShadow: isActive 
            ? `0 30px 60px ${achievement.color}40`
            : '0 10px 30px rgba(0,0,0,0.08)',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          transform: isActive ? 'translateY(-10px) scale(1.02)' : 'translateY(0) scale(1)'
        }}
      >
        {/* Top Accent Line */}
        <div 
          style={{
            height: '4px',
            background: isActive ? 'rgba(255,255,255,0.5)' : achievement.gradient,
            transition: 'all 0.3s ease'
          }}
        />

        <div className="card-body p-4 text-center">
          {/* Icon Circle */}
          <div 
            className="mx-auto mb-4 d-flex align-items-center justify-content-center position-relative"
            style={{
              width: '90px',
              height: '90px',
              borderRadius: '50%',
              background: isActive 
                ? 'rgba(255, 255, 255, 0.25)' 
                : `${achievement.color}15`,
              color: isActive ? 'white' : achievement.color,
              transition: 'all 0.4s ease'
            }}
          >
            {achievement.icon}
            
            {/* Pulse Ring */}
            {isActive && (
              <div 
                className="position-absolute"
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  border: '2px solid rgba(255, 255, 255, 0.5)',
                  animation: 'pulse-ring 2s ease-out infinite'
                }}
              />
            )}
          </div>

          {/* Counter */}
          <h2 
            className="fw-bold mb-2" 
            style={{ 
              color: isActive ? 'white' : achievement.color,
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              fontFamily: '"Inter", sans-serif',
              transition: 'color 0.3s ease'
            }}
          >
            {achievement.decimal ? count.toFixed(1) : Math.floor(count).toLocaleString()}
            {achievement.suffix}
          </h2>

          {/* Label */}
          <h6 
            className="fw-bold mb-2"
            style={{ 
              color: isActive ? 'white' : '#1a1a1a',
              fontSize: '1rem',
              transition: 'color 0.3s ease'
            }}
          >
            {achievement.label}
          </h6>

          {/* Description */}
          <p 
            className="mb-0 small"
            style={{ 
              color: isActive ? 'rgba(255,255,255,0.9)' : '#6b7280',
              transition: 'color 0.3s ease'
            }}
          >
            {achievement.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default LiveStatsCounter;