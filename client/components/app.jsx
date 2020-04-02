import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import cursorRing from '../util/cursorRing';
import Header from './header';
import Home from './home';
import ProjectLog from './project-log';
import Blog from './blog';
import Menu from './menu';

const App = () => {
  const isMenuOpen = useSelector(state => state.showMenu);
  const [yOffset, setYOffset] = React.useState(0);
  const [pageToScroll, setPageToScroll] = React.useState(0);

  React.useEffect(
    () => {
      cursorRing();
      window.addEventListener('scroll', scrollHandler);
    }, []
  );

  const scrollHandler = () => {
    if (!isMenuOpen) setYOffset(window.pageYOffset);
  };

  React.useEffect(
    () => {
      if (window.location.pathname === '/') {
        if (isMenuOpen) setPageToScroll(yOffset);
        else window.scrollTo(0, pageToScroll);
      }
    }, [isMenuOpen]
  );

  const renderContent = () => {
    if (isMenuOpen) {
      return (
        <>
        </>
      );
    } else {
      return (
        <>
          <Route exact path="/" render={() => <Home />} />
          <Route path="/project" render={() => <ProjectLog />} />
          <Route path="/blog" render={() => <Blog />} />
        </>
      );
    }
  };

  return (
    <main>
      <Router>
        <Switch>
          <>
            <div className='pointer-ring'></div>
            <Header />
            <Menu />
            {renderContent()}
          </>
        </Switch>
      </Router>
    </main>
  );
};

export default App;
