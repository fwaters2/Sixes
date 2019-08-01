import React, { Component } from "react";
import logo from "../../Assets/Images/logo.png";
import "./Home.css";
import vid from "../../Assets/Six on the Beach 2018.mp4";
import cartLogo from "../../Assets/Images/Cartographic.png";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleClick = e => {
    this.props.appState.handleChange(e.target.id);
  };
  render() {
    return (
      <div
        style={{
          position: "fixed",
          display: "flex",
          justifyContent: "center",
          height: "100%",
          width: "100%"
        }}
      >
        <video className="Home-Background" autoPlay loop muted>
          <source src={vid} type="video/mp4" />
        </video>
        <div className="CartLogo">
          <img src={cartLogo} alt="Cartographic" />
        </div>
        <div className="Home">
          <img src={logo} alt="Sixes Logo" />
          <button className="position" id="Register" onClick={this.handleClick}>
            Register Now!
          </button>
        </div>
      </div>
    );
  }
}
export default Home;
