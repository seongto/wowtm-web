import React from 'react';
import './index.scss';
import * as constants from 'constants.js';
import {withRouter} from 'react-router-dom';
import AdminMenu from 'Components/AdminMenu';
import AdminTitle from 'Components/Texts';

const currentPage = '타임라인';
const Timeline = () => {
  return (
    <div className="timeline-wrapper admin-common-wrapper">
      <AdminMenu currentPage={currentPage} />
      <div className="admin-col-1"></div>
      <div className="admin-col-2 timeline-content">
        <AdminTitle titleText={currentPage} />
      </div>
      <div className="admin-col-3 timeline-preview"></div>
    </div>
  );
};

export default withRouter(Timeline);
