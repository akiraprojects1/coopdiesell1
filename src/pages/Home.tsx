import React from 'react';
import Hero from '../components/Hero';
import Benefits from '../components/Benefits';
import About from '../components/About';
import Services from '../components/Services';
import Vendors from '../components/Vendors';
import Locations from '../components/Locations';
import Testimonials from '../components/Testimonials';

const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <Benefits />
      <About />
      <Services />
      <Vendors />
      <Locations />
      <Testimonials />
    </main>
  );
};

export default Home;