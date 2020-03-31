import React from 'react';
import { useSelector } from 'react-redux';
import cursorRing from '../util/cursorRing';
import Header from './header';
import Home from './home';
import About from './about';
import Project from './project';
import Contact from './contact';
import Footer from './footer';
import Menu from './menu';

const App = () => {
  const isMenuOpen = useSelector(state => state.showMenu);

  React.useEffect(
    () => {
      cursorRing();
    }, []
  );

  const renderPage = () => {
    if (!isMenuOpen) {
      return (
        <>
          <Home />
          <Project />
          <About />
          <Contact />
          <Footer />
        </>
      );
    } else {
      return (
        <>
          <Menu />
        </>
      );
    }
  };

  return (
    <main>
      <div className='pointer-ring'></div>
      <Header />
      {renderPage()}
    </main>
  );
};

export default App;
