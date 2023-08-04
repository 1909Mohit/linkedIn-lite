import React from 'react';
import "./InputOption.css";

const InputOption = ({title, color, Icon}) => {
  return (
    <div className='inputOption'>
      <Icon style={{ color: color }} />
      <h4>{ title }</h4>
    </div>
  )
}

export default InputOption