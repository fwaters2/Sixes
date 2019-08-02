import React, { Component } from "react";
import PageInfo from "../Pages/PageInfo";

class DesktopMenu extends Component {
  handleClick = e => {
    this.props.appState.handleChange(e.target.id);
  };
  render() {
    return (
      <div className="Desktop-Container">
        {PageInfo.map(x => (
          <div
            className="Desktop-Item"
            key={x.title}
            id={x.title}
            onClick={this.handleClick}
          >
            {x.title}
          </div>
        ))}
      </div>
    );
  }
}
export default DesktopMenu;
