import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "../Authentication/Login";
import Signup from "../Authentication/Signup";
import Dashboard from "../Admin/Dashboard";
import MainSite from "../Shared/MainSite";
import "../../styles/style.css";
import "../../styles/responsive.css";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/signup" element={<Signup/>} />
        <Route exact path="/admin/dashboard" element={<Dashboard/>} />
        <Route path="*" element={<MainSite/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
