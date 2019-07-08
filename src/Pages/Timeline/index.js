import React from 'react';
import './index.scss';
import * as constants from 'constants.js';
import { withRouter } from 'react-router-dom';
import AdminMenu from 'Components/AdminMenu';

const Timeline = () => {
  
  return(
    <div className="timeline-wrapper">
      <AdminMenu currentPage='타임라인'/>
    </div>
  )
}

export default withRouter(Timeline);
