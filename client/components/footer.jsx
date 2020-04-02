import React from 'react';

const Footer = () => {
  return (
    <footer>
      <span className='footer-title'>YUN C YANG</span>
      <div className='footer-link'>
        <a href="mailto:ericeorl2013@gmail.com" target="_blank"
          rel="noopener noreferrer">
          <i className="fas fa-envelope" onMouseOver={
            () => {
              document.getElementsByClassName('pointer-ring')[0].classList.add('link');
            }
          } onMouseLeave={
            () => {
              document.getElementsByClassName('pointer-ring')[0].classList.remove('link');
            }
          }></i>
        </a>
        <a href="https://www.linkedin.com/in/yun-c-yang/" target="_blank"
          rel="noopener noreferrer">
          <i className="fab fa-linkedin" onMouseOver={
            () => {
              document.getElementsByClassName('pointer-ring')[0].classList.add('link');
            }
          } onMouseLeave={
            () => {
              document.getElementsByClassName('pointer-ring')[0].classList.remove('link');
            }
          }></i>
        </a>
        <a href="https://github.com/YunCYang" target="_blank"
          rel="noopener noreferrer">
          <i className="fab fa-github-square" onMouseOver={
            () => {
              document.getElementsByClassName('pointer-ring')[0].classList.add('link');
            }
          } onMouseLeave={
            () => {
              document.getElementsByClassName('pointer-ring')[0].classList.remove('link');
            }
          }></i>
        </a>
      </div>
      <div className='footer-code'>
        <span>Check out the code of this site</span>
        <a href="https://github.com/YunCYang/portfolio-the-sequel" target="_blank"
          rel="noopener noreferrer">
          <i className="fas fa-code" onMouseOver={
            () => {
              document.getElementsByClassName('pointer-ring')[0].classList.add('link');
            }
          } onMouseLeave={
            () => {
              document.getElementsByClassName('pointer-ring')[0].classList.remove('link');
            }
          }></i>
        </a>
      </div>
      <span className='footer-cr'>© Made by Yun C Yang Circa 2020</span>
    </footer>
  );
};

export default Footer;
