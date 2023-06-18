import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Dashboard from "./Dashboard";
import MainSite from "./MainSite";
import "../styles/style.css";
import "../styles/responsive.css";
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
