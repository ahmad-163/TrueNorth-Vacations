import React from 'react';
import Navbar from './Navbar';
import Login from './Login';
import Footer from './Footer';

function LoginPage() {
  return (
    <>
      <Navbar logo="/logo.png" />
      <section 
        className="position-relative d-flex align-items-center justify-content-center"
        style={{
          minHeight: '100vh',
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          paddingTop: '120px',
          paddingBottom: '50px'
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
              <Login />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default LoginPage;