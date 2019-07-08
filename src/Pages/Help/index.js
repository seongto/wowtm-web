import React from 'react';
import './index.scss';
import * as constants from 'constants.js';
import { withRouter } from 'react-router-dom';
import AdminMenu from 'Components/AdminMenu';

const Help = () => {
  
  return(
    <div className="help-wrapper">
      <AdminMenu currentPage='문의하기'/>
    </div>
  )
}

export default withRouter(Help);
