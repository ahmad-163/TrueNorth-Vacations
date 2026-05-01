import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import Register from './Register';

function RegisterPage() {
  return (
    <>
     <Navbar logo="/logo.png" />
      <section 
        className="position-relative d-flex align-items-center justify-content-center"
        style={{
          minHeight: '100vh',
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://images.pexels.com/photos/34148033/pexels-photo-34148033.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          paddingTop: '120px',
          paddingBottom: '50px'
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
              <Register />
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default RegisterPage;