import React from "react";
import "./displayElement.css";
import offline from "../../asset/failed.png";
import online from "../../asset/onlineList.png";
import DisplayStatus from "../../components/displayStatus";
import downloading from'../../asset/downlaoading.png';
import scheduled from '../../asset/scheduled.png';
import cancelled  from '../../asset/cancelled.png';

const DisplayElement = ({ type, currentData, header }) => {
  switch (type) {
    case "location":
      return (
        <td key={currentData.id}>
          <div>{currentData["theatreName"]}</div>
          <div className="location">{`${currentData.location.city},${currentData.location.state},${currentData.location.country}`}</div>
        </td>
      );
    case "bandwidth":
      return (
        <td key={currentData.id}>
          <div>{currentData["bandwidth"]}</div>
          <div className="location">{`${currentData["avgBandwidth"]}`}</div>
        </td>
      );
    case "deviceStatus":
      return (
        //   style={{ display: "flex", alignItems: "center" }}
        <td>
          {currentData["deviceStatus"] === "Offline" ? (
            <>
              <img src={offline} alt="Offline" />
              <span>{currentData["deviceStatus"]}</span>
            </>
          ) : (
            <>
              <img src={online} alt="Online" />
              <span>{currentData["deviceStatus"]}</span>
            </>
          )}
        </td>
      );
    case "downloadStatus":
        switch (currentData['downloadStatus']) {
            case "Failed":
              return (
                <td style={{ display: "flex", alignItems: "center" }}>
                  <img src={offline} alt="Failed" />
                  <span>{currentData['downloadStatus']}</span>
                </td>
              );
            case "Cancelled":
              return (
                <td style={{ display: "flex", alignItems: "center" }}>
                  <img src={cancelled} alt="cancelled" />
                  <span>{currentData['downloadStatus']}</span>
                </td>
              );
            case "Scheduled":
              return (
                <td style={{ display: "flex", alignItems: "center" }}>
                  <img src={scheduled} alt="scheduled" />
                  <span>{currentData['downloadStatus']}</span>
                </td>
              );
            case "Downloading":
              return (
                <td style={{ display: "flex", alignItems: "center" }}>
                  <img src={downloading} alt="downloading" />
                  <span>{currentData['downloadStatus']}</span>
                </td>
              );
            case "Downloaded":
              return (
                <td style={{ display: "flex", alignItems: "center" }}>
                  <img src={online} alt="Failed" />
                  <span>{currentData['downloadStatus']}</span>
                </td>
              );
              default:
                return <></>
        }

    default:
       return <td key={currentData.id}>{currentData[header.id]}</td>;
  }
};

export default DisplayElement;
