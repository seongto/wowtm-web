import React from 'react';
import './index.scss';
import * as constants from 'constants.js';
import { withRouter } from 'react-router-dom';
import AdminMenu from 'Components/AdminMenu';

const UserImages = () => {
  
  return(
    <div className="userimgaes-wrapper">
      <AdminMenu currentPage='이미지 관리'/>
    </div>
  )
}

export default withRouter(UserImages);
