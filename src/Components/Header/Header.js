import React, { Component } from "react";
import "./Header.css";
import menuIcon from "../../Assets/Images/menu.svg";
import homeIcon from "../../Assets/Images/minibanner.png";
import loginIcon from "../../Assets/Images/signin.png";
import adminIcon from "../../Assets/Images/adminIcon.png";

class Header extends Component {
  goHome = () => {
    this.props.appState.handleChange("Home");
    
  };
  handleMenuClick = () => {
    this.props.appState.handleDrawer();
    
  }
  toggleLogin = () => {
    this.props.appState.toggleLogin();
  }
  handleAdminClick = () => {
    this.props.appState.handleChange("adminConsole")
  }
  render() {
    return (
      <div className="Navigation">
        <div className="icons">
          <img alt="menu" onClick={this.handleMenuClick} src={menuIcon} />
        </div>
        <div className="Title">
          <img alt="home" src={homeIcon} onClick={this.goHome} />
        </div>
        <div className="icons">
          {this.props.appState.adminLoggedIn?
          <img alt="AdminIcon" src={adminIcon} onClick={this.handleAdminClick}/>
          :
          <img alt="profileIcon" src={loginIcon} onClick={this.toggleLogin}/>
          }</div>
      </div>
    );
  }
}
export default Header;
