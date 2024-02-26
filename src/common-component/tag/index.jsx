import React from "react";
import "./tag.css";
import online from "../../asset/online.png";
import chart from "../../asset/chart.png";
import offline from '../../asset/failed2.png'

const Tag = ({ status, statusText }) => {
  switch(statusText){
    case 'Online' :
      return(<div className="tag">
      <img src={online} alt="online" />
      <span className="tag-text">{statusText}</span>
    </div>)
    case 'Offline' :
      return (<div className="tag">
      <img src={offline} alt="online" />
      <span className="tag-text">{statusText}</span>
    </div>)
    default:
      return (<div className="tag">
      <img src={chart} alt="online" />
      <span className="tag-text">{statusText}</span>
    </div>)
  }
};

export default Tag;
