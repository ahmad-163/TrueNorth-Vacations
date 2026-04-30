import React from 'react';
import Navbar from './Navbar';
import PopularPlaces from './PopularPlaces';  // showAll={true}
import Maps from './Maps';  // WOW FACTOR
import Para from './Para';
import Footer from './Footer';

function PopularPlacesPage() {
  return (
    <>
      <Navbar logo="/src/assets/logo.png" />
      <PopularPlaces showAll={true} />    {/* All 41 destinations */}
      <Maps />                  {/* 🔥 Explore by region */}
      <Para />                            {/* Context about Pakistan */}
      <Footer />
    </>
  );
}

export default PopularPlacesPage;