import React from 'react';
import './index.scss';
import * as constants from 'constants.js';
import { withRouter } from 'react-router-dom';
import AdminMenu from 'Components/AdminMenu';

const Dashboard = () => {
  
  return(
    <div className="dashboard-wrapper">
      <AdminMenu currentPage='대시보드'/>
    </div>
  )
}

export default withRouter(Dashboard);
