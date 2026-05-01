import React from 'react';
import Navbar from './Navbar';
import CurrentDeals from './CurrentDeals';  // showAll={true}
import TravelWithUS from './TravelWithUS';
import Testimonials from './Testimonials';
import Footer from './Footer';
import SigDest from './SigDest';
import Forthcoming from './Forthcoming';
import AppCTA from './AppCTA';

function CurrentDealsPage() {
  return (
    <>
      <Navbar logo="/logo.png" />
      <CurrentDeals showAll={true} />
      <Forthcoming/>     
      <AppCTA/>
      <Footer />
    </>
  );
}

export default CurrentDealsPage;