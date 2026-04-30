import React, { useState } from 'react';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  const contactInfo = [
    {
      icon: '📍',
      title: 'Visit Us',
      details: ['TrueNorth Headquarters', 'F-7 Markaz, Islamabad', 'Pakistan']
    },
    {
      icon: '📞',
      title: 'Call Us',
      details: ['+92 300 1234567', '+92 51 8765432', 'Mon-Sat: 9AM - 6PM']
    },
    {
      icon: '✉️',
      title: 'Email Us',
      details: ['info@truenorth.pk', 'support@truenorth.pk', '24/7 Support']
    }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: '📘', color: '#1877f2' },
    { name: 'Instagram', icon: '📸', color: '#e4405f' },
    { name: 'Twitter', icon: '🐦', color: '#1da1f2' },
    { name: 'WhatsApp', icon: '💬', color: '#25d366' }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section 
        className="position-relative d-flex align-items-center justify-content-center text-white"
        style={{
          minHeight: '50vh',
          backgroundImage: 'linear-gradient(135deg, rgba(62, 180, 137, 0.95), rgba(45, 151, 112, 0.95)), url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container text-center" style={{ marginTop: '80px' }}>
          <span className="badge px-4 py-2 mb-3" style={{
            background: 'rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(10px)',
            fontSize: '13px',
            fontWeight: '600',
            letterSpacing: '2px',
            borderRadius: '50px'
          }}>
            💬 GET IN TOUCH
          </span>
          <h1 className="display-3 fw-bold mb-3" style={{ letterSpacing: '-2px' }}>
            Contact Us
          </h1>
          <p className="lead fs-4">We'd love to hear from you!</p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-5" style={{ marginTop: '-50px' }}>
        <div className="container">
          <div className="row g-4 mb-5">
            {contactInfo.map((info, index) => (
              <div key={index} className="col-md-4">
                <div className="card border-0 h-100 text-center p-4 shadow-sm" style={{
                  borderRadius: '20px',
                  background: 'white',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(62, 180, 137, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
                }}
                >
                  <div className="mb-3" style={{ fontSize: '3.5rem' }}>{info.icon}</div>
                  <h5 className="fw-bold mb-3" style={{ color: '#1a1a1a' }}>{info.title}</h5>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="mb-1" style={{ 
                      color: idx === 0 ? '#3eb489' : '#6b7280',
                      fontWeight: idx === 0 ? '600' : '400',
                      fontSize: '14px'
                    }}>
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-5" style={{ background: '#f8fafb' }}>
        <div className="container">
          <div className="row g-5">
            {/* Contact Form */}
            <div className="col-lg-6">
              <div className="card border-0 shadow-sm p-4" style={{ borderRadius: '20px' }}>
                <h3 className="fw-bold mb-4" style={{ color: '#1a1a1a' }}>
                  Send us a <span style={{ color: '#3eb489' }}>Message</span>
                </h3>
                
                <form onSubmit={handleSubmit}>
                  {/* Name */}
                  <div className="mb-4">
                    <label className="form-label fw-semibold small" style={{ color: '#1a1a1a' }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="form-control border-0 py-3 px-4"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      required
                      style={{
                        background: '#f8fafb',
                        borderRadius: '12px',
                        fontSize: '15px',
                        border: focusedField === 'name' ? '2px solid #3eb489' : '2px solid transparent',
                        transition: 'all 0.3s ease'
                      }}
                    />
                  </div>

                  {/* Email & Phone */}
                  <div className="row g-3 mb-4">
                    <div className="col-md-6">
                      <label className="form-label fw-semibold small" style={{ color: '#1a1a1a' }}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        className="form-control border-0 py-3 px-4"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        required
                        style={{
                          background: '#f8fafb',
                          borderRadius: '12px',
                          fontSize: '15px',
                          border: focusedField === 'email' ? '2px solid #3eb489' : '2px solid transparent',
                          transition: 'all 0.3s ease'
                        }}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-semibold small" style={{ color: '#1a1a1a' }}>
                        Phone Number
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
                        style={{
                          background: '#f8fafb',
                          borderRadius: '12px',
                          fontSize: '15px',
                          border: focusedField === 'phone' ? '2px solid #3eb489' : '2px solid transparent',
                          transition: 'all 0.3s ease'
                        }}
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="mb-4">
                    <label className="form-label fw-semibold small" style={{ color: '#1a1a1a' }}>
                      Subject *
                    </label>
                    <select
                      name="subject"
                      className="form-select border-0 py-3 px-4"
                      value={formData.subject}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('subject')}
                      onBlur={() => setFocusedField(null)}
                      required
                      style={{
                        background: '#f8fafb',
                        borderRadius: '12px',
                        fontSize: '15px',
                        border: focusedField === 'subject' ? '2px solid #3eb489' : '2px solid transparent',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <option value="">Select a subject</option>
                      <option value="booking">Booking Inquiry</option>
                      <option value="custom">Custom Package</option>
                      <option value="support">Customer Support</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="mb-4">
                    <label className="form-label fw-semibold small" style={{ color: '#1a1a1a' }}>
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      className="form-control border-0 py-3 px-4"
                      rows="5"
                      placeholder="Tell us more about your inquiry..."
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      required
                      style={{
                        background: '#f8fafb',
                        borderRadius: '12px',
                        fontSize: '15px',
                        border: focusedField === 'message' ? '2px solid #3eb489' : '2px solid transparent',
                        transition: 'all 0.3s ease',
                        resize: 'none'
                      }}
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit" 
                    className="btn w-100 py-3 border-0 fw-bold"
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
                    Send Message ✉️
                  </button>
                </form>
              </div>
            </div>

            {/* Map & Social */}
            <div className="col-lg-6">
              {/* Map */}
              <div className="card border-0 shadow-sm mb-4 overflow-hidden" style={{ borderRadius: '20px', height: '400px' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.210826111!2d73.04645631521!3d33.71759598070!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfd07891722f%3A0x6059515c3bdb02b6!2sF-7%20Markaz%2C%20Islamabad!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Office Location"
                ></iframe>
              </div>

              {/* Social Links */}
              <div className="card border-0 shadow-sm p-4" style={{ borderRadius: '20px' }}>
                <h5 className="fw-bold mb-4" style={{ color: '#1a1a1a' }}>
                  Follow Us
                </h5>
                <div className="row g-3">
                  {socialLinks.map((social, index) => (
                    <div key={index} className="col-6">
                      <a 
                        href="#" 
                        className="d-flex align-items-center gap-3 p-3 text-decoration-none rounded-3"
                        style={{
                          background: '#f8fafb',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = social.color;
                          e.currentTarget.style.color = 'white';
                          e.currentTarget.style.transform = 'translateX(5px)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = '#f8fafb';
                          e.currentTarget.style.color = '#1a1a1a';
                          e.currentTarget.style.transform = 'translateX(0)';
                        }}
                      >
                        <span style={{ fontSize: '1.5rem' }}>{social.icon}</span>
                        <span className="fw-semibold small">{social.name}</span>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold mb-3" style={{ fontSize: '2.5rem', color: '#1a1a1a' }}>
              Frequently Asked <span style={{ color: '#3eb489' }}>Questions</span>
            </h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="accordion" id="faqAccordion">
                {[
                  {
                    q: 'How do I book a tour?',
                    a: 'You can book a tour by clicking the "Book Now" button on any tour package, filling out the booking form, and our team will contact you within 24 hours to confirm your booking.'
                  },
                  {
                    q: 'What is your cancellation policy?',
                    a: 'We offer free cancellation up to 7 days before your tour starts. Cancellations made within 7 days are subject to a 50% fee. Please contact us for more details.'
                  },
                  {
                    q: 'Do you offer customized tour packages?',
                    a: 'Yes! We specialize in creating customized tour packages based on your preferences, budget, and schedule. Contact us to discuss your dream trip.'
                  },
                  {
                    q: 'What payment methods do you accept?',
                    a: 'We accept bank transfers, credit/debit cards, and mobile payment options like JazzCash and Easypaisa. A 30% deposit is required to confirm your booking.'
                  }
                ].map((faq, index) => (
                  <div key={index} className="accordion-item border-0 mb-3" style={{ borderRadius: '12px', overflow: 'hidden' }}>
                    <h2 className="accordion-header">
                      <button 
                        className="accordion-button collapsed fw-semibold" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target={`#faq${index}`}
                        style={{
                          background: '#f8fafb',
                          color: '#1a1a1a',
                          borderRadius: '12px'
                        }}
                      >
                        {faq.q}
                      </button>
                    </h2>
                    <div id={`faq${index}`} className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                      <div className="accordion-body" style={{ background: 'white' }}>
                        {faq.a}
                      </div>
                    </div>
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

export default ContactUs;