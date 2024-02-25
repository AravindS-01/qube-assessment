import React, { useEffect, useState,useMemo } from 'react'
import BreadCrumbs from '../breadCrumbs';
import DeviceDetailData from '../deviceDetailData';
import DeviceDetailHeader from '../deviceDetailHeader';
import { useParams } from 'react-router-dom';
import mockData from '../../mockData';


const DeviceDetail = () => {
  const { applianceId } = useParams();
  const [data, setData] = useState({});
  const currentData = useMemo(()=>{ return mockData.filter((val) => { return val.serialNo === applianceId })},[applianceId])

 
  useEffect(() => {
    setData(...currentData)
  }, [applianceId, currentData]);

  return (
    <div>
      <BreadCrumbs applianceID={applianceId} />
      <DeviceDetailHeader applianceID={applianceId} currentData={data} />
      <DeviceDetailData currentData={data} /></div>
  )
}

export default DeviceDetail