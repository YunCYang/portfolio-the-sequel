import React from 'react';
// import projectList from '../../database/project-list';
import { withRouter } from 'react-router-dom';

const ProjectDetail = props => {
  // console.log(props.location.pathname);

  return (
    <div className='detail'>
      <div className='detail-img'></div>
      <div className='detail-text'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default withRouter(ProjectDetail);
