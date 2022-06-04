import React from 'react';
import Featured from './components/Featured';
import Hero from './components/Hero';
import Navbar from './/components/Navbar.js';

import travel_02 from './components/assets/travel-02.jpg';
import travel_03 from './components/assets/travel-03.jpg';
import Slider from './components/Slider';
import Footer from './components/Footer';
//import Scroll from './components/Scroll';
import Cards from './components/Cards';
import MainArea from './components/MainArea';

function App() {
  return (
    <>
      <Navbar />

      
      <MainArea />
      <Hero />
      <Cards />
      <Featured />
      <Slider
        imageSrc={travel_02}
        title={'Be a Frontier.'}
        subtitle={'Our platform offers a wide variety of unique Experience!'}
      />
      <Slider
        imageSrc={travel_03}
        title={'Your Dreams Come True'}
        subtitle={'Think About The Future'}
        flipped={true}
      />

      <Footer />
    </>
  );
}

export default App;
