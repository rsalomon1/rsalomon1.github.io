import React from "react";
import LandingPage from "./components/LandingPage";
import { Route, Routes } from "react-router-dom";
import ContactMe from "./components/ContactMe";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/contact" element={<ContactMe />} />
    </Routes>
  );
}

export default Router;
