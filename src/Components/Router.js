import React, { Component } from "react";
import Home from "./Home/Home";
import Page from "./Pages/Page.js";
import AdminPages from "./Pages/AdminPages";
import GuestPages from "./Pages/GuestPages.";
import AdminConsole from "./AdminConsole/AdminConsole";

class Router extends Component {
  render() {
    switch (this.props.appState.currentPage) {
      case "Home":
        return <Home appState={this.props.appState} />;
      case "INFO":
        return <Page appState={this.props.appState} />;
        case "TOURNEY MAP":
            return <Page appState={this.props.appState} />;
      case "ACCOMMODATIONS":
        return <Page appState={this.props.appState} />;
      case "PARTY":
        return <Page appState={this.props.appState} />;
      case "adminConsole":
        return <AdminConsole appState={this.props.appState} />;
      default:
        //return <Page appState={this.props.appState} />;
        return this.props.appState.signedIn ? (
          <AdminPages appState={this.props.appState} />
        ) : (
          <GuestPages appState={this.props.appState} />
        );
    }
  }
}
export default Router;
