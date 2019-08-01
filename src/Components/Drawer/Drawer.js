import React, { Component } from "react";
import "./Drawer.css";
import PageInfo from "../Page/PageInfo";

class Drawer extends Component {
  handleClick = e => {
    this.props.appState.handleChange(e.target.id);
    this.props.appState.handleDrawer();
  };
  render() {
    return (
      <div className="container">
        <div className="Buttons">
          {PageInfo.map(x => (
            <div
              className="item"
              key={x.title}
              id={x.title}
              onClick={this.handleClick}
            >
              {x.title}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default Drawer;
