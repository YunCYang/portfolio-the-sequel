import React from 'react';
import Intro from './intro';
import About from './about';
import Project from './project';
import Contact from './contact';
import Footer from './footer';

const Home = () => {
  return (
    <div className='home'>
      <Intro />
      <Project />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
