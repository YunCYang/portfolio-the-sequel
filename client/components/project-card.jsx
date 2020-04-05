import React from 'react';
import { withRouter } from 'react-router-dom';

const ProjectCard = props => {
  return (
    <div className='card' onMouseEnter={
      () => {
        document.getElementsByClassName('pointer-ring')[0].classList.add('link');
      }
    } onMouseLeave={
      () => {
        document.getElementsByClassName('pointer-ring')[0].classList.remove('link');
      }
    } onClick={
      () => props.history.push(`/project/${props.proj.name}`)
    }>
      <div className="card-wrapper" style={{ backgroundImage: `url(${props.proj.img})` }}>
        <span className='name'>{props.proj.name}</span>
        <span className='desc'>{props.proj.desc}</span>
      </div>
    </div>
  );
};

export default withRouter(ProjectCard);
