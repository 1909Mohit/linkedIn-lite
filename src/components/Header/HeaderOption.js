import { Avatar, Icon } from '@mui/material';
import React from 'react'
import "./HeaderOption.css";
import { useSelector } from 'react-redux';

const HeaderOption = ({avatar, Icon, title, onClick}) => {
  const user = useSelector(state => state.user.user);
 
  return (
    <div onClick={onClick} className='headerOption'>
      {Icon && <Icon className="headerOption_icon" />}
      {avatar && <Avatar className="headerOption_icon" />}
      <h3 className='headerOption_title'>{title}</h3>
    </div>
  )
}

export default HeaderOption