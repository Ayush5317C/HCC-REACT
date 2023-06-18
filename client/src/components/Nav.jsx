import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import MenuIcon from "./MenuIcon";
const Nav = () => {
  const [activeUrl, setActiveUrl] = useState("/");
  const [isMenuOpen, setMenuOpen] = useState(false); 
  const menuIcon = useRef();

  //for closing menu when user clicks anywhere on the screen but give priority to onclick event of menuIcon
  const handleMenuClose = (e)=>{
    if(menuIcon.current.contains(e.target))
      return;
    setMenuOpen(false);
  }
  useEffect(()=>{
    document.body.addEventListener("click", handleMenuClose);
    return ()=>{
    document.body.removeEventListener("click", handleMenuClose);
    }
  })

  return (
    <section id="navSection" style={isMenuOpen ? {borderBottom: "2px solid #e3e3e3"}: null}>
      <nav>
        <div className="logoImg">
          <Link to="" className="logoLink">
            <img
              src="/img/collegeLogo.png"
              alt="Logo not loaded"
              className="mainLogo"
            />
            <h3>
              Hetauda City
              <br />
              College
            </h3>
          </Link>
        </div>
        <div className="navMenu" style={isMenuOpen ? {height: "250px"}: null}>
          <Link
            to="/"
            className={`${activeUrl === "/" && "activePageMenu"}`}
            onClick={() => setActiveUrl("/")}
          >
            Home
          </Link>
          <Link
            to="/courses"
            className={`${activeUrl === "/courses" && "activePageMenu"}`}
            onClick={() => setActiveUrl("/courses")}
          >
            Courses
          </Link>
          <Link
            to="/teachers"
            className={`${activeUrl === "/teachers" && "activePageMenu"}`}
            onClick={() => setActiveUrl("/teachers")}
          >
            Teachers
          </Link>
          <Link
            to="/events"
            className={`${activeUrl === "/events" && "activePageMenu"}`}
            onClick={() => setActiveUrl("/events")}
          >
            Events
          </Link>
        </div>

        {/* <!--If the req.user object exists and req.user.password is defined then we render the profile icon and hide signup and login button
 If the req.user object doesnot exist we hide the profile icon and instead render signup and login button.
  -->
   <%showProfile=req.user===undefined?false:true%>
   <%if(showProfile){%> */}
        {/* <%}%> */}
        <ProfileDropDown />
        <MenuIcon menuRef = {menuIcon} handleClick= {()=>setMenuOpen(prevState=>!prevState)} isMenuOpen={isMenuOpen}/>
      </nav>
    </section>
  );
};

const ProfileDropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropDown = useRef();
  const userCircle = useRef();
  useEffect(() => {
    const handleDropdownOpen = (e) => {
      // if i click on the dropdown or if dropdown is not open then dont close dropdown otherwise close itreturn;
      if (
        !dropDown ||
        !userCircle ||
        !dropDown.current ||
        !userCircle.current ||
        dropDown.current.contains(e.target) ||
        userCircle.current.contains(e.target)
      )
        return;
      setIsOpen(false);
    };
    document.body.addEventListener("click", handleDropdownOpen);
    return () => {
      document.body.removeEventListener("click", handleDropdownOpen);
    };
  }, []);

  return (
    <div className="ProfileDropDown">
      <div className="myProfile">
        <div
          ref={userCircle}
          className="user-circle"
          onClick={() => setIsOpen((isOpen) => !isOpen)}
        >
          {" "}
          {/* If user clicks on profile icon on the top menu, show the dropdown */}
          <i className="fa fa-user myPhoto" aria-hidden="true"></i>
          <i className="fa fa-caret-down"></i>
        </div>
        {isOpen && (
          <div
            ref={dropDown}
            className="userProfileDropDown"
            style={{ display: "block" }}
          >
            <div className="d-profile">
              <i
                className="fa fa-user myPhoto"
                aria-hidden="true"
                style={{ marginRight: "1rem" }}
              ></i>
              <div className="d-p-info">
                {/* <h3 style="font-size: 1.2rem"><%=req.user.fullName%></h3> */}
                <h3 style={{ fontSize: "1.2rem" }}>Ayush Acharya</h3>
                {/* <p style="font-size: 1.2rem"></p><%=req.user.userType%></h3> */}
              </div>
            </div>
            <div className="d-logOut d-part">
              <span className="d-icon">
                <i className="fa fa-sign-in" aria-hidden="true"></i>
              </span>
              <h3 style={{ fontSize: "1.2rem" }}>Log Out</h3>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Nav;
