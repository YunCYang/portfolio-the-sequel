import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import cursorRing from '../util/cursorRing';
import Header from './header';
import Home from './home';
import About from './about';
import Project from './project';
import Contact from './contact';
import Footer from './footer';
import Menu from './menu';

const App = () => {

  cursorRing();

  return (
    <Provider store={store}>
      <main>
        <div className='pointer-ring'></div>
        <Header />
        <Home />
        <Project />
        <About />
        <Contact />
        <Footer />
        <Menu />
      </main>
    </Provider>
  );
};

export default App;
