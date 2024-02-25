import React from "react";
import "./breadCrumb.css";
import rightArrow from "../../asset/rightArrow.png";
import { useNavigate } from "react-router-dom";

const BreadCrumbs = ({ applianceID }) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <ul className="breadcrumb-container">
      <li className="breadCrumb-common" onClick={goBack}>
        Devices
      </li>
      <li className="breadCrumb-arrow">
        <img className="breadCrumb-arrow" src={rightArrow} alt="rightArrow" />
      </li>
      <li className="breadcrumb-currentPage">{`${applianceID}`}</li>
    </ul>
  );
};

export default BreadCrumbs;
