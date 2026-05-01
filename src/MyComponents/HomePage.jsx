import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import LiveStatsCounter from './LiveStatsCounter';
import CurrentDeals from './CurrentDeals';
import PopularPlaces from './PopularPlaces';
import TravelWithUS from './TravelWithUS';
import Carousel from './Carousel';
import Forthcoming from './Forthcoming';
import Testimonials from './Testimonials';
import AppCTA from './AppCTA';
import Footer from './Footer';

function HomePage() {
  return (
    <>
      <Navbar logo="/logo.png" />
      <Hero banner="/banner.jpg" />
      <LiveStatsCounter />
      <CurrentDeals limit={3} />
      <PopularPlaces limit={3} />
      <TravelWithUS />
      <Carousel />
      <Forthcoming />
      <Testimonials />
      <AppCTA />
      <Footer />
    </>
  );
}

export default HomePage;