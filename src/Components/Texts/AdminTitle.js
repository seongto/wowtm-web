import React, {useState, useEffect} from 'react';
import './AdminTitle.scss';
import * as constants from 'constants.js';

const AdminTitle = props => {
  return <h1 className="admin-title-wrapper">{props.titleText}</h1>;
};

export default AdminTitle;
