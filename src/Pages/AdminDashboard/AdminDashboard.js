import React, {useContext} from 'react';
import {withRouter} from 'react-router-dom';

import './AdminDashboard.scss';
import * as constants from 'constants.js';
import {ThemeContext, AdminContext} from 'Components/Contexts';

const AdminDashboard = () => {
  return <div className="admin-dashboard-wrapper"></div>;
};

export default withRouter(AdminDashboard);
