import React from "react";
import LandingPage from "./components/LandingPage";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  );
}

export default Router;
