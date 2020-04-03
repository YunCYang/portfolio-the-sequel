import React from 'react';
import Intro from './intro';
import About from './about';
import Project from './project';
import Footer from './footer';

const Home = () => {
  return (
    <div className='home'>
      <Intro />
      <Project />
      <About />
      <Footer />
    </div>
  );
};

export default Home;
