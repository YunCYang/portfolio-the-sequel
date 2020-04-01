import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SHOW_MENU } from '../redux/constants/action-types';

const Header = () => {
  const isMenuOpen = useSelector(state => state.showMenu);
  const dispatch = useDispatch();

  const menuClick = () => isMenuOpen ? 'open' : 'close';

  return (
    <header>
      <div className={`nav-icon ${menuClick()}`} onClick={
        () => {
          dispatch({ type: SHOW_MENU, payload: !isMenuOpen });
        }
      } onMouseOver={
        () => {
          document.getElementsByClassName('pointer-ring')[0].classList.add('link');
        }
      } onMouseLeave={
        () => {
          document.getElementsByClassName('pointer-ring')[0].classList.remove('link');
        }
      }>
        <div className='nav-icon__bar'></div>
      </div>
    </header>
  );
};

export default Header;
