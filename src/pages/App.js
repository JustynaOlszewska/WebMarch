import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import WebsiteManagement from "../templates/websiteManagement/WebsiteManagement";

const App = () => {
  return (
    <Router>
      <WebsiteManagement />
    </Router>
  );
};

export default App;
