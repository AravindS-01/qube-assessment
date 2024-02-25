import React from "react";
import "./deviceDetailHeader.css";
import speedTest from "../../asset/speedTest.png";
import log from "../../asset/log.png";
import Button from "../../common-component/button";
import online from "../../asset/online.png";
import Tag from "../../common-component/tag";
import chart from "../../asset/chart.png";

const DeviceDetailHeader = ({ applianceID, currentData }) => {
  return (
    <section className="deviceDetail-element">
      <div className="device-header">
        <h1 className="device-title">{applianceID}</h1>
        <div className="button">
          <Button buttonText={"SpeedTest"} srcName={speedTest} />
          <Button buttonText={"Logs"} srcName={log} />
        </div>
      </div>
      <div className="device-location">
        <p className="location">{currentData.theatreName}</p>
        <address className="city">{`${currentData.location?.city || '-'},${currentData?.location?.state || '-'},${currentData.location?.country|| '-'}`}</address>
      </div>
      <div className="tag-section">
        <Tag status={online} statusText={currentData.deviceStatus} />
        <Tag status={chart} statusText={currentData.bandwidth} />
      </div>
      <hr className="line-break"></hr>
      <ul className="summary">
        <li className="summary-text">Details</li>
        <li className="summary-text">Contents</li>
        <li className="summary-text">Bandwidth</li>
      </ul>
    </section>
  );
};

export default DeviceDetailHeader;
