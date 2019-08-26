import React from 'react';
import './index.scss';
import * as constants from 'constants.js';
import {withRouter} from 'react-router-dom';
import AdminMenu from 'Components/AdminMenu';
import AdminTitle from 'Components/Texts';

const currentPage = '대시보드';
const Dashboard = () => {
  return (
    <div className="dashboard-wrapper admin-common-wrapper">
      <AdminMenu currentPage={currentPage} />
      <div className="admin-col-1"></div>
      <div className="admin-col-2 dashboard-content">
        <AdminTitle titleText={currentPage} />
      </div>
      <div className="admin-col-3 dashboard-preview"></div>
    </div>
  );
};

export default withRouter(Dashboard);
