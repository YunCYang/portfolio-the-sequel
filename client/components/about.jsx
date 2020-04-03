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
        document.getElementsByClassName('about-grid')[0].classList.remove(`hover-${element}__sm`);
      } else {
        setSelectedBlock(element);
        document.getElementsByClassName('about-grid')[0].classList.add(`select-${element}__lg`);
        document.getElementsByClassName('about-grid')[0].classList.remove(`select-${selectedBlock}__lg`);
        document.getElementsByClassName('about-grid')[0].classList.remove(`hover-${selectedBlock}__lg`);
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
            <h3>I&apos;m Yun</h3>
            <div className="divider"></div>
            <p>I enjoy building a varierty of applications and facing new challenges.</p>
            <p>Check below to see my skills, resume and places to find me!</p>
            <p>When not working, you can find me rock climbing outdoor or at gyms.</p>
          </div>
        );
      } else if (!selectedBlock) {
        return (
          <div>
            <h3>I&apos;m Yun</h3>
            <div className="divider"></div>
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
            <p><span>function</span> showSkills<span>() &#123;</span></p>
            <p className='t1'><span>return &#91;</span></p>
            <p className='t2'>&apos;JavaScript ES6+&apos;, &apos;HTML5&apos;, &apos;CSS3&apos;,
              &apos;ReactJs&apos;, &apos;Redux&apos;, &apos;Sass&apos;,
              &apos;Bootstrap&apos;, &apos;jQuery&apos;, &apos;NodeJs&apos;,
              &apos;Express&apos;, &apos;PosgreSQL&apos;, &apos;JWT&apos;,
              &apos;Git&apos;, &apos;Jest&apos;, &apos;Babel&apos;, &apos;API&apos;,
              &apos;Webpack&apos;, &apos;AWS&apos;, &apos;Nginx&apos;, &apos;Figma&apos;</p>
            <p className='t1'><span>&#93;</span></p>
            <p><span>&#125;</span></p>
          </div>
        );
      } else {
        return (
          <div className='sm'>
            <p>showSkills<span>()</span></p>
          </div>
        );
      }
    } else {
      if (selectedBlock === element) {
        return (
          <div>
            <div>
              <a href="mailto:ericeorl2013@gmail.com" target='__blank' rel="noopener noreferrer">
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
              <a href="https://www.linkedin.com/in/yun-c-yang/" target="__blank" rel="noopener noreferrer">
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
            </div>
            <div>
              <a href="https://github.com/YunCYang" target='__blank' rel="noopener noreferrer">
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
              <a href="https://docs.google.com/document/d/1ADxY-7RlgksbFlrYE9TV-SwRh6Hu5gbi7Ch4BUl5aUo/edit?usp=sharing" target="__blank" rel="noopener noreferrer">
                <i className="fas fa-file" onMouseOver={
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
          </div>
        );
      } else {
        return (
          <div>
            <p>Links &amp; Resume</p>
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
