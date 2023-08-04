import React from 'react'
import "./Header.css";

import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import { BusinessCenter, Chat, Notifications } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { logout } from '../../features/userSlice';

const Header = () => {
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout());
  }
  return (
    <div className='header'>
      <div className="header_left">
        {/* Icon image */}
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH1gaG9wl4n7dYyzxcMOESd4jxqvz0LmyNA&usqp=CAU" alt=""/>

        <div className="header_search">
        {/* searchbar  */}
          <SearchIcon />
          <input type="text" name="" id="" placeholder='Search' />
        </div>
      </div>

      <div className="header_right">
        {/* header options */}
        <HeaderOption title="Home" Icon={ HomeIcon} />
        <HeaderOption title="My Network" Icon={ SupervisorAccountIcon} />
        <HeaderOption title="Jobs" Icon={ BusinessCenter} />
        <HeaderOption title="Messaging" Icon={ Chat} />
        <HeaderOption title="Notifications" Icon={ Notifications} />
        <HeaderOption title="me" onClick={logoutOfApp} avatar={true}  />
      </div>
    </div>
  )
}

export default Header