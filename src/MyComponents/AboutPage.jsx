import React from 'react';
import Navbar from './Navbar';
import AboutUs from './AboutUs';
import TravelWithUS from './TravelWithUS';
import LiveStatsCounter from './LiveStatsCounter';  // WOW FACTOR
import Carousel from './Carousel';
import Media from './Media';
import Para from './Para';
import Footer from './Footer';

function AboutPage() {
  return (
    <>
      <Navbar logo="/src/assets/logo.png" />
      <AboutUs />                         {/* Our story */}
      <TravelWithUS />                    {/* Our services */}
      <LiveStatsCounter />                {/* 🔥 Achievements */}
      <Carousel />                        {/* Team/journey carousel */}
      <Media />                           {/* Video content */}
      <Para />                            {/* Pakistan context */}
      <Footer />
    </>
  );
}

export default AboutPage;