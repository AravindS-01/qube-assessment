import React from "react";
import downloading from "../../asset/downlaoading.png";
import scheduled from "../../asset/scheduled.png";
import cancelled from "../../asset/cancelled.png";
import offline from "../../asset/failed.png";
import online from "../../asset/onlineList.png";

const DisplayStatus = ({ type, status }) => {
  switch (type) {
    case "Failed":
      return (
        <td style={{ display: "flex", alignItems: "center" }}>
          <img src={offline} alt="Failed" />
          <span>{status}</span>
        </td>
      );
    case "Cancelled":
      return (
        <td style={{ display: "flex", alignItems: "center" }}>
          <img src={cancelled} alt="cancelled" />
          <span>{status}</span>
        </td>
      );
    case "Scheduled":
      return (
        <td style={{ display: "flex", alignItems: "center" }}>
          <img src={scheduled} alt="scheduled" />
          <span>{status}</span>
        </td>
      );
    case "Downloading":
      return (
        <td style={{ display: "flex", alignItems: "center" }}>
          <img src={downloading} alt="downloading" />
          <span>{status}</span>
        </td>
      );
    case "Downloaded":
      return (
        <td style={{ display: "flex", alignItems: "center" }}>
          <img src={online} alt="Failed" />
          <span>{status}</span>
        </td>
      );
    default:
      return <></>;
  }
};

export default React.memo(DisplayStatus);
