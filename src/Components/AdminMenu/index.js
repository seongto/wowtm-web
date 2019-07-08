import React, { useState, useEffect } from 'react';
import './index.scss';
import * as constants from 'constants.js';
import { withRouter } from 'react-router-dom';

const menuList = [
  {
    id: 1,
    name: '대시보드',
    urlText: "/admin/dashboard"
  },{
    id: 2,
    name: '타임라인',
    urlText: "/admin/timeline"
  },{
    id: 3,
    name: '카드 관리',
    urlText: "/admin/cards"
  },{
    id: 4,
    name: '이미지 관리',
    urlText: "/admin/images"
  },{
    id: 5,
    name: '설정',
    urlText: "/admin/settings"
  },{
    id: 6,
    name: '문의하기',
    urlText: "/admin/help"
  },
]

const AdminMenu = (props) => {

  const [ currentPage, setCurrentPage ] = useState(props.currentPage);

  const handleClick = (target) => {
    props.history.push(target);
  }

  const logOut = () =>{

  }


  return(
    <div className="admin-menu-wrapper">
      <div className="admin-menu-profile">
      </div>
      <ul>
      {
        menuList.map(el => (
          <li 
            key={el.id} 
            onClick={() => handleClick(el.urlText)}
            className={(currentPage === el.name)? "admin-menu-highlighted":""} 
          >
            {el.name}
          </li>
        ))
      }
      </ul>
      <div 
        className='admin-menu-logout'
        onClick={()=> logOut()}
      >로그 아웃</div>
    </div>
  )
}

export default withRouter(AdminMenu);
