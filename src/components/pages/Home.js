import React from 'react';
import '../../App.js';
import HeroSection from '../HeroSection.js';
import Cards from '../Cards.js';
import Footer from '../Footer.js';

function Home() {
    return(
        <>
          <HeroSection />
          <Cards />
          <Footer />
        </>
    )
}

export default Home;