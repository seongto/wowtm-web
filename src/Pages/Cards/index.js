import React from 'react';
import './index.scss';
import * as constants from 'constants.js';
import {withRouter} from 'react-router-dom';
import AdminMenu from 'Components/AdminMenu';
import AdminTitle from 'Components/Texts';

const currentPage = '카드 관리';
const Cards = () => {
  return (
    <div className="cards-wrapper admin-common-wrapper">
      <AdminMenu currentPage={currentPage} />
      <div className="admin-col-1"></div>
      <div className="admin-col-2 cards-content">
        <AdminTitle titleText={currentPage} />
      </div>
      <div className="admin-col-3 cards-preview"></div>
    </div>
  );
};

export default withRouter(Cards);
