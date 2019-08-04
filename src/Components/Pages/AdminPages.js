import React, { Component } from 'react'
import "./Page.css";
import firebase from '../../Utils/Firebase'
import NewItem from '../../Admin/NewItem';

const myCollection = firebase.firestore().collection("adminUpdates");


export default class AdminPages extends Component {
 
    render() {
      const { currentPage, fireData } = this.props.appState
      const handleDelete = (doc) => {
        myCollection.doc(doc).delete();
      };
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
                    <div>order:({x.order})</div>
                    <button onClick={()=>{handleDelete(x.id)}}>Delete</button>
                  </div>
                ))} 
                
              </div>
              <NewItem currentPage={currentPage} />
              <button onClick={()=>firebase.auth().signOut()}>Log Out</button>
            </div>
          );
    }
}
