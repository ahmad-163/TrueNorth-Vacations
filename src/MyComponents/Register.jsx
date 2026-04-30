import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });

  const [focusedField, setFocusedField] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registration data:', formData);
    // Add your registration logic here
  };

  const benefits = [
    { icon: '🎯', text: 'Exclusive member-only deals' },
    { icon: '⚡', text: 'Fast & easy booking' },
    { icon: '🎁', text: 'Special birthday discounts' },
    { icon: '📧', text: 'Early access to new tours' }
  ];

  return (
    <div className="container py-5 position-relative" style={{ zIndex: 2 }}>
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div 
            className="card border-0 shadow-lg overflow-hidden" 
            style={{ 
              borderRadius: '24px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}
          >
            <div className="row g-0">
              {/* Left Side - Benefits */}
              <div className="col-lg-5 d-none d-lg-block position-relative">
                <div 
                  className="h-100 p-5 d-flex flex-column justify-content-center text-white position-relative"
                  style={{
                    background: 'linear-gradient(135deg, #3eb489 0%, #2d9770 100%)',
                    overflow: 'hidden'
                  }}
                >
                  {/* Decorative circles */}
                  <div className="position-absolute" style={{
                    width: '300px',
                    height: '300px',
                    background: 'rgba(255,255,255,0.1)',
                    borderRadius: '50%',
                    top: '-100px',
                    right: '-100px'
                  }}></div>
                  <div className="position-absolute" style={{
                    width: '200px',
                    height: '200px',
                    background: 'rgba(255,255,255,0.1)',
                    borderRadius: '50%',
                    bottom: '-50px',
                    left: '-50px'
                  }}></div>

                  <div className="position-relative" style={{ zIndex: 2 }}>
                    <h2 className="fw-bold mb-4" style={{ fontSize: '2.5rem' }}>
                      Join TrueNorth
                    </h2>
                    <p className="mb-5 fs-5 opacity-75">
                      Create an account and unlock exclusive benefits for your next adventure
                    </p>

                    <div className="d-flex flex-column gap-4">
                      {benefits.map((benefit, index) => (
                        <div key={index} className="d-flex align-items-center gap-3">
                          <div className="d-flex align-items-center justify-content-center rounded-circle" style={{
                            width: '50px',
                            height: '50px',
                            background: 'rgba(255,255,255,0.2)',
                            backdropFilter: 'blur(10px)',
                            fontSize: '1.5rem'
                          }}>
                            {benefit.icon}
                          </div>
                          <span className="fw-semibold">{benefit.text}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-5 p-4 rounded-4" style={{
                      background: 'rgba(255,255,255,0.15)',
                      backdropFilter: 'blur(10px)'
                    }}>
                      <p className="mb-2 small opacity-75">Already have an account?</p>
                      <Link to="/login" className="btn btn-light w-100 py-2 fw-semibold" style={{ borderRadius: '50px' }}>
                        Sign In
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Form */}
              <div className="col-lg-7">
                <div className="p-5">
                  <div className="mb-5">
                    <h3 className="fw-bold mb-2 text-white" style={{ fontSize: '2rem' }}>
                      Create Account
                    </h3>
                    <p className="text-white-50">Fill in your details to get started</p>
                  </div>

                  <form onSubmit={handleSubmit}>
                    {/* Name Fields */}
                    <div className="row g-3 mb-4">
                      <div className="col-md-6">
                        <label className="form-label fw-semibold small text-white">
                          First Name *
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          className="form-control border-0 py-3 px-4"
                          placeholder="John"
                          value={formData.firstName}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('firstName')}
                          onBlur={() => setFocusedField(null)}
                          required
                          style={{
                            background: 'rgba(255, 255, 255, 0.15)',
                            borderRadius: '12px',
                            fontSize: '15px',
                            color: 'white',
                            border: focusedField === 'firstName' ? '2px solid #3eb489' : '2px solid rgba(255, 255, 255, 0.2)',
                            transition: 'all 0.3s ease'
                          }}
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label fw-semibold small text-white">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          className="form-control border-0 py-3 px-4"
                          placeholder="Doe"
                          value={formData.lastName}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('lastName')}
                          onBlur={() => setFocusedField(null)}
                          required
                          style={{
                            background: 'rgba(255, 255, 255, 0.15)',
                            borderRadius: '12px',
                            fontSize: '15px',
                            color: 'white',
                            border: focusedField === 'lastName' ? '2px solid #3eb489' : '2px solid rgba(255, 255, 255, 0.2)',
                            transition: 'all 0.3s ease'
                          }}
                        />
                      </div>
                    </div>

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

                    {/* Phone */}
                    <div className="mb-4">
                      <label className="form-label fw-semibold small text-white">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        className="form-control border-0 py-3 px-4"
                        placeholder="+92 300 1234567"
                        value={formData.phone}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('phone')}
                        onBlur={() => setFocusedField(null)}
                        required
                        style={{
                          background: 'rgba(255, 255, 255, 0.15)',
                          borderRadius: '12px',
                          fontSize: '15px',
                          color: 'white',
                          border: focusedField === 'phone' ? '2px solid #3eb489' : '2px solid rgba(255, 255, 255, 0.2)',
                          transition: 'all 0.3s ease'
                        }}
                      />
                    </div>

                    {/* Password */}
                    <div className="mb-4">
                      <label className="form-label fw-semibold small text-white">
                        Password *
                      </label>
                      <div className="position-relative">
                        <input
                          type={showPassword ? 'text' : 'password'}
                          name="password"
                          className="form-control border-0 py-3 px-4"
                          placeholder="Create a strong password"
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

                    {/* Confirm Password */}
                    <div className="mb-4">
                      <label className="form-label fw-semibold small text-white">
                        Confirm Password *
                      </label>
                      <div className="position-relative">
                        <input
                          type={showConfirmPassword ? 'text' : 'password'}
                          name="confirmPassword"
                          className="form-control border-0 py-3 px-4"
                          placeholder="Re-enter your password"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('confirmPassword')}
                          onBlur={() => setFocusedField(null)}
                          required
                          style={{
                            background: 'rgba(255, 255, 255, 0.15)',
                            borderRadius: '12px',
                            fontSize: '15px',
                            color: 'white',
                            paddingRight: '50px',
                            border: focusedField === 'confirmPassword' ? '2px solid #3eb489' : '2px solid rgba(255, 255, 255, 0.2)',
                            transition: 'all 0.3s ease'
                          }}
                        />
                        <button
                          type="button"
                          className="btn position-absolute top-50 end-0 translate-middle-y"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          style={{ background: 'transparent', border: 'none' }}
                        >
                          {showConfirmPassword ? '🙈' : '👁️'}
                        </button>
                      </div>
                    </div>

                    {/* Terms Checkbox */}
                    <div className="mb-4">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="agreeToTerms"
                          id="agreeToTerms"
                          checked={formData.agreeToTerms}
                          onChange={handleChange}
                          required
                          style={{ 
                            width: '20px', 
                            height: '20px',
                            cursor: 'pointer'
                          }}
                        />
                        <label className="form-check-label ms-2 text-white" htmlFor="agreeToTerms" style={{ cursor: 'pointer' }}>
                          I agree to the <a href="#" style={{ color: '#3eb489', fontWeight: '600' }}>Terms & Conditions</a> and <a href="#" style={{ color: '#3eb489', fontWeight: '600' }}>Privacy Policy</a>
                        </label>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="btn w-100 py-3 border-0 fw-bold mb-3"
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
                      Create Account 🚀
                    </button>

                    {/* Mobile Sign In Link */}
                    <div className="text-center d-lg-none">
                      <p className="text-white-50 small mb-0">
                        Already have an account? <Link to="/login" style={{ color: '#3eb489', fontWeight: '600' }}>Sign In</Link>
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

export default Register;