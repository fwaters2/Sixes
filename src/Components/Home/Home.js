import React, { Component } from "react";
import logo from "../../Assets/Images/logo.png";
import "./Home.css";
import Countdown from "./Countdown";

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
      <div className="Home-Background">
        <div className="Home">
          <img src={logo} alt="Sixes Logo"/>
          <div style={{ display: "flex", flexDirection: "column" ,width:"100%",alignItems:"center"}}>
            <div className="Countdown">
              <label>Registration opens:</label>
              <Countdown /></div>
            <button disabled>
              Register Now!
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
