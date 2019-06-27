import React, { Component } from "react";
import "./Footer.css";
import tiltLogo from "../../Assets/Images/Sponsors/Tilt.png";
import wfdfLogo from "../../Assets/Images/Sponsors/WFDF.png";
import bulaLogo from "../../Assets/Images/Sponsors/BULA.png";

import ROKULogo from "../../Assets/Images/Sponsors/ROKU.png";
import BusanLogo from "../../Assets/Images/Sponsors/Busan.png";
import FiveLogo from "../../Assets/Images/Sponsors/Five.png";
import DiscCraftLogo from "../../Assets/Images/Sponsors/discraft_.png";
class Footer extends Component {
  render() {
    return (
      <div className="Footer-Container">
        <img src={wfdfLogo} alt="WFDF"/>
        <img src={tiltLogo} alt="Tilt"/>
        <img src={bulaLogo} alt="BULA"/>
        <img src={ROKULogo} alt="ROKU"/>
        <img src={BusanLogo} alt="Busan"/>
        <img src={DiscCraftLogo} alt="DisCraft"/>
        <img src={FiveLogo} alt="Five"/>
      </div>
    );
  }
}
export default Footer;
