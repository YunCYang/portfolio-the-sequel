import React from 'react';
import ProjectCard from './project-card';
import { Link } from 'react-router-dom';

const Project = () => {
  const projectList = [
    {
      name: 'Lacerna',
      img: './images/lacerna.png',
      desc: 'A demo e-commerce site developed with ReactJs',
      github: 'https://github.com/YunCYang/lacerna',
      live: 'https://lacerna.yuncyang.com/'
    },
    {
      name: 'Sudo-Ku',
      img: './images/sudo-ku.png',
      desc: 'A sudoku game that recursively creates puzzle',
      github: 'https://github.com/YunCYang/sudo-ku',
      live: 'https://sudo-ku.yuncyang.com/'
    }
  ];

  const renderList = () => {
    return projectList.map(item => <ProjectCard key={item.name} proj={item} />);
  };

  return (
    <div className='project'>
      <div className="project-list">
        {renderList()}
      </div>
      <div className='project-link'>
        <Link to='/project' onMouseOver={
          () => {
            document.getElementsByClassName('pointer-ring')[0].classList.add('link');
          }
        } onMouseLeave={
          () => {
            document.getElementsByClassName('pointer-ring')[0].classList.remove('link');
          }
        }>
          <span>See all projects</span>
          <i className="fas fa-arrow-circle-right"></i>
        </Link>
      </div>
    </div>
  );
};

export default Project;
