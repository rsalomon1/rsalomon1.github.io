import React from "react";
import LandingPage from "./view/LandingPage";
import { Route, Routes } from "react-router-dom";
import ContactMe from "./view/ContactMe";
import AboutMe from "./view/AboutMe";
import Services from "./view/Services";
function Router() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/contact" element={<ContactMe />} />
      <Route path="/about" element={<AboutMe />} />
      <Route path="/services" element={<Services />} />
    </Routes>
  );
}

export default Router;
