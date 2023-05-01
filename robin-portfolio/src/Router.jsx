import React from "react";
import LandingPage from "./components/LandingPage";
import { Route, Routes } from "react-router-dom";
import ContactMe from "./components/ContactMe";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
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
