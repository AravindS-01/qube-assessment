import React from 'react';
import './breadCrumb.css';
import rightArrow from '../../asset/rightArrow.png';

const BreadCrumbs = ({applianceID}) => {
  return (
    <ul className='breadcrumb-container'>
        <li className='breadCrumb-common'>Devices</li>
        <li className='breadCrumb-arrow'><img className='breadCrumb-arrow' src={rightArrow} alt='rightArrow'/></li>
        <li className='breadcrumb-currentPage'>{`${applianceID}`}</li>
    </ul>
  )
}

export default BreadCrumbs;