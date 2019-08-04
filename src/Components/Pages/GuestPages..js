import React, { Component } from 'react'
import "./Page.css";
const pages = [
  "REGISTER",
  "INFO",
  "SCHEDULE",
  "TRANSPORTATION",
  "ACCOMMODATIONS",
  "PARTY",
  "CONTACT INFO"
];

export default class AdminPages extends Component {
 
    render() {
      const { currentPage, fireData, signedIn } = this.props.appState
          return (
            <div className="PageContainer">
              <div className="PageTitle">{currentPage}</div>
              <div className="BodyIntro">
                 {fireData
                  .filter(x => x.page === currentPage)
                  .sort((a, b) => {
                    return a.order - b.order;
                  })
                  .map(x => (
                  <div key={x.id} className="PageItem">
                    {console.log(x)}
                    <div className="Itemheader">{x.title}</div>
                    <div>{x.content}</div>
                  </div>
                ))} 
    
              </div>
            </div>
          );
    }
}
