import React from 'react';
import { useSelector } from 'react-redux';

const Menu = () => {
  const isMenuOpen = useSelector(state => state.showMenu);

  const renderList = () => {
    if (isMenuOpen) {
      return (
        <ul>
          <li>Home</li>
          <li>Project</li>
          <li>Blog</li>
        </ul>
      );
    } else {
      return (
        <></>
      );
    }
  };

  return (
    <nav className={isMenuOpen ? 'active' : ''}>
      {renderList()}
    </nav>
  );
};

export default Menu;
