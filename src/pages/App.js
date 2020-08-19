import React, { Component} from 'react';
import WebsiteManagement from "../templates/WebsiteManagement";
import { BrowserRouter as Router } from "react-router-dom";


class App extends Component {

  render() {

    return (
      <Router >
        <WebsiteManagement />
      </Router>
    );
  }
}

export default App;
