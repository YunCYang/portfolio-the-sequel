import React from 'react';
import Intro from './intro';
import About from './about';
import Project from './project';
import Contact from './contact';

const Home = () => {
  return (
    <div className='home'>
      <Intro />
      <Project />
      <About />
      <Contact />
    </div>
  );
};

export default Home;
