import React from 'react';
import Navbar from './Navbar';
import PopularPlaces from './PopularPlaces';  // showAll={true}
import Maps from './Maps';  // WOW FACTOR
import Para from './Para';
import Footer from './Footer';
import Media from './Media';
import SigDest from './SigDest';

function PopularPlacesPage() {
  return (
    <>
      <Navbar logo="/logo.png" />
      <PopularPlaces showAll={true} />   
      <SigDest/>
      <Media/>
      <Footer/>                           
    </>
  );
}

export default PopularPlacesPage;