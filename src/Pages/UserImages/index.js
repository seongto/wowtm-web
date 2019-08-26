import React from 'react';
import './index.scss';
import * as constants from 'constants.js';
import {withRouter} from 'react-router-dom';
import AdminMenu from 'Components/AdminMenu';
import AdminTitle from 'Components/Texts';
import {Seperator} from 'Components/DesignElements';

const currentPage = '이미지 관리';
const UserImages = () => {
  return (
    <div className="userimgaes-wrapper admin-common-wrapper">
      <AdminMenu currentPage={currentPage} />
      <div className="admin-col-1"></div>
      <div className="admin-col-2 userimages-content">
        <AdminTitle titleText={currentPage} />
        <Seperator />
      </div>
      <div className="admin-col-3 userimages-preview"></div>
    </div>
  );
};

export default withRouter(UserImages);
