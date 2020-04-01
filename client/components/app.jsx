import React from 'react';
// import { useSelector } from 'react-redux';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import cursorRing from '../util/cursorRing';
import Header from './header';
import Home from './home';
import ProjectLog from './project-log';
import Blog from './blog';
import Footer from './footer';
import Menu from './menu';

const App = () => {
  // const isMenuOpen = useSelector(state => state.showMenu);

  React.useEffect(
    () => {
      cursorRing();
    }, []
  );

  return (
    <main>
      <Router>
        <Switch>
          <>
            <div className='pointer-ring'></div>
            <Header />
            <Menu />
            <Route exact path="/" render={() => <Home />} />
            <Route path="/project" render={() => <ProjectLog />} />
            <Route path="/blog" render={() => <Blog />} />
            <Footer />
          </>
        </Switch>
      </Router>
    </main>
  );
};

export default App;
