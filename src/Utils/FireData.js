import React, { Component } from "react";
import firebase from "./Firebase";
import App from "../Components/App/App";

const myCollection = firebase.firestore().collection("adminUpdates");

export default class FireData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fireData: []
    };
  }
  componentDidMount() {
    let stuff = [];
    myCollection.onSnapshot(snapshot => {
      snapshot.forEach(doc => {
        stuff.push({ id: doc.id, ...doc.data() });
      });
      this.setState({
        fireData: stuff
      });
      stuff = [];
    });
  }
  render() {
    return <App fireData={this.state.fireData} signedIn={this.props.signedIn}/>;
  }
}
