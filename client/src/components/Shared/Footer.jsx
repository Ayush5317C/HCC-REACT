import React from "react";

const Footer = () => {
  return (
    <section id="footerSection">
      <footer>
        <div className="footerInfo">
          <div className="address">
            <i className="fa fa-map-marker" aria-hidden="true"></i>
            <span>Hetauda-5, Piple</span>
          </div>
          <div className="phone">
            <i className="fa fa-phone" aria-hidden="true"></i>
            <span>057-526660</span>
          </div>
          <div className="gmail">
            <i className="fa fa-envelope" aria-hidden="true"></i>
            <span>zenithCollege.official@gmail.com</span>
          </div>
        </div>
        <div className="socialMediaLink">
          <a href="https://www.facebook.com/hetaudacitycollege.edu.np" className="fbLink">
            <i className="fa fa-facebook" aria-hidden="true"></i>
          </a>
          <a href="https://www.instagram.com/explore/locations/1013966905/hetauda-city-college/?hl=en">
            <i className="fa fa-instagram" aria-hidden="true"></i>
          </a>
          <a href="https://www.youtube.com/@hetaudacitycollege4003">
            <i className="fa fa-youtube-play" aria-hidden="true"></i>
          </a>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
