import React from 'react'
import BreadCrumbs from './components/breadCrumbs';
import DeviceDetailData from './components/deviceDetailData';
import DeviceDetailHeader from './components/deviceDetailHeader';


const DeviceDetail = () => {
  return (
    <div><BreadCrumbs applianceID={'JTD-913122'} />
    <DeviceDetailHeader  applianceID={'JTD-913122'}/>
    <DeviceDetailData /></div>
  )
}

export default DeviceDetail