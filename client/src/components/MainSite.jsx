import React from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import Home from "./Home";
import Courses from "./Courses";
import Teachers from "./Teachers";
import Events from "./Events";

const MainSite = () => {
  return (
    <div className="MainSite">
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/courses" element={<Courses />} />
          <Route exact path="/teachers" element={<Teachers />} />
          <Route exact path="/events" element={<Events />} />
          <Route exact path="*" element={<h1 style={{margin: "auto"}}>PAGE NOT FOUND</h1>} />
        </Routes>
        <Footer />
    </div>
  );
};

export default MainSite;
