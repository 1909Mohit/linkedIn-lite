import { Avatar } from '@mui/material'
import React from 'react';
import "./Sidebar.css"
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const user = useSelector(state => state.user.user);

  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className='sidebar'>

      <div className="sidebar__top">
        <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" srcset="" />
        <Avatar src={user.photoUrl} className='sidebar__avatar'>{user.email[0]}</Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className = "sidebar__statNumber">2,921</p>
        </div>
        <div className="sidebar__stat">
          <p>views on post</p>
          <p className = "sidebar__statNumber">2,232</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem('reactjs')}
        {recentItem('expressjs')}
        {recentItem('softwareengineering')}
        {recentItem('developer')}
        {recentItem('programming')}
        {recentItem('design')}
      </div>
    </div>
  )
}

export default Sidebar