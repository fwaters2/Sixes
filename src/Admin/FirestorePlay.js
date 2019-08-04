import React, { Component } from "react";
import firebase from "../Utils/Firebase";
import Fbitem from "./Fbitem";
import NewItem from "./NewItem";
import FireData from '../Utils/FireData'
const myCollection = firebase.firestore().collection("adminUpdates");


export default class FirestorePlay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firebaseValues: [],
      page: "Register"
    };
  }
  componentDidMount() {
    let stuff = [];

    myCollection.onSnapshot(snapshot => {
      snapshot.forEach(doc => {
        stuff.push({ id: doc.id, ...doc.data() });
      });
      this.setState({
        firebaseValues: stuff
      });
      stuff = [];
    });
  }
  handlePageChange = e => {
    this.setState({
      page: e.target.value
    });
  };
  handleChange = e => {};

  render() {
    const { firebaseValues, page } = this.state;
    const pages = [
      "REGISTER",
      "INFO",
      "SCHEDULE",
      "TRANSPORTATION",
      "ACCOMMODATIONS",
      "PARTY",
      "CONTACT INFO"
    ];
    return (
      <div>
        <h1>{page}</h1>
        <select value={page} onChange={this.handlePageChange}>
          {pages.map(page => (
            <option value={page}>{page}</option>
          ))}
        </select>
        {firebaseValues
          .filter(x => x.page === page)
          .sort((a, b) => {
            return a.order - b.order;
          })
          .map(post => (
            <div>
              <Fbitem
                item={post}
                page={page}
                handleChange={this.handleChange}
              />
            </div>
          ))}
        <br />
        <NewItem page={page} />
        <button onClick={()=>console.log(FireData)}>Console.log</button>
      </div>
    );
  }
}
