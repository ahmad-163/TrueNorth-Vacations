import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Media(props) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [activeGalleryImage, setActiveGalleryImage] = useState(null);

  const galleryImages = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
      title: 'Hunza Valley',
      category: 'Mountains'
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800',
      title: 'Skardu Lakes',
      category: 'Lakes'
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
      title: 'Fairy Meadows',
      category: 'Valleys'
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
      title: 'Nanga Parbat',
      category: 'Mountains'
    }
  ];

  return (
    <section className="py-5 position-relative overflow-hidden" style={{ background: '#fafbfc' }}>
      {/* Subtle Background Pattern */}
      <div className="position-absolute w-100 h-100 top-0 start-0" style={{ opacity: 0.03 }}>
        <div style={{
          backgroundImage: 'radial-gradient(circle, #3eb489 1px, transparent 1px)',
          backgroundSize: '30px 30px',
          width: '100%',
          height: '100%'
        }}></div>
      </div>

      <div className="container position-relative" style={{ zIndex: 2 }}>
        {/* Section Header */}
        <div className="text-center mb-5 pb-3">
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
              Media Gallery
            </span>
          </div>
          
         <h2 className="fw-bold mb-3" style={{
    fontSize: 'clamp(2rem, 4vw, 3rem)',
    color: '#1a1a1a',
    letterSpacing: '-1px'
  }}>
    Experience the <span style={{ color: '#3eb489' }}>Sacred North</span>
  </h2>
  
  <div className="mx-auto mb-4" style={{
    width: '80px',
    height: '4px',
    background: 'linear-gradient(90deg, #3eb489 0%, #2d9770 100%)',
    borderRadius: '10px'
  }}></div>

  <p className="lead text-muted mx-auto" style={{ maxWidth: '700px', fontSize: '1.1rem' }}>
    Discover Pakistan's Sacred North – 4K Visual Escape into Mountains & Valleys
  </p>
</div>

        <div className="row g-4">
          {/* Featured Video Section */}
          <div className="col-lg-8">
            <div 
              className="card border-0 overflow-hidden position-relative mb-4"
              style={{
                borderRadius: '20px',
                boxShadow: '0 20px 60px rgba(0,0,0,0.08)',
                background: '#000'
              }}
            >
              {/* Video Player */}
              <div className="position-relative" style={{ paddingTop: '56.25%' }}>
                <video 
                  controls 
                  className="position-absolute top-0 start-0 w-100 h-100"
                  style={{
                    objectFit: 'cover',
                    borderRadius: '20px 20px 0 0'
                  }}
                  onPlay={() => setIsVideoPlaying(true)}
                  onPause={() => setIsVideoPlaying(false)}
                  poster="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200"
                >
                  <source src={props.video || "https://www.w3schools.com/html/mov_bbb.mp4"} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Play Button Overlay */}
                {!isVideoPlaying && (
                  <div 
                    className="position-absolute top-50 start-50 translate-middle"
                    style={{
                      width: '80px',
                      height: '80px',
                      background: 'rgba(62, 180, 137, 0.95)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 10px 40px rgba(62, 180, 137, 0.5)',
                      border: '4px solid rgba(255, 255, 255, 0.3)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.1)';
                      e.currentTarget.style.background = '#3eb489';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.background = 'rgba(62, 180, 137, 0.95)';
                    }}
                  >
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </div>
                )}
              </div>

              {/* Video Info */}
              <div className="p-4" style={{ background: 'white', borderRadius: '0 0 20px 20px' }}>
                <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                  <div>
                    <h5 className="fw-bold mb-2" style={{ color: '#1a1a1a', fontSize: '1.15rem' }}>
                      Pakistan's Northern Beauty in 4K
                    </h5>
                    <div className="d-flex flex-wrap gap-3 align-items-center">
                      <span className="d-flex align-items-center gap-1 text-muted" style={{ fontSize: '0.875rem' }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polygon points="23 7 16 12 23 17 23 7"></polygon>
                          <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                        </svg>
                        4K Ultra HD
                      </span>
                      <span className="d-flex align-items-center gap-1 text-muted" style={{ fontSize: '0.875rem' }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10"></circle>
                          <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        5:30 min
                      </span>
                      <span className="d-flex align-items-center gap-1 text-muted" style={{ fontSize: '0.875rem' }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                        2.5k views
                      </span>
                    </div>
                  </div>
                  <div className="d-flex gap-2">
                    <button 
                      className="btn btn-sm d-inline-flex align-items-center gap-2"
                      style={{
                        background: '#f0fdf7',
                        color: '#3eb489',
                        borderRadius: '10px',
                        padding: '10px 20px',
                        fontWeight: '600',
                        fontSize: '14px',
                        border: 'none',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = '#3eb489';
                        e.target.style.color = 'white';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = '#f0fdf7';
                        e.target.style.color = '#3eb489';
                      }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="18" cy="5" r="3"></circle>
                        <circle cx="6" cy="12" r="3"></circle>
                        <circle cx="18" cy="19" r="3"></circle>
                        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                      </svg>
                      Share
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Video Features Grid */}
            <div className="row g-3">
              {[
                {
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect>
                      <polyline points="17 2 12 7 7 2"></polyline>
                    </svg>
                  ),
                  title: '4K Quality',
                  description: 'Ultra HD Resolution'
                },
                {
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                      <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                  ),
                  title: 'Drone Shots',
                  description: 'Aerial Perspectives'
                },
                {
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                      <polyline points="2 17 12 22 22 17"></polyline>
                      <polyline points="2 12 12 17 22 12"></polyline>
                    </svg>
                  ),
                  title: 'Epic Landscapes',
                  description: 'Stunning Scenery'
                }
              ].map((feature, index) => (
                <div key={index} className="col-md-4">
                  <div 
                    className="p-3 rounded-3 h-100 d-flex align-items-center gap-3"
                    style={{ 
                      background: 'white', 
                      border: '1px solid #e8e8e8',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#3eb489';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = '#e8e8e8';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <div 
                      className="d-flex align-items-center justify-content-center flex-shrink-0"
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '12px',
                        background: 'rgba(62, 180, 137, 0.1)',
                        color: '#3eb489'
                      }}
                    >
                      {feature.icon}
                    </div>
                    <div>
                      <div className="fw-semibold mb-0" style={{ fontSize: '14px', color: '#1a1a1a' }}>
                        {feature.title}
                      </div>
                      <small className="text-muted">{feature.description}</small>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Photo Gallery Section */}
          <div className="col-lg-4">
            <div 
              className="card border-0 p-4 mb-4"
              style={{
                borderRadius: '20px',
                background: 'white',
                boxShadow: '0 10px 30px rgba(0,0,0,0.08)'
              }}
            >
              <h6 className="fw-bold mb-4" style={{ color: '#1a1a1a' }}>
                Photo Gallery
              </h6>

              <div className="d-flex flex-column gap-3">
                {galleryImages.map((image) => (
                  <div 
                    key={image.id}
                    className="position-relative overflow-hidden"
                    style={{
                      borderRadius: '12px',
                      cursor: 'pointer',
                      height: '120px'
                    }}
                    onMouseEnter={() => setActiveGalleryImage(image.id)}
                    onMouseLeave={() => setActiveGalleryImage(null)}
                  >
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-100 h-100"
                      style={{ 
                        objectFit: 'cover',
                        transform: activeGalleryImage === image.id ? 'scale(1.1)' : 'scale(1)',
                        transition: 'transform 0.5s ease'
                      }}
                    />
                    
                    {/* Overlay */}
                    <div 
                      className="position-absolute bottom-0 w-100 p-3"
                      style={{
                        background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                        color: 'white'
                      }}
                    >
                      <div className="fw-semibold mb-0" style={{ fontSize: '14px' }}>
                        {image.title}
                      </div>
                      <small style={{ opacity: 0.8 }}>{image.category}</small>
                    </div>

                    {/* View Icon */}
                    <div 
                      className="position-absolute top-50 start-50 translate-middle"
                      style={{
                        width: '40px',
                        height: '40px',
                        background: 'rgba(62, 180, 137, 0.9)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        opacity: activeGalleryImage === image.id ? 1 : 0,
                        transition: 'opacity 0.3s ease'
                      }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                to="/gallery"
                className="btn w-100 mt-3"
                style={{
                  background: '#f0fdf7',
                  color: '#3eb489',
                  border: 'none',
                  borderRadius: '10px',
                  padding: '12px',
                  fontWeight: '600',
                  fontSize: '14px',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#3eb489';
                  e.target.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = '#f0fdf7';
                  e.target.style.color = '#3eb489';
                }}
              >
                View Full Gallery
              </Link>
            </div>

            {/* Stats Card */}
            <div 
              className="card border-0 p-4"
              style={{
                borderRadius: '20px',
                background: 'linear-gradient(135deg, #3eb489 0%, #2d9770 100%)',
                boxShadow: '0 20px 60px rgba(62, 180, 137, 0.25)',
                color: 'white'
              }}
            >
              <h6 className="fw-bold mb-4">Media Statistics</h6>
              
              <div className="d-flex flex-column gap-3">
                {[
                  { number: '100+', label: 'HD Photos', icon: '📸' },
                  { number: '20+', label: 'Videos', icon: '🎥' },
                  { number: '50+', label: 'Destinations', icon: '📍' }
                ].map((stat, index) => (
                  <div 
                    key={index}
                    className="d-flex align-items-center justify-content-between p-3 rounded-3"
                    style={{
                      background: 'rgba(255, 255, 255, 0.15)',
                      backdropFilter: 'blur(10px)'
                    }}
                  >
                    <div className="d-flex align-items-center gap-3">
                      <span style={{ fontSize: '1.5rem' }}>{stat.icon}</span>
                      <span className="fw-semibold">{stat.label}</span>
                    </div>
                    <span className="fw-bold" style={{ fontSize: '1.25rem' }}>
                      {stat.number}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="row justify-content-center mt-5 pt-4">
          <div className="col-lg-10">
            <div 
              className="text-center p-5 rounded-4 position-relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #3eb489 0%, #2d9770 100%)',
                boxShadow: '0 20px 60px rgba(62, 180, 137, 0.25)'
              }}
            >
              {/* Background Pattern */}
              <div className="position-absolute w-100 h-100 top-0 start-0" style={{ opacity: 0.1 }}>
                <div style={{
                  backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                  backgroundSize: '20px 20px',
                  width: '100%',
                  height: '100%'
                }}></div>
              </div>

              <div className="position-relative">
                <div className="mb-3">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <h3 className="fw-bold mb-3 text-white" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>
                  Ready to Experience This in Person?
                </h3>
                <p className="text-white mb-4 mx-auto opacity-90" style={{ maxWidth: '600px', fontSize: '1.05rem' }}>
                  Transform these stunning visuals into your own unforgettable memories. Book your adventure today!
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
                      fontSize: '1rem',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'translateY(-3px)';
                      e.target.style.boxShadow = '0 15px 40px rgba(0,0,0,0.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = '0 10px 30px rgba(0,0,0,0.15)';
                    }}
                  >
                    Explore Tours
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </Link>

                  <Link
                    to="/contact"
                    className="btn btn-lg btn-outline-light px-5 py-3 d-inline-flex align-items-center gap-2"
                    style={{
                      borderRadius: '50px',
                      fontWeight: '600',
                      fontSize: '1rem',
                      borderWidth: '2px',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = 'white';
                      e.target.style.color = '#3eb489';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'transparent';
                      e.target.style.color = 'white';
                    }}
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Media;