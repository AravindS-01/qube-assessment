import React from "react";
import './button.css';


const Button = ({ srcName, buttonText }) => {
  return (
    <button className="deviceDetail-button">
      <img src={srcName} alt="speedTest" />
      <span style={{marginLeft:'5px'}}>{buttonText}</span>
    </button>
  );
};

export default Button;
