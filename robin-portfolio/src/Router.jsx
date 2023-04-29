import React from "react";
import LandingPage from "./components/LandingPage";
import { Route, Routes } from "react-router-dom";

function Router() {
  return (
    <Routes>
      <Route path="/" render={LandingPage} />
    </Routes>
  );
}

export default Router;
