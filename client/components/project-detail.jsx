import React from 'react';
import projectList from '../../database/project-list';
import { withRouter } from 'react-router-dom';

const ProjectDetail = props => {
  const [currentProj, setCurrentProj] = React.useState('');
  const [prevProj, setPrevProj] = React.useState('');
  const [nextProj, setNextProj] = React.useState('');
  const [movement, setMovement] = React.useState(0);
  const projList = projectList;
  const [pagewidth, setPageWidth] = React.useState(1);
  const [modalImage, setModalImage] = React.useState(0);
  let touchStart = 0;
  let touchEnd = 0;

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

  const renderImgArr = () => {
    if (currentProj) {
      return currentProj.imgArr.map(img => {
        return (
          <img key={img} src={img} onClick={
            () => {
              document.getElementsByClassName('detail-modal')[0].classList.add('shown');
              setModalImage(movement);
            }
          }/>
        );
      });
    }
  };

  const handleMovement = (delta, method) => {
    const maxLength = currentProj.imgArr.length - 1;
    const singleWidth = document.getElementsByClassName('detail-img__swiper')[0].getBoundingClientRect().width;
    setPageWidth(singleWidth);
    let nextMovement = movement + delta;

    if (nextMovement < 0) {
      nextMovement = 0;
    }

    if (nextMovement > maxLength * singleWidth) {
      nextMovement = maxLength * singleWidth;
    }

    if (method === 'wheel') setMovement(nextMovement);
    else setMovement(nextMovement);
  };

  const handleWheel = e => handleMovement(e.deltaY, 'wheel');

  const handleTouchStart = e => {
    touchStart = e.nativeEvent.touches[0].clientX;
  };

  const handleTouchMove = e => {
    touchEnd = e.nativeEvent.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    handleMovement(touchStart - touchEnd, 'touch');
  };

  const renderImg = () => {
    if (currentProj) {
      return <img src={currentProj.imgArr[Math.floor(modalImage / pagewidth) || 0]} />;
    } else return null;
  };

  const renderLink = () => {
    if (currentProj.github) {
      return (
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
      );
    } else {
      return (
        <a href={currentProj.codepen} target="_blank"
          rel="noopener noreferrer" onMouseOver={
            () => {
              document.getElementsByClassName('pointer-ring')[0].classList.add('link');
            }
          } onMouseLeave={
            () => {
              document.getElementsByClassName('pointer-ring')[0].classList.remove('link');
            }
          }>
          <i className="fab fa-codepen"></i>
          <span>GitHub</span>
        </a>
      );
    }
  };

  return (
    <div className='detail'>
      <div className='detail-img' onWheel={handleWheel} onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
        <div className="detail-img__swiper" style={{
          transform: `translateX(${Math.floor(movement / pagewidth) * 100 * -1}%)`
        }}>
          {renderImgArr()}
        </div>
      </div>
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
            {renderLink()}
          </div>
        </div>
      </div>
      <div className="detail-modal" onClick={
        e => {
          if (e.target.className === 'detail-modal shown') {
            document.getElementsByClassName('detail-modal')[0].classList.remove('shown');
            setModalImage(movement);
          }
        }
      }>
        <div className="detail-modal__container">
          {renderImg()}
          <div className="detail-modal__controls">
            <div className="detail-modal__controls__prev" onClick={
              () => {
                if (modalImage / pagewidth >= 1) {
                  setModalImage(modalImage - pagewidth);
                } else {
                  setModalImage(pagewidth * currentProj.imgArr.length - 1);
                }
              }
            } onMouseOver={
              () => {
                document.getElementsByClassName('pointer-ring')[0].classList.add('link');
              }
            } onMouseLeave={
              () => {
                document.getElementsByClassName('pointer-ring')[0].classList.remove('link');
              }
            }></div>
            <div className="detail-modal__controls__next" onClick={
              () => {
                if (modalImage / pagewidth < currentProj.imgArr.length - 1) {
                  setModalImage(modalImage + pagewidth);
                } else {
                  setModalImage(0);
                }
              }
            } onMouseOver={
              () => {
                document.getElementsByClassName('pointer-ring')[0].classList.add('link');
              }
            } onMouseLeave={
              () => {
                document.getElementsByClassName('pointer-ring')[0].classList.remove('link');
              }
            }></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(ProjectDetail);
