import React from 'react';
import './index.scss';
import * as constants from 'constants.js';
import { withRouter } from 'react-router-dom';
import AdminMenu from 'Components/AdminMenu';

const Settings = () => {
  
  return(
    <div className="settings-wrapper">
      <AdminMenu currentPage='설정'/>
    </div>
  )
}

export default withRouter(Settings);
