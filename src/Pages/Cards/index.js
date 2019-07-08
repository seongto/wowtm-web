import React from 'react';
import './index.scss';
import * as constants from 'constants.js';
import { withRouter } from 'react-router-dom';
import AdminMenu from 'Components/AdminMenu';

const Cards = () => {
  
  return(
    <div className="cards-wrapper">
      <AdminMenu currentPage='카드 관리'/>
    </div>
  )
}

export default withRouter(Cards);
