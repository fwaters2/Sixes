import React, { Component } from "react";
import "./Page.css";
import PageInfo from "./PageInfo.js";

class Page extends Component {
  render() {
    const index = PageInfo.findIndex(
      x => x.title === this.props.appState.currentPage
    );
    const page = PageInfo[index];
    return (
      <div className="PageContainer">
        <div className="PageTitle">{page.title}</div>
        <div className="BodyIntro">
          {page.items.map(x => (
            <div key={page.items.indexOf(x)} className="PageItem">
              {x}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default Page;
