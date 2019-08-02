import React, { Component } from "react";
import Home from "./Home/Home";
import Page from "./Pages/Page.js";
import AdminConsole from "./AdminConsole/AdminConsole";

class Router extends Component {
  render() {
    switch (this.props.appState.currentPage) {
      case "Home":
        return <Home appState={this.props.appState} />;
      case "adminConsole":
        return <AdminConsole appState={this.props.appState} />;
      default:
        return <Page appState={this.props.appState} />;
    }
  }
}
export default Router;
