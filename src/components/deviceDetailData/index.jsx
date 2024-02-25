import React, { useMemo } from "react";
import "./deviceDetailData.css";

const DisplayLocation = ({ title, location }) => {
  return (
    <div className="data-element">
      <label className="data-label">{title}</label>
      <text className="data-text">{`${location["city"] || "-"},${
        location["state"] || "-"
      },${location["country"] || "-"}`}</text>
    </div>
  );
};

const DeviceDetailData = ({ currentData }) => {
  const headers = useMemo(() => {
    return {
      serialNo: "Device Serial",
      location: "city",
      bandwidth: "Bandwidth",
      deviceStatus: "Status",
      downloadStatus: "Download Status",
      osVersion: "OS Version",
      avgBandwidth: "Average Bandwidth",
      ispPaymentResponsibility: "ISP Payment Responsibility",
      billingCycle: "Billing Cycle",
      planStartDate: "Plan Start Date",
      storage: "Storage Available",
      theatreName: "Loaction",
    };
  }, []);

  return (
    <section className="data-container">
      {Object.keys(currentData).map((deviceData, index) => {
        return (
          <>
            {deviceData === "location" ? (
              <DisplayLocation
                title={'City'}
                location={currentData[deviceData]}
                key={index}
              />
            ) : (
              <div className="data-element" key={index}>
                <label className="data-label">{headers[deviceData]}</label>
                <text className="data-text">{currentData[deviceData]}</text>
              </div>
            )}
          </>
        );
      })}
    </section>
  );
};

export default DeviceDetailData;
