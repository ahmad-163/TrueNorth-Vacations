import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function PopularPlaces({ limit }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredCard, setHoveredCard] = useState(null);
  const [viewMode, setViewMode] = useState('grid'); // grid or list
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('rating'); // rating, name, reviews
  const [showFilters, setShowFilters] = useState(false);

  const places = [
    // VALLEYS (15 places)
    {
      id: 1,
      name: 'Hunza Valley',
      category: 'valley',
      description: 'Known for its breathtaking landscapes, apricot blossoms, and ancient forts.',
      image: 'https://images.pexels.com/photos/28319618/pexels-photo-28319618.jpeg',
      location: 'Gilgit-Baltistan',
      rating: 4.9,
      reviews: 245,
      featured: true,
      altitude: '2,438m',
      bestTime: 'March-October'
    },
    {
      id: 2,
      name: 'Swat Valley',
      category: 'valley',
      description: 'The Switzerland of Pakistan with lush meadows, rivers, and Buddhist heritage.',
      image: 'https://images.pexels.com/photos/12885115/pexels-photo-12885115.jpeg',
      location: 'Khyber Pakhtunkhwa',
      rating: 4.7,
      reviews: 198,
      featured: true,
      altitude: '980m',
      bestTime: 'April-October'
    },
    {
      id: 3,
      name: 'Murree',
      category: 'valley',
      description: 'Colonial-era hill station with pine forests, Mall Road, and scenic viewpoints.',
      image: 'https://images.unsplash.com/photo-1622988592277-e55ded3816e7?w=600&auto=format&fit=crop&q=60',
      location: 'Punjab',
      rating: 4.6,
      reviews: 187,
      altitude: '2,291m',
      bestTime: 'May-September'
    },
    {
      id: 4,
      name: 'Karimabad',
      category: 'valley',
      description: 'Historic town in Hunza with Baltit Fort and panoramic mountain vistas.',
      image: 'https://plus.unsplash.com/premium_photo-1697729751540-7d56d522b52c?w=600&auto=format&fit=crop&q=60',
      location: 'Gilgit-Baltistan',
      rating: 4.8,
      reviews: 234,
      altitude: '2,500m',
      bestTime: 'April-October'
    },
    {
      id: 5,
      name: 'Naran Kaghan',
      category: 'valley',
      description: 'Alpine valley with Lake Saif-ul-Malook, Babusar Pass, and lush meadows.',
      image: 'https://images.unsplash.com/photo-1658577524863-2a37e7e4fe33?w=600&auto=format&fit=crop&q=60',
      location: 'Khyber Pakhtunkhwa',
      rating: 4.6,
      reviews: 276,
      featured: true,
      altitude: '2,409m',
      bestTime: 'May-September'
    },
    // Add more places here (keeping it shorter for readability)
    {
      id: 16,
      name: 'Fairy Meadows',
      category: 'mountain',
      description: 'Base camp for Nanga Parbat (8126m), offering spectacular Himalayan views.',
      image: 'https://northerndiscover.com/wp-content/uploads/2025/10/Fairy-Meadows-Travel-Guide.webp',
      location: 'Gilgit-Baltistan',
      rating: 4.8,
      reviews: 189,
      featured: true,
      altitude: '3,300m',
      bestTime: 'June-September'
    },
    {
      id: 24,
      name: 'Saif-ul-Malook',
      category: 'lake',
      description: 'Legendary alpine lake at 10,578 ft with folklore of prince and fairy.',
      image: 'https://visitsilkroad.org/wp-content/uploads/2021/04/Saif-Ul-Malook-Lake-featured_image2.jpg',
      location: 'Khyber Pakhtunkhwa',
      rating: 4.9,
      reviews: 456,
      featured: true,
      altitude: '3,224m',
      bestTime: 'June-September'
    },
    {
      id: 31,
      name: 'Lahore Fort',
      category: 'historical',
      description: 'UNESCO site with Sheesh Mahal, Alamgiri Gate, and Mughal architecture.',
      image: 'https://vepakistan.com/wp-content/uploads/2024/05/1200px-Lahore_Fort_view_from_Baradari.jpg',
      location: 'Punjab',
      rating: 4.7,
      reviews: 523,
      altitude: '217m',
      bestTime: 'October-March'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Destinations', icon: '🗺️', count: places.length },
    { id: 'valley', name: 'Valleys', icon: '🏞️', count: places.filter(p => p.category === 'valley').length },
    { id: 'mountain', name: 'Mountains', icon: '⛰️', count: places.filter(p => p.category === 'mountain').length },
    { id: 'lake', name: 'Lakes', icon: '🏔️', count: places.filter(p => p.category === 'lake').length },
    { id: 'historical', name: 'Historical', icon: '🕌', count: places.filter(p => p.category === 'historical').length },
    { id: 'desert', name: 'Deserts', icon: '🏜️', count: places.filter(p => p.category === 'desert').length },
    { id: 'coastal', name: 'Coastal', icon: '🌊', count: places.filter(p => p.category === 'coastal').length }
  ];

  // Filtering and sorting logic
  let filteredPlaces = selectedCategory === 'all' 
    ? places 
    : places.filter(place => place.category === selectedCategory);

  if (searchQuery) {
    filteredPlaces = filteredPlaces.filter(place => 
      place.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      place.location.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  // Sorting
  filteredPlaces = [...filteredPlaces].sort((a, b) => {
    switch(sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'name':
        return a.name.localeCompare(b.name);
      case 'reviews':
        return b.reviews - a.reviews;
      default:
        return 0;
    }
  });

  // Apply limit if provided
  if (limit) {
    filteredPlaces = filteredPlaces.slice(0, limit);
  }

  return (
    <div className="bg-white">
      {/* Hero Section with Particle Effect */}
      <section 
        className="position-relative d-flex align-items-center justify-content-center text-white overflow-hidden"
        style={{
          minHeight: '65vh',
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Animated Particles */}
        <div className="position-absolute w-100 h-100">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="position-absolute"
              style={{
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                background: 'white',
                borderRadius: '50%',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `twinkle ${Math.random() * 3 + 2}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`,
                opacity: Math.random() * 0.7 + 0.3
              }}
            />
          ))}
        </div>

        <div className="container text-center position-relative" style={{ marginTop: '80px', zIndex: 2 }}>
          <div 
            className="badge px-4 py-2 mb-4"
            style={{
              background: '#3eb489',
              fontSize: '13px',
              fontWeight: '700',
              letterSpacing: '2px',
              borderRadius: '50px',
              boxShadow: '0 10px 30px rgba(62, 180, 137, 0.4)'
            }}
          >
            🌍 DISCOVER PAKISTAN
          </div>
          
          <h1 className="display-2 fw-bold mb-4" style={{ 
            letterSpacing: '-2px',
            textShadow: '0 10px 30px rgba(0,0,0,0.5)'
          }}>
            Popular Destinations
          </h1>
          
          <p className="lead mb-5 fs-3 opacity-90">
            Explore {places.length}+ stunning locations across Pakistan
          </p>

          {/* Quick Stats */}
          <div className="row justify-content-center g-3">
            {[
              { number: '41+', label: 'Destinations' },
              { number: '4.8★', label: 'Avg Rating' },
              { number: '2.5K+', label: 'Reviews' }
            ].map((stat, i) => (
              <div key={i} className="col-auto">
                <div 
                  className="p-3 rounded-3"
                  style={{
                    background: 'rgba(255, 255, 255, 0.15)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    minWidth: '120px'
                  }}
                >
                  <div className="fw-bold fs-4 mb-1">{stat.number}</div>
                  <div className="small opacity-75">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes twinkle {
            0%, 100% {
              opacity: 0.3;
              transform: scale(1);
            }
            50% {
              opacity: 1;
              transform: scale(1.5);
            }
          }
        `}</style>
      </section>

      {/* Advanced Filter Bar - NOT sticky (removed position sticky, top, zIndex) */}
      <section className="shadow-sm" style={{ 
        background: '#fafbfc', 
        borderBottom: '2px solid #e8e8e8'
      }}>
        <div className="container py-3">
          {/* Top Row - Search and View Toggle */}
          <div className="row align-items-center g-3 mb-3">
            <div className="col-lg-6">
              <div className="position-relative">
                <input
                  type="text"
                  className="form-control ps-5 py-3 border-0"
                  placeholder="Search destinations, locations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    background: 'white',
                    borderRadius: '50px',
                    fontSize: '15px',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
                  }}
                />
                <svg 
                  className="position-absolute top-50 translate-middle-y ms-3"
                  style={{ left: '8px' }}
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="#6b7280" 
                  strokeWidth="2"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.35-4.35"></path>
                </svg>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="d-flex justify-content-end gap-2 flex-wrap">
                {/* Sort Dropdown */}
                <select
                  className="form-select"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  style={{
                    width: 'auto',
                    borderRadius: '50px',
                    border: '2px solid #e8e8e8',
                    padding: '8px 16px',
                    fontSize: '14px',
                    fontWeight: '600'
                  }}
                >
                  <option value="rating">Highest Rated</option>
                  <option value="name">A to Z</option>
                  <option value="reviews">Most Reviewed</option>
                </select>

                {/* View Mode Toggle */}
                <div 
                  className="btn-group"
                  style={{
                    background: 'white',
                    borderRadius: '50px',
                    padding: '4px',
                    border: '2px solid #e8e8e8'
                  }}
                >
                  <button
                    className="btn btn-sm"
                    onClick={() => setViewMode('grid')}
                    style={{
                      background: viewMode === 'grid' ? '#3eb489' : 'transparent',
                      color: viewMode === 'grid' ? 'white' : '#6b7280',
                      border: 'none',
                      borderRadius: '50px',
                      padding: '8px 16px',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="3" width="7" height="7"></rect>
                      <rect x="14" y="3" width="7" height="7"></rect>
                      <rect x="14" y="14" width="7" height="7"></rect>
                      <rect x="3" y="14" width="7" height="7"></rect>
                    </svg>
                  </button>
                  <button
                    className="btn btn-sm"
                    onClick={() => setViewMode('list')}
                    style={{
                      background: viewMode === 'list' ? '#3eb489' : 'transparent',
                      color: viewMode === 'list' ? 'white' : '#6b7280',
                      border: 'none',
                      borderRadius: '50px',
                      padding: '8px 16px',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="8" y1="6" x2="21" y2="6"></line>
                      <line x1="8" y1="12" x2="21" y2="12"></line>
                      <line x1="8" y1="18" x2="21" y2="18"></line>
                      <line x1="3" y1="6" x2="3.01" y2="6"></line>
                      <line x1="3" y1="12" x2="3.01" y2="12"></line>
                      <line x1="3" y1="18" x2="3.01" y2="18"></line>
                    </svg>
                  </button>
                </div>

                {/* Filter Toggle Button */}
                <button
                  className="btn px-4"
                  onClick={() => setShowFilters(!showFilters)}
                  style={{
                    background: showFilters ? '#3eb489' : 'white',
                    color: showFilters ? 'white' : '#1a1a1a',
                    border: '2px solid ' + (showFilters ? '#3eb489' : '#e8e8e8'),
                    borderRadius: '50px',
                    fontWeight: '600',
                    fontSize: '14px'
                  }}
                >
                  <svg className="me-2" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                  </svg>
                  Filters
                </button>
              </div>
            </div>
          </div>

          {/* Category Pills - Collapsible */}
          <div 
            className="overflow-hidden"
            style={{
              maxHeight: showFilters ? '500px' : '0',
              transition: 'max-height 0.3s ease',
              opacity: showFilters ? 1 : 0
            }}
          >
            <div className="d-flex gap-2 flex-wrap pt-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className="btn px-4 py-2 border-0 d-inline-flex align-items-center gap-2"
                  style={{
                    background: selectedCategory === category.id 
                      ? 'linear-gradient(135deg, #3eb489 0%, #2d9770 100%)'
                      : 'white',
                    color: selectedCategory === category.id ? 'white' : '#1a1a1a',
                    borderRadius: '50px',
                    fontWeight: '600',
                    fontSize: '14px',
                    border: selectedCategory === category.id ? 'none' : '2px solid #e8e8e8',
                    transition: 'all 0.3s ease',
                    boxShadow: selectedCategory === category.id ? '0 8px 20px rgba(62, 180, 137, 0.3)' : 'none',
                    transform: selectedCategory === category.id ? 'translateY(-2px)' : 'none'
                  }}
                >
                  <span>{category.icon}</span>
                  <span>{category.name}</span>
                  <span 
                    className="badge rounded-pill"
                    style={{
                      background: selectedCategory === category.id 
                        ? 'rgba(255, 255, 255, 0.25)' 
                        : 'rgba(62, 180, 137, 0.1)',
                      color: selectedCategory === category.id ? 'white' : '#3eb489',
                      fontSize: '11px',
                      padding: '4px 8px'
                    }}
                  >
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Places Section */}
      <section className="py-5" style={{ background: '#f8fafb', minHeight: '500px' }}>
        <div className="container">
          {/* Results Info */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <h5 className="fw-bold mb-1">
                {filteredPlaces.length} {filteredPlaces.length === 1 ? 'Destination' : 'Destinations'} Found
              </h5>
              <p className="text-muted small mb-0">
                {selectedCategory !== 'all' && `Filtered by: ${categories.find(c => c.id === selectedCategory)?.name}`}
                {searchQuery && ` • Search: "${searchQuery}"`}
              </p>
            </div>
            
            {filteredPlaces.length > 0 && (
              <button 
                className="btn btn-sm"
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                style={{
                  background: 'white',
                  border: '2px solid #e8e8e8',
                  borderRadius: '50px',
                  padding: '8px 20px',
                  fontWeight: '600',
                  fontSize: '14px'
                }}
              >
                Clear Filters
              </button>
            )}
          </div>

          {/* Grid View */}
          {viewMode === 'grid' && (
            <div className="row g-4">
              {filteredPlaces.map((place, index) => (
                <div 
                  key={place.id} 
                  className="col-lg-4 col-md-6"
                  style={{
                    animation: `fadeInUp 0.5s ease ${index * 0.1}s both`
                  }}
                >
                  <div 
                    className="card border-0 h-100 overflow-hidden"
                    onMouseEnter={() => setHoveredCard(place.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    style={{
                      borderRadius: '24px',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      transform: hoveredCard === place.id ? 'translateY(-12px)' : 'none',
                      boxShadow: hoveredCard === place.id 
                        ? '0 25px 50px rgba(62, 180, 137, 0.2)' 
                        : '0 4px 20px rgba(0,0,0,0.08)',
                      cursor: 'pointer'
                    }}
                  >
                    {/* Image with Parallax Effect */}
                    <div className="position-relative overflow-hidden" style={{ height: '280px' }}>
                      <img 
                        src={place.image} 
                        alt={place.name}
                        className="w-100 h-100"
                        style={{
                          objectFit: 'cover',
                          transition: 'all 0.6s ease',
                          transform: hoveredCard === place.id ? 'scale(1.15)' : 'scale(1)',
                          filter: hoveredCard === place.id ? 'brightness(1.1)' : 'brightness(1)'
                        }}
                      />
                      
                      {/* Gradient Overlay */}
                      <div 
                        className="position-absolute w-100 h-100 top-0 start-0"
                        style={{
                          background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.6) 100%)',
                          opacity: hoveredCard === place.id ? 1 : 0.7,
                          transition: 'opacity 0.3s ease'
                        }}
                      />

                      {/* Featured Badge */}
                      {place.featured && (
                        <div className="position-absolute top-0 start-0 m-3">
                          <span 
                            className="badge px-3 py-2 d-inline-flex align-items-center gap-1"
                            style={{
                              background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                              borderRadius: '50px',
                              fontSize: '12px',
                              fontWeight: '700',
                              boxShadow: '0 5px 15px rgba(245, 158, 11, 0.4)',
                              border: '1px solid rgba(255, 255, 255, 0.3)'
                            }}
                          >
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                            </svg>
                            Featured
                          </span>
                        </div>
                      )}

                      {/* Rating - Top Right */}
                      <div className="position-absolute top-0 end-0 m-3">
                        <div 
                          className="px-3 py-2 rounded-pill d-inline-flex align-items-center gap-2"
                          style={{
                            background: 'rgba(62, 180, 137, 0.95)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(255, 255, 255, 0.3)'
                          }}
                        >
                          <span style={{ color: '#fbbf24', fontSize: '14px' }}>★</span>
                          <span className="fw-bold text-white" style={{ fontSize: '14px' }}>
                            {place.rating}
                          </span>
                        </div>
                      </div>

                      {/* Quick Info - Bottom Overlay */}
                      <div 
                        className="position-absolute bottom-0 start-0 end-0 p-3"
                        style={{
                          transform: hoveredCard === place.id ? 'translateY(0)' : 'translateY(100%)',
                          transition: 'transform 0.3s ease'
                        }}
                      >
                        <div 
                          className="d-flex gap-2"
                          style={{
                            background: 'rgba(0, 0, 0, 0.6)',
                            backdropFilter: 'blur(10px)',
                            borderRadius: '12px',
                            padding: '10px'
                          }}
                        >
                          <div className="flex-fill text-center text-white">
                            <div className="small opacity-75 mb-1">Altitude</div>
                            <div className="fw-bold" style={{ fontSize: '13px' }}>{place.altitude}</div>
                          </div>
                          <div 
                            style={{
                              width: '1px',
                              background: 'rgba(255, 255, 255, 0.2)'
                            }}
                          />
                          <div className="flex-fill text-center text-white">
                            <div className="small opacity-75 mb-1">Best Time</div>
                            <div className="fw-bold" style={{ fontSize: '13px' }}>{place.bestTime}</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="card-body p-4">
                      <div className="mb-3">
                        <h5 className="fw-bold mb-2" style={{ 
                          color: '#1a1a1a', 
                          fontSize: '1.2rem',
                          lineHeight: '1.3'
                        }}>
                          {place.name}
                        </h5>
                        <p className="text-muted mb-0" style={{ 
                          fontSize: '0.9rem',
                          lineHeight: '1.6',
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden'
                        }}>
                          {place.description}
                        </p>
                      </div>

                      {/* Location & Reviews */}
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <div className="d-flex align-items-center gap-2 text-muted" style={{ fontSize: '0.85rem' }}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                          </svg>
                          <span className="fw-medium">{place.location}</span>
                        </div>
                        <div className="text-muted" style={{ fontSize: '0.85rem' }}>
                          {place.reviews} reviews
                        </div>
                      </div>

                      {/* CTA Button */}
                      <Link
                        to={`/place/${place.id}`}
                        className="btn w-100 py-3 border-0 fw-bold d-flex align-items-center justify-content-center gap-2"
                        style={{
                          background: hoveredCard === place.id 
                            ? 'linear-gradient(135deg, #3eb489 0%, #2d9770 100%)'
                            : '#f0fdf7',
                          color: hoveredCard === place.id ? 'white' : '#3eb489',
                          borderRadius: '50px',
                          fontSize: '14px',
                          transition: 'all 0.3s ease',
                          boxShadow: hoveredCard === place.id ? '0 8px 20px rgba(62, 180, 137, 0.3)' : 'none',
                          letterSpacing: '0.3px'
                        }}
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10"></circle>
                          <polyline points="12 16 16 12 12 8"></polyline>
                          <line x1="8" y1="12" x2="16" y2="12"></line>
                        </svg>
                        Explore Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* List View */}
          {viewMode === 'list' && (
            <div className="d-flex flex-column gap-3">
              {filteredPlaces.map((place, index) => (
                <div 
                  key={place.id}
                  className="card border-0 overflow-hidden"
                  onMouseEnter={() => setHoveredCard(place.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{
                    borderRadius: '20px',
                    transition: 'all 0.3s ease',
                    boxShadow: hoveredCard === place.id 
                      ? '0 15px 40px rgba(62, 180, 137, 0.15)' 
                      : '0 2px 10px rgba(0,0,0,0.05)',
                    animation: `fadeInLeft 0.4s ease ${index * 0.05}s both`
                  }}
                >
                  <div className="row g-0">
                    <div className="col-md-4">
                      <div className="position-relative h-100" style={{ minHeight: '200px' }}>
                        <img
                          src={place.image}
                          alt={place.name}
                          className="w-100 h-100"
                          style={{
                            objectFit: 'cover',
                            transition: 'transform 0.4s ease',
                            transform: hoveredCard === place.id ? 'scale(1.1)' : 'scale(1)'
                          }}
                        />
                        {place.featured && (
                          <div className="position-absolute top-0 start-0 m-3">
                            <span 
                              className="badge px-3 py-2"
                              style={{
                                background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                                borderRadius: '50px',
                                fontSize: '11px'
                              }}
                            >
                              ★ Featured
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body p-4">
                        <div className="d-flex justify-content-between align-items-start mb-3">
                          <div>
                            <h4 className="fw-bold mb-2">{place.name}</h4>
                            <div className="d-flex align-items-center gap-3 mb-2">
                              <div className="d-flex align-items-center gap-1">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2">
                                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                  <circle cx="12" cy="10" r="3"></circle>
                                </svg>
                                <span className="text-muted small">{place.location}</span>
                              </div>
                              <span className="text-muted">•</span>
                              <span className="text-muted small">{place.altitude}</span>
                            </div>
                          </div>
                          <div className="text-end">
                            <div 
                              className="px-3 py-2 rounded-pill d-inline-flex align-items-center gap-2"
                              style={{
                                background: '#3eb489',
                                color: 'white'
                              }}
                            >
                              <span style={{ color: '#fbbf24' }}>★</span>
                              <span className="fw-bold">{place.rating}</span>
                            </div>
                            <div className="text-muted small mt-1">{place.reviews} reviews</div>
                          </div>
                        </div>
                        <p className="text-muted mb-3">{place.description}</p>
                        <div className="d-flex align-items-center gap-3">
                          <span className="badge px-3 py-2" style={{ background: '#f0fdf7', color: '#3eb489' }}>
                            Best: {place.bestTime}
                          </span>
                          <Link
                            to={`/place/${place.id}`}
                            className="btn px-4 py-2 border-0 ms-auto"
                            style={{
                              background: hoveredCard === place.id 
                                ? 'linear-gradient(135deg, #3eb489 0%, #2d9770 100%)'
                                : '#f0fdf7',
                              color: hoveredCard === place.id ? 'white' : '#3eb489',
                              borderRadius: '50px',
                              fontWeight: '600',
                              fontSize: '14px',
                              transition: 'all 0.3s ease'
                            }}
                          >
                            View Details →
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* No Results */}
          {filteredPlaces.length === 0 && (
            <div className="text-center py-5">
              <div className="mb-4" style={{ fontSize: '5rem', opacity: 0.3 }}>🔍</div>
              <h4 className="fw-bold mb-2">No destinations found</h4>
              <p className="text-muted mb-4">Try adjusting your filters or search query</p>
              <button 
                className="btn px-5 py-3"
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                style={{
                  background: 'linear-gradient(135deg, #3eb489 0%, #2d9770 100%)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '50px',
                  fontWeight: '600'
                }}
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>

        <style>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeInLeft {
            from {
              opacity: 0;
              transform: translateX(-20px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}</style>
      </section>

      {/* CTA Section */}
      <section className="py-5 text-center" style={{ background: 'white' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h3 className="fw-bold mb-3" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
                Can't Find Your Dream Destination?
              </h3>
              <p className="text-muted mb-4 fs-5">
                Let our travel experts create a personalized itinerary just for you
              </p>
              <Link
                to="/contact"
                className="btn btn-lg px-5 py-3 border-0 d-inline-flex align-items-center gap-2"
                style={{
                  background: 'linear-gradient(135deg, #3eb489 0%, #2d9770 100%)',
                  color: 'white',
                  borderRadius: '50px',
                  fontWeight: '600',
                  fontSize: '16px',
                  boxShadow: '0 10px 30px rgba(62, 180, 137, 0.3)'
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
                Customize Your Trip
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PopularPlaces;