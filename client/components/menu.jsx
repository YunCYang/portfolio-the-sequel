import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { SHOW_MENU } from '../redux/constants/action-types';

const Menu = () => {
  const isMenuOpen = useSelector(state => state.showMenu);
  const dispatch = useDispatch();

  const renderList = () => {
    if (isMenuOpen) {
      return (
        <ul>
          <li>
            <div className="divider"></div>
          </li>
          <li>
            <Link to='/' className='nav-link' onClick={
              () => {
                dispatch({ type: SHOW_MENU, payload: !isMenuOpen });
                document.getElementsByClassName('pointer-ring')[0].classList.remove('link');
              }
            } onMouseOver={
              () => {
                document.getElementsByClassName('pointer-ring')[0].classList.add('link');
              }
            } onMouseLeave={
              () => {
                document.getElementsByClassName('pointer-ring')[0].classList.remove('link');
              }
            }>Home</Link>
          </li>
          <li>
            <Link to='/project/lacerna' className='nav-link' onClick={
              () => {
                dispatch({ type: SHOW_MENU, payload: !isMenuOpen });
                document.getElementsByClassName('pointer-ring')[0].classList.remove('link');
              }
            } onMouseOver={
              () => {
                document.getElementsByClassName('pointer-ring')[0].classList.add('link');
              }
            } onMouseLeave={
              () => {
                document.getElementsByClassName('pointer-ring')[0].classList.remove('link');
              }
            }>Project</Link>
          </li>
          <li>
            <Link to='/blog' className='nav-link' onClick={
              () => {
                dispatch({ type: SHOW_MENU, payload: !isMenuOpen });
                document.getElementsByClassName('pointer-ring')[0].classList.remove('link');
              }
            } onMouseOver={
              () => {
                document.getElementsByClassName('pointer-ring')[0].classList.add('link');
              }
            } onMouseLeave={
              () => {
                document.getElementsByClassName('pointer-ring')[0].classList.remove('link');
              }
            }>Blog (Under Construction!)</Link>
          </li>
          <li>
            <div className="divider"></div>
          </li>
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
