import React, { Component } from "react";
import App from "./Components/App/App";
import firebase from "./Utils/Firebase";
import FirestorePlay from "./Admin/FirestorePlay";
import FireData from "./Utils/FireData";

export default class Roles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signedIn: false
    };
  }
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      user
        ? this.setState({
            signedIn: true
          })
        : this.setState({
            signedIn: false
          });
    });
  }

  render() {
    // const display = this.state.signedIn ?  <FirestorePlay /> : <App />;
    // return display;
    return <FireData signedIn={this.state.signedIn} />
  }
}
