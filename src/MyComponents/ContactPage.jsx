import React from 'react';
import Navbar from './Navbar';
import ContactUs from './ContactUs';
import Maps from './Maps';  // WOW FACTOR
import TravelWithUS from './TravelWithUS';
import Footer from './Footer';

function ContactPage() {
  return (
    <>
      <Navbar logo="/logo.png" />
      <ContactUs />                   
      <Maps />                
      <Footer />
    </>
  );
}

export default ContactPage;