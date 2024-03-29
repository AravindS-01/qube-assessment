import React, { useEffect, useState, useMemo } from "react";
import "./statusSummary.css";
import failed from "../../asset/failed.png";
import cancelled from "../../asset/cancelled.png";
import downlaoading from "../../asset/downlaoading.png";
import scheduled from "../../asset/scheduled.png";
import downloaded from "../../asset/onlineList.png";

const StatusSummary = ({ statusData }) => {
  const statusObj = useMemo(
    () => [
      {
        id: "Failed",
        img: failed,
        count: 0,
      },
      {
        id: "Cancelled",
        img: cancelled,
        count: 0,
      },
      {
        id: "Downloading",
        img: downlaoading,
        count: 0,
      },
      {
        id: "Scheduled",
        img: scheduled,
        count: 0,
      },
      {
        id: "Downloaded",
        img: downloaded,
        count: 0,
      },
    ],
    []
  );

  const [statuses, setStatuses] = useState(statusObj);
  const [statusCount, setStatusCount] = useState({});

  useMemo(() => {
    const downloadStatusCount = {};
    statusData.forEach((data) => {
      const status = data.downloadStatus;

      if (downloadStatusCount[status]) {
        downloadStatusCount[status]++;
      } else {
        downloadStatusCount[status] = 1;
      }
    });
    setStatusCount(downloadStatusCount);
  }, [statusData]);

  useEffect(() => {
    const countVar = statuses.map((val) => {
      return { ...val, count: statusCount[val.id] };
    });
    setStatuses(countVar);
  }, [statusCount, statuses]);

  return (
    <ul className="status">
      {statuses.map((status) => {
        return (
          <li key={status.id} className="status-content">
            <img src={status.img} alt={status.id} />
            <span className="status-text">
              {`${status.count}
              ${status.id}`}
            </span>
          </li>
        );
      })}
    </ul>
  );
};

export default StatusSummary;
