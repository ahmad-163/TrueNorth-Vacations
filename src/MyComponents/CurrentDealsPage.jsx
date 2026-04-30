import React from 'react';
import Navbar from './Navbar';
import CurrentDeals from './CurrentDeals';  // showAll={true}
import TravelWithUS from './TravelWithUS';
import Testimonials from './Testimonials';
import Footer from './Footer';

function CurrentDealsPage() {
  return (
    <>
      <Navbar logo="/images/logo.png" />
      <CurrentDeals showAll={true} />     {/* All 10 deals */}
      <TravelWithUS />                    {/* Reassurance */}
      <Testimonials />            {/* 🔥 Social proof */}
      <Footer />
    </>
  );
}

export default CurrentDealsPage;