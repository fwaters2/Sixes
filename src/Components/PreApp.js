import React, { Component } from "react";
import Preloader from "./Preloader/Preloader";
import App from "./App/App";

class PreApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notReady: true
    };
  }
  componentDidMount() {
    setInterval(this.loadPage, 1000);
  }
  loadPage = e => {
    this.setState({
      notReady: false
    });
  };
  render() {
    return (
      this.state.notReady ? <Preloader /> : <App />
    );
  }
}
export default PreApp;
