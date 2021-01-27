import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import WebsiteManagement from "../templates/websiteManagement/WebsiteManagement";
// const WebsiteManagement = lazy(() =>
//   import("../templates/websiteManagement/WebsiteManagement")
// );

const App = () => {
  return (
    <Router>
      <WebsiteManagement />
    </Router>
  );
};

export default App;
