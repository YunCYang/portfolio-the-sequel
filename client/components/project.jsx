import React from 'react';
import ProjectCard from './project-card';
import { Link } from 'react-router-dom';
import projectList from '../../database/project-list';

const Project = () => {
  const renderList = () => {
    return projectList.map(item => <ProjectCard key={item.name} proj={item} />);
  };

  return (
    <div className='project'>
      <div className="project-list">
        {renderList()}
      </div>
      <div className='project-link'>
        <Link to='/project/lacerna' onMouseOver={
          () => {
            document.getElementsByClassName('pointer-ring')[0].classList.add('link');
          }
        } onMouseLeave={
          () => {
            document.getElementsByClassName('pointer-ring')[0].classList.remove('link');
          }
        }>
          <span>See project detail</span>
          <i className="fas fa-arrow-circle-right"></i>
        </Link>
      </div>
    </div>
  );
};

export default Project;
