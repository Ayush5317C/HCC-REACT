import React from "react";
import { Link } from "react-router-dom";
const FormSideMenu = ({heading, paragraph, btnValue, btnHref}) => {
  return (
    <div className="FormSideMenu">
      <div className="content">
        <h1 style={{fontSize: "2.5rem"}}>{heading}</h1>
        <p>{paragraph}</p>
        <Link to={btnHref} className="btn leftBtn">
          {btnValue}
          
        </Link>
      </div>
    </div>
  );
};

export default FormSideMenu;
