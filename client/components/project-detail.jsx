import React from 'react';
import projectList from '../../database/project-list';
import { withRouter } from 'react-router-dom';

const ProjectDetail = props => {
  const [currentProj, setCurrentProj] = React.useState('');
  const [prevProj, setPrevProj] = React.useState('');
  const [nextProj, setNextProj] = React.useState('');
  const projList = projectList;

  React.useEffect(
    () => {
      for (let i = 0; i < projList.length; i++) {
        if (props.location.pathname.slice(9) === projList[i].name.toLowerCase()) {
          setCurrentProj(projList[i]);
          if (i === projList.length - 1) setNextProj(projList[0]);
          else setNextProj(projList[i + 1]);
          if (i === 0) setPrevProj(projList[projList.length - 1]);
          else setPrevProj(projList[i - 1]);
        }
      }
    }, [currentProj]
  );

  const renderTech = () => {
    if (currentProj) {
      return currentProj.tech.map(item => {
        return (
          <div key={item}>
            <span>{item}</span>
          </div>
        );
      });
    } else return null;
  };

  return (
    <div className='detail'>
      <div className='detail-img'></div>
      <div className='detail-text'>
        <div className='detail-text__header'>
          <div className='detail-text__header__back'>
            <i className="fas fa-arrow-circle-left" onClick={
              () => props.history.push('/')
            } onMouseOver={
              () => {
                document.getElementsByClassName('pointer-ring')[0].classList.add('link');
              }
            } onMouseLeave={
              () => {
                document.getElementsByClassName('pointer-ring')[0].classList.remove('link');
              }
            }></i>
          </div>
          <div className='detail-text__header__nav'>
            <i className="fas fa-long-arrow-alt-left" onClick={
              () => {
                props.history.push(`/project/${prevProj.name.toLowerCase()}`);
                setCurrentProj(prevProj);
              }
            } onMouseOver={
              () => {
                document.getElementsByClassName('pointer-ring')[0].classList.add('link');
              }
            } onMouseLeave={
              () => {
                document.getElementsByClassName('pointer-ring')[0].classList.remove('link');
              }
            }></i>
            <i className="fas fa-long-arrow-alt-right" onClick={
              () => {
                props.history.push(`/project/${nextProj.name.toLowerCase()}`);
                setCurrentProj(nextProj);
              }
            } onMouseOver={
              () => {
                document.getElementsByClassName('pointer-ring')[0].classList.add('link');
              }
            } onMouseLeave={
              () => {
                document.getElementsByClassName('pointer-ring')[0].classList.remove('link');
              }
            }></i>
          </div>
        </div>
        <div className='detail-text__title'>
          <h1>{currentProj.name}</h1>
        </div>
        <div className='detail-text__detail'>
          <p>{currentProj.detail}</p>
        </div>
        <div className='detail-text__tech'>
          {renderTech()}
        </div>
        <div className='detail-text__link'>
          <div>
            <a href={currentProj.live} target="_blank"
              rel="noopener noreferrer" onMouseOver={
                () => {
                  document.getElementsByClassName('pointer-ring')[0].classList.add('link');
                }
              } onMouseLeave={
                () => {
                  document.getElementsByClassName('pointer-ring')[0].classList.remove('link');
                }
              }>
              <i className="fas fa-window-maximize"></i>
              <span>Live Link</span>
            </a>
          </div>
          <div>
            <a href={currentProj.github} target="_blank"
              rel="noopener noreferrer" onMouseOver={
                () => {
                  document.getElementsByClassName('pointer-ring')[0].classList.add('link');
                }
              } onMouseLeave={
                () => {
                  document.getElementsByClassName('pointer-ring')[0].classList.remove('link');
                }
              }>
              <i className="fab fa-github-square"></i>
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(ProjectDetail);
