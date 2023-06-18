import React from "react";

const MenuIcon = ({handleClick, isMenuOpen, menuRef}) => {
  return (
    <div className={`MenuIcon ${isMenuOpen && 'rotateLines' }`} onClick={handleClick} ref={menuRef}>
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
    </div>
  );
};

export default MenuIcon;
