import React, { Component } from "react";
import "./Footer.css";
import tiltLogo from "../../Assets/Images/Sponsors/Tilt.png";
import wfdfLogo from "../../Assets/Images/Sponsors/WFDF.png";
import bulaLogo from "../../Assets/Images/Sponsors/BULA.png";

class Footer extends Component {
  render() {
    return (
      <div className="Footer-Container">
        <img src={wfdfLogo} alt="WFDF"/>
        <img src={tiltLogo} alt="Tilt"/>
        <img src={bulaLogo} alt="BULA"/>
      </div>
    );
  }
}
export default Footer;
