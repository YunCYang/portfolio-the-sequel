import React from 'react';
import { withRouter } from 'react-router-dom';
import ProjectAll from './project-all';
import ProjectDetail from './project-detail';

const ProjectLog = props => {
  // console.log(props.location.pathname);

  const renderProject = () => {
    if (props.location.pathname === '/project') {
      return (
        <ProjectAll />
      );
    } else {
      return (
        <ProjectDetail />
      );
    }
  };

  return (
    <div>
      {renderProject()}
    </div>
  );
};

export default withRouter(ProjectLog);
