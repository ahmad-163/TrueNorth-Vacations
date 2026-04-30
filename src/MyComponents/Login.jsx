import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const [focusedField, setFocusedField] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login data:', formData);
    // Add your login logic here
  };

  return (
    <div className="container py-5 position-relative" style={{ zIndex: 2 }}>
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div 
            className="card border-0 shadow-lg overflow-hidden" 
            style={{ 
              borderRadius: '24px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)', // Transparent background
              backdropFilter: 'blur(20px)', // Glass effect
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}
          >
            <div className="row g-0">
              {/* Left Side - Image/Branding */}
              <div className="col-lg-6 d-none d-lg-block position-relative">
                <div 
                  className="h-100 position-relative"
                  style={{
                    backgroundImage: 'linear-gradient(135deg, rgba(62, 180, 137, 0.9), rgba(45, 151, 112, 0.9)), url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="p-5 d-flex flex-column justify-content-center h-100 text-white">
                    <div>
                      <h2 className="fw-bold mb-4" style={{ fontSize: '3rem' }}>
                        Welcome Back!
                      </h2>
                      <p className="mb-5 fs-5 opacity-75">
                        Sign in to continue your journey with TrueNorth and explore the beauty of Northern Pakistan
                      </p>

                      {/* Stats */}
                      <div className="row g-4">
                        <div className="col-6">
                          <div className="p-3 rounded-3" style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)' }}>
                            <h3 className="fw-bold mb-1">500+</h3>
                            <p className="mb-0 small opacity-75">Happy Travelers</p>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="p-3 rounded-3" style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)' }}>
                            <h3 className="fw-bold mb-1">50+</h3>
                            <p className="mb-0 small opacity-75">Tour Packages</p>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="p-3 rounded-3" style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)' }}>
                            <h3 className="fw-bold mb-1">4.9★</h3>
                            <p className="mb-0 small opacity-75">Average Rating</p>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="p-3 rounded-3" style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)' }}>
                            <h3 className="fw-bold mb-1">24/7</h3>
                            <p className="mb-0 small opacity-75">Customer Support</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Login Form */}
              <div className="col-lg-6">
                <div className="p-5">
                  <div className="mb-5">
                    <h3 className="fw-bold mb-2 text-white" style={{ fontSize: '2rem' }}>
                      Sign In
                    </h3>
                    <p className="text-white-50">Enter your credentials to access your account</p>
                  </div>

                  <form onSubmit={handleSubmit}>
                    {/* Email */}
                    <div className="mb-4">
                      <label className="form-label fw-semibold small text-white">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        className="form-control border-0 py-3 px-4"
                        placeholder="john.doe@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        required
                        style={{
                          background: 'rgba(255, 255, 255, 0.15)',
                          borderRadius: '12px',
                          fontSize: '15px',
                          color: 'white',
                          border: focusedField === 'email' ? '2px solid #3eb489' : '2px solid rgba(255, 255, 255, 0.2)',
                          transition: 'all 0.3s ease'
                        }}
                      />
                    </div>

                    {/* Password */}
                    <div className="mb-4">
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <label className="form-label fw-semibold small mb-0 text-white">
                          Password *
                        </label>
                        <a href="#" className="small text-white" style={{ fontWeight: '600', textDecoration: 'none' }}>
                          Forgot Password?
                        </a>
                      </div>
                      <div className="position-relative">
                        <input
                          type={showPassword ? 'text' : 'password'}
                          name="password"
                          className="form-control border-0 py-3 px-4"
                          placeholder="Enter your password"
                          value={formData.password}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('password')}
                          onBlur={() => setFocusedField(null)}
                          required
                          style={{
                            background: 'rgba(255, 255, 255, 0.15)',
                            borderRadius: '12px',
                            fontSize: '15px',
                            color: 'white',
                            paddingRight: '50px',
                            border: focusedField === 'password' ? '2px solid #3eb489' : '2px solid rgba(255, 255, 255, 0.2)',
                            transition: 'all 0.3s ease'
                          }}
                        />
                        <button
                          type="button"
                          className="btn position-absolute top-50 end-0 translate-middle-y"
                          onClick={() => setShowPassword(!showPassword)}
                          style={{ background: 'transparent', border: 'none' }}
                        >
                          {showPassword ? '🙈' : '👁️'}
                        </button>
                      </div>
                    </div>

                    {/* Remember Me */}
                    <div className="mb-4">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="rememberMe"
                          id="rememberMe"
                          checked={formData.rememberMe}
                          onChange={handleChange}
                          style={{ 
                            width: '20px', 
                            height: '20px',
                            cursor: 'pointer'
                          }}
                        />
                        <label className="form-check-label ms-2 text-white" htmlFor="rememberMe" style={{ cursor: 'pointer' }}>
                          Remember me for 30 days
                        </label>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="btn w-100 py-3 border-0 fw-bold mb-4"
                      style={{
                        background: 'linear-gradient(135deg, #3eb489 0%, #2d9770 100%)',
                        color: 'white',
                        borderRadius: '12px',
                        fontSize: '16px',
                        letterSpacing: '0.5px',
                        boxShadow: '0 10px 30px rgba(62, 180, 137, 0.3)',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.transform = 'translateY(-2px)';
                        e.target.style.boxShadow = '0 15px 40px rgba(62, 180, 137, 0.4)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = '0 10px 30px rgba(62, 180, 137, 0.3)';
                      }}
                    >
                      Sign In 🔐
                    </button>

                    {/* Divider */}
                    <div className="position-relative mb-4">
                      <hr className="my-4" style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }} />
                      <span 
                        className="position-absolute top-50 start-50 translate-middle px-3 small text-white-50" 
                        style={{ background: 'transparent' }}
                      >
                        or continue with
                      </span>
                    </div>

                    {/* Social Login */}
                    <div className="row g-3 mb-4">
                      <div className="col-6">
                        <button 
                          type="button" 
                          className="btn w-100 py-3 border-0 text-white" 
                          style={{
                            background: 'rgba(255, 255, 255, 0.1)',
                            borderRadius: '12px',
                            fontWeight: '600',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            transition: 'all 0.3s ease'
                          }}
                          onMouseEnter={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.2)'}
                          onMouseLeave={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.1)'}
                        >
                          <span className="me-2">📘</span> Facebook
                        </button>
                      </div>
                      <div className="col-6">
                        <button 
                          type="button" 
                          className="btn w-100 py-3 border-0 text-white" 
                          style={{
                            background: 'rgba(255, 255, 255, 0.1)',
                            borderRadius: '12px',
                            fontWeight: '600',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            transition: 'all 0.3s ease'
                          }}
                          onMouseEnter={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.2)'}
                          onMouseLeave={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.1)'}
                        >
                          <span className="me-2">🔍</span> Google
                        </button>
                      </div>
                    </div>

                    {/* Sign Up Link */}
                    <div className="text-center">
                      <p className="text-white-50 mb-0">
                        Don't have an account? <Link to="/register" style={{ color: '#3eb489', fontWeight: '600', textDecoration: 'none' }}>Create Account</Link>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;