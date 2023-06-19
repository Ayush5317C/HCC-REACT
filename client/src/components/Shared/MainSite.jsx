import React from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import Home from "../Home/Home";
import Courses from "../Courses/Courses";
import Teachers from "../Teachers/Teachers";
import Events from "../Events/Events";

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
