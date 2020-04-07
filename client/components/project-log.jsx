import React from 'react';
import { withRouter } from 'react-router-dom';
import ProjectDetail from './project-detail';

const ProjectLog = props => {
  return (
    <div className='project-log'>
      <ProjectDetail />
    </div>
  );
};

export default withRouter(ProjectLog);
