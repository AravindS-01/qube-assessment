import React from 'react';
import './tag.css';

const Tag = ({status,statusText}) => {
  return (
    <div className='tag'>
    <img src={status} alt='online' />
    <span className='tag-text'>{statusText}</span>
  </div>
  )
}

export default Tag