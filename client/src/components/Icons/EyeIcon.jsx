import React from "react";

const EyeIcon = ({ showPassword, setShowPassword }) => {
  return (
    <div
      className="eyeIcons"
      onClick={() => setShowPassword((prevShowState) => !prevShowState)}
    >
      { showPassword ? (
        <i className="fa fa-eye"></i>
      ) : (
        <i className="fa fa-eye-slash"></i>
      )}
    </div>
  );
};

export default EyeIcon;
