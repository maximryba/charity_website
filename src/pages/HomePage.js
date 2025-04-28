import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import Welcome from '../components/Welcome';
import PopularCauses from '../components/PopularCauses';
import FunFacts from '../components/FunFacts';
import Sponsors from '../components/Sponsors';
import ImageSlider from '../components/ImageSlider';
import Footer from '../components/Footer';

import slide1 from '../assets/img/slide1.jpg';
import slide2 from '../assets/img/slide2.jpg';
import slide3 from '../assets/img/slide3.jpg';

const sliderImages = [slide1, slide2, slide3];

const HomePage = () => {
  return (
    <>
      <div className="container">
        <Header />
      </div>
      <Hero />
      <AboutUs />
      <Welcome />
      <PopularCauses />
      <ImageSlider images={sliderImages} interval={3000} />
      <FunFacts />
      <Sponsors />
      <Footer />
    </>
  );
};

export default HomePage;