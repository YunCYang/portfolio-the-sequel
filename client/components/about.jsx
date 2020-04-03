import React from 'react';

const About = () => {
  const [selectedBlock, setSelectedBlock] = React.useState('');

  const clickHandler = (element, restArr) => {
    if (!selectedBlock) {
      setSelectedBlock(element);
      document.getElementsByClassName('about-grid')[0].classList.add(`select-${element}__lg`);
      document.getElementsByClassName('about-grid')[0].classList.remove(`hover-${element}__sm`);
      document.getElementsByClassName('about-grid')[0].classList.add(`hover-${element}__lg`);
    } else {
      if (selectedBlock === element) {
        setSelectedBlock('');
        document.getElementsByClassName('about-grid')[0].classList.remove(`select-${element}__lg`);
        document.getElementsByClassName('about-grid')[0].classList.remove(`hover-${element}__lg`);
        document.getElementsByClassName('about-grid')[0].classList.add(`hover-${element}__sm`);
      } else {
        setSelectedBlock(element);
        document.getElementsByClassName('about-grid')[0].classList.add(`select-${element}__lg`);
        document.getElementsByClassName('about-grid')[0].classList.remove(`select-${selectedBlock}__lg`);
        document.getElementsByClassName('about-grid')[0].classList.add(`hover-${element}__lg`);
        document.getElementsByClassName('about-grid')[0].classList.remove(`hover-${element}__xs__${selectedBlock}`);
      }
    }
  };

  const mouseEnterHandler = element => {
    if (!selectedBlock) {
      document.getElementsByClassName('about-grid')[0].classList.add(`hover-${element}__sm`);
    } else {
      if (selectedBlock === element) {
        document.getElementsByClassName('about-grid')[0].classList.add(`hover-${element}__lg`);
      } else {
        document.getElementsByClassName('about-grid')[0].classList.add(`hover-${element}__xs__${selectedBlock}`);
      }
    }
  };

  const mouseLeaveHandler = element => {
    if (!selectedBlock) {
      document.getElementsByClassName('about-grid')[0].classList.remove(`hover-${element}__sm`);
    } else {
      if (selectedBlock === element) {
        document.getElementsByClassName('about-grid')[0].classList.remove(`hover-${element}__lg`);
      } else {
        document.getElementsByClassName('about-grid')[0].classList.remove(`hover-${element}__xs__${selectedBlock}`);
      }
    }
  };

  const renderContent = element => {
    if (element === 'info') {
      if (selectedBlock === element) {
        return (
          <div>
            <p>I&apos;m Yun C Yang.</p>
            <p>I enjoy building applications and facing different challenges.</p>
            <p>My skills are constantly growing, check below to see my skills (and resume!)</p>
            <p>When not in front of a computer, you can find me rock climbing outdoor or at gyms.</p>
          </div>
        );
      } else if (!selectedBlock) {
        return (
          <div>
            <p>I&apos;m Yun C Yang.</p>
            <p>Learn more about me... <i className="fas fa-arrow-circle-right"></i></p>
          </div>
        );
      } else {
        return (
          <div>
            <p>Learn more about me</p>
          </div>
        );
      }
    } else if (element === 'skill') {
      if (selectedBlock === element) {
        return (
          <div>
            <pre>
              <p><span>&lt;dl&gt;</span></p>
              <p>  <span>&lt;dt&gt;</span> Front-End Skills <span>&lt;/dt&gt;</span></p>
              <p>  <span>&lt;dd&gt;</span></p>
              <p>    &apos;JS ES6+&apos;, &apos;HTML5&apos;, &apos;CSS3&apos;,</p>
              <p>    &apos;React&apos;, &apos;Redux&apos;, &apos;Sass&apos;,</p>
              <p>    &apos;Bootstrap&apos;, &apos;jQuery&apos;</p>
              <p>  <span>&lt;/dd&gt;</span></p>
              <p>  <span>&lt;dt&gt;</span> Back-End Skills <span>&lt;/dt&gt;</span></p>
              <p>  <span>&lt;dd&gt;</span></p>
              <p>    &apos;Node&apos;, &apos;Express&apos;,</p>
              <p>    &apos;PosgreSQL&apos;, &apos;JWT&apos;</p>
              <p>  <span>&lt;/dd&gt;</span></p>
              <p>  <span>&lt;dt&gt;</span> Dev Tools <span>&lt;/dt&gt;</span></p>
              <p>  <span>&lt;dd&gt;</span></p>
              <p>    &apos;Git&apos;, &apos;Jest&apos;,</p>
              <p>    &apos;Babel&apos;, &apos;Webpack&apos;,</p>
              <p>    &apos;AWS&apos;, &apos;Nginx&apos;</p>
              <p>  <span>&lt;/dd&gt;</span></p>
              <p><span>&lt;/dl&gt;</span></p>
            </pre>
          </div>
        );
      } else if (!selectedBlock) {
        return (
          <div>
            <p><span>&lt;dt&gt;</span> Skills <span>&lt;/dt&gt;</span></p>
          </div>
        );
      } else {
        return (
          <div>
            <p>Skills</p>
          </div>
        );
      }
    } else {
      if (selectedBlock === element) {
        return (
          <div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        );
      } else {
        return (
          <div>
            <p>Links and Resume</p>
          </div>
        );
      }
    }
  };

  return (
    <div className='about'>
      <div className='about-wrapper'>
        <span>hi,</span>
        <div className="about-grid">
          <div className="about-block__info" onMouseOver={
            () => mouseEnterHandler('info')
          } onMouseLeave={
            () => mouseLeaveHandler('info')
          } onClick={
            () => clickHandler('info', ['skill', 'contact'])
          }>
            {renderContent('info')}
          </div>
          <div className="about-block__skill" onMouseOver={
            () => mouseEnterHandler('skill')
          } onMouseLeave={
            () => mouseLeaveHandler('skill')
          } onClick={
            () => clickHandler('skill', ['info', 'contact'])
          }>
            {renderContent('skill')}
          </div>
          <div className="about-block__contact" onMouseOver={
            () => mouseEnterHandler('contact')
          } onMouseLeave={
            () => mouseLeaveHandler('contact')
          } onClick={
            () => clickHandler('contact', ['info', 'skill'])
          }>
            {renderContent('contact')}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
