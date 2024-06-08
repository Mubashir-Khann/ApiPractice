import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

const RouteFile = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};
export default RouteFile;
