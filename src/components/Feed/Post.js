import { ChatOutlined, SendOutlined, ShareOutlined, ThumbUpAltOutlined } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import React from 'react';
import InputOption from './InputOption';
import "./Post.css";
import { useSelector } from 'react-redux';

const Post = ({name, description, message, photoUrl}) => {
  const user = useSelector(state => state.user.user);
  return (
    <div className='post'>
      <div className="post_header">
        <Avatar className='avatar'/>
        <div className="post_info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className="post_body">
        <p>{message} </p>
      </div>
      <div className="post_buttons">
        <InputOption Icon={ThumbUpAltOutlined} title="Like" color="gray"/>
        <InputOption Icon={ChatOutlined} title="Comment" color="gray"/>
        <InputOption Icon={ShareOutlined} title="Share" color="gray"/>
        <InputOption Icon={SendOutlined} title="Send" color="gray"/>
      </div>
    </div>
  )
}

export default Post