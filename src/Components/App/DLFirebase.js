import React, { Component } from "react";
import firebase from "../../Utils/Firebase";

export default class DLFirebase extends Component {
  componentDidMount() {
    firebase
      .firestore()
      .collection("adminUpdates")
      .onSnapshot(snapshot => {
        snapshot.forEach(doc => {
          this.props.updatefireDBinfo([...this.props.fireDBinfo, doc.data()]);
        });
      });
  }
  render() {
    return <div />;
  }
}
