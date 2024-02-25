import React from "react";
import "./deviceDetailHeader.css";
import speedTest from "../../asset/speedTest.png";
import log from "../../asset/log.png";
import Button from "../../common-component/button";
import online from "../../asset/online.png";
import Tag from "../../common-component/tag";
import chart from "../../asset/chart.png";

const DeviceDetailHeader = ({ applianceID }) => {
  return (
    <section className="deviceDetail-element">
      <div className="device-header">
        <h1 className="device-title">{"JTD-912312"}</h1>
        <div className="button">
          <Button buttonText={"SpeedTest"} srcName={speedTest} />
          <Button buttonText={"Logs"} srcName={log} />
        </div>
      </div>
      <div className="device-location">
        <p className="location">{"Cross River Mall"}</p>
        <address className="city">{"New Delhi, Delhi, India"}</address>
      </div>
      <div className="tag-section">
        <Tag status={online} statusText={"Online"} />
        <Tag status={chart} statusText={"Chart"} />
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
