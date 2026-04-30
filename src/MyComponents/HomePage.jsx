import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';  // WOW FACTOR
import PopularPlaces from './PopularPlaces';  // limit={6}
import CurrentDeals from './CurrentDeals';  // limit={3}
import LiveStatsCounter from './LiveStatsCounter';  // WOW FACTOR
import TravelWithUS from './TravelWithUS';
import Forthcoming from './Forthcoming';
import Testimonials from './Testimonials';  // WOW FACTOR
import Media from './Media';
import Para from './Para';
import AppCTA from './AppCTA';  // WOW FACTOR
import Footer from './Footer';

function HomePage() {
  return (
    <>
      <Navbar logo="/images/logo.png" />
      <Hero  banner="/images/banner.jpg"/>                    {/* 🔥 Epic entrance */}
      <PopularPlaces limit={6} />         {/* Top 6 destinations */}
      <CurrentDeals limit={3} />          {/* Top 3 deals */}
      <LiveStatsCounter />                {/* 🔥 Animated numbers */}
      <TravelWithUS />                    {/* Why choose us */}
      <Forthcoming />                     {/* Upcoming tours */}
      <Testimonials />            {/* 🔥 Social proof */}
      <Media />                           {/* Video gallery */}
      <Para />                            {/* Pakistan info */}
      <AppCTA />                          {/* 🔥 Download app */}
      <Footer />
    </>
  );
}
export default HomePage;