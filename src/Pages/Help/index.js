import React from 'react';
import './index.scss';
import * as constants from 'constants.js';
import {withRouter} from 'react-router-dom';
import AdminMenu from 'Components/AdminMenu';
import AdminTitle from 'Components/Texts';

const currentPage = '문의하기';
const Help = () => {
  return (
    <div className="help-wrapper admin-common-wrapper">
      <AdminMenu currentPage={currentPage} />
      <div className="admin-col-1"></div>
      <div className="admin-col-2 help-content">
        <AdminTitle titleText={currentPage} />
      </div>
      <div className="admin-col-3 help-preview"></div>
    </div>
  );
};

export default withRouter(Help);
