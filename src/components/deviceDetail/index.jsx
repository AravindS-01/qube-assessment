import React, { useEffect, useState, useMemo } from "react";
import BreadCrumbs from "../breadCrumbs";
import DeviceDetailData from "../deviceDetailData";
import DeviceDetailHeader from "../deviceDetailHeader";
import { useParams } from "react-router-dom";
import mockData from "../../mockData";

const DeviceDetail = () => {
  const { applianceId } = useParams();
  const [data, setData] = useState({});
  console.log("appl", applianceId);
  useEffect(() => {
    fetch(`http://localhost:3001/api/v1/appliance/${applianceId}/info`)
      .then((data) => {
        return data.json();
      })
      .then((val) => {
        setData(val);
      });
  }, [applianceId]);

  return (
    <div>
      <BreadCrumbs applianceID={applianceId} />
      <DeviceDetailHeader applianceID={applianceId} currentData={data} />
      <DeviceDetailData currentData={data} />
    </div>
  );
};

export default DeviceDetail;
