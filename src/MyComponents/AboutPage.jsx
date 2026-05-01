import React from 'react';
import Navbar from './Navbar';
import AboutUs from './AboutUs';
import TravelWithUS from './TravelWithUS';
import LiveStatsCounter from './LiveStatsCounter';  // WOW FACTOR
import Carousel from './Carousel';
import Media from './Media';
import Para from './Para';
import Footer from './Footer';
import Testimonials from './Testimonials';

function AboutPage() {
  return (
    <>
      <Navbar logo="/src/assets/logo.png" />
      <AboutUs />   
      <Para /> 
      <TravelWithUS/>
      <LiveStatsCounter/>
      <Testimonials/>                    
      <Footer />
    </>
  );
}

export default AboutPage;