import React from "react";
import { Link } from "react-router-dom";

const Button = ({className, href, value}) => {
  return (
    <Link className={`btn ${className} `} to={href}>
      {value}
    </Link>
  );
};

export default Button;
